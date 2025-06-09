from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json(force=True)
    nome = data.get('nome')
    email = data.get('email')
    mensagem = data.get('mensagem')
    print(f"Mensagem recebida de {nome} <{email}>: {mensagem}")
    return jsonify({'status': 'success', 'message': 'Mensagem recebida!'})

if __name__ == '__main__':
    app.run(debug=True)
