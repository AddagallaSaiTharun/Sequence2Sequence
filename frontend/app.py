from flask import Flask,redirect, url_for
from flask_cors import CORS
import tensorflow as tf
reloaded = tf.saved_model.load('./mymodel')
app = Flask(__name__)
CORS(app)
@app.route('/')
def hello_world():
  return "Hello this a text to gloss convertion flask app"
    
@app.route('/<english>',methods=['GET'])
def translate(english, model=reloaded):
  pred = model.translate([english.lower()])[0].numpy().decode()
  return {"english":english,"predict":pred}

if __name__ == '__main__':
  app.run()