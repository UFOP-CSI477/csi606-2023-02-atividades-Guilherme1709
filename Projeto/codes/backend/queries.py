from neo4j import GraphDatabase

class queries:
    def __init__(self, uri, user, password):
        self._driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self._driver.close()

    def get_local_info(self, local):
        local_info_list = []
        all_other_names = set()
        with self._driver.session() as session:
            result = session.run(
                "MATCH (p:PLACE{name:$name})"
                "RETURN DISTINCT p.name AS name, p.latitude AS latitude, p.longitude AS longitude, "
                "p.population AS population, p.timezone AS timezone, p.geonameid AS geonameid",
                name=local
            )
            
            for record in result:
                local_info = {}
                
                local_info["name"] = record["name"]
                local_info["latitude"] = record["latitude"]
                local_info["longitude"] = record["longitude"]
                local_info["timezone"] = record["timezone"]
                local_info["population"] = record["population"]
                local_info["geonameid"] = record["geonameid"]
                local_info["other_names"] = []

                for i in range(66):
                    label = f"OTHER_NAME{i}"
                    numb = f"othername{i}"
                    othername_result = session.run(
                        f"MATCH (p:PLACE)<-[:{label}]-(other:{numb}) "
                        "WHERE p.name = $name "
                        "AND p.geonameid = other.geonameid "
                        f"RETURN DISTINCT other.{numb} AS othername",
                        name=local
                    )
                    
                    for othername in othername_result:

                        if othername["othername"] not in all_other_names:
                            local_info["other_names"].append(othername["othername"])
                            all_other_names.add(othername["othername"])
                        
                
                        

                local_info_list.append(local_info)

            print(local_info_list)

            return local_info_list



