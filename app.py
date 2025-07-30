from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    message = request.form.get("message")

    return f'''
    very thoughful message:
    <br>
    {message}
    '''


if __name__ == '__main__':
    app.run(debug=True, port=8000)
