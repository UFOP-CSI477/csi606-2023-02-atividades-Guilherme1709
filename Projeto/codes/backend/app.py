from py2neo import Graph
from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'jarjarbinks'  # Defina sua própria chave secreta

graph = Graph("bolt://localhost:7687", auth=("neo4j", "ojuara71"))

def get_location(name):
    consulta = graph.run("MATCH (l:PLACE)<-[r]-(o) WHERE type(r) STARTS WITH 'OTHER_NAME' RETURN l.name AS name, collect(o.name) AS othernames")
    todos_nomes = [(record["name"], record["othernames"]) for record in consulta]
    return todos_nomes

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET', 'POST'])
def search():
    # Aqui você deve implementar a lógica de pesquisa de locais
    pass

@app.route('/map', methods=['GET'])
def map():
    # Aqui você deve implementar a lógica de visualização do mapa
    pass

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Credenciais inválidas. Por favor, tente novamente.'
        else:
            session['logged_in'] = True
            return redirect(url_for('index'))
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    return 'Você saiu da sua conta'

@app.route('/json', methods=['GET'])
def json():
    if 'logged_in' in session:
        # Aqui você deve implementar a lógica de geração do arquivo JSON
        pass
    else:
        return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(debug=True)
