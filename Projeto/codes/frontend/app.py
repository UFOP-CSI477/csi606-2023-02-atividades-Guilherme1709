from py2neo import Graph
from flask import Flask, render_template, request, session, redirect, url_for
from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__, template_folder='C:\\Users\\guilh\\Documents\\Faculdade\\Períodos\\6° Período\\Sistemas Web I\\Projeto\\codes\\frontend\\templates')
app.secret_key = 'jarjarbinks' 

graph = Graph("bolt://localhost:7687", auth=("neo4j", "ojuara71"))

def get_location(name):
    consulta = graph.run("MATCH (l:PLACE)<-[r]-(o) WHERE toLower(l.name) = toLower($name) AND type(r) STARTS WITH 'OTHER_NAME' RETURN l.name AS name, l.latitude AS latitude, l.longitude AS longitude, l.population AS population, l.timezone AS timezone", name=name)
    todos_nomes = [{"name": record["name"], "latitude": record["latitude"], "longitude": record["longitude"], "population": record["population"], "timezone": record["timezone"]} for record in consulta]
    return todos_nomes[0] if todos_nomes else None


def register_user(username, password):
    hashed_password = generate_password_hash(password)
    graph.run("CREATE (u:User {username: $username, password: $hashed_password})", username=username, hashed_password=hashed_password)


def check_credentials(username, password):
    user = graph.run("MATCH (u:User {username: $username}) RETURN u", username=username).data()
    if user and check_password_hash(user[0]['u']['password'], password):
        return True
    return False


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        name = request.form.get('name')
        location = get_location(name)

        if location:
            session['location'] = location

            coordenadas = {
            'latitude': location['latitude'],
            'longitude': location['longitude']
            }

        return render_template('search_results.html', location=location, coordenadas=coordenadas)
    return render_template('search.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        register_user(username, password)
        return redirect(url_for('login'))
    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if check_credentials(username, password):
            session['logged_in'] = True
            return redirect(url_for('index'))
        else:
            error = 'Credenciais inválidas. Por favor, tente novamente.'
    return render_template('login.html', error=error)


@app.route('/json', methods=['GET', 'POST'])
def json():
    if 'logged_in' in session:
        if request.method == 'POST':
            location = session.get('location')
            if location:
                return jsonify(location)
    else:
        return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(debug=True, port=8080)
