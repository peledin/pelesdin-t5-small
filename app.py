from flask import Flask, render_template, request, jsonify
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import time

app = Flask(__name__)

model = AutoModelForSeq2SeqLM.from_pretrained("google/flan-t5-small")
tokenizer = AutoTokenizer.from_pretrained("google/flan-t5-small")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def translate():
    input_text = f"{request.form['text']}\n"


    start_time = time.time()

    inputs = tokenizer(input_text, return_tensors="pt")

    outputs = model.generate(**inputs, \
                         min_length=0, \
                         max_new_tokens=512, \
                         length_penalty=2.0, \
                         num_beams=16, \
                         no_repeat_ngram_size=2, \
                         early_stopping=True)

    output_text = tokenizer.batch_decode(outputs, skip_special_tokens=True)

    end_time = time.time()
    total_time = end_time - start_time
    
    minutes = int(total_time // 60)
    seconds = int(total_time % 60)

    response = {
        'output': output_text[0],
        'inference_time': f"{minutes} minutes {seconds} seconds"
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

