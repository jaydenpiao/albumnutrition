import re 
import sys
import os
# insert at 1, 0 is the script path (or '' in REPL)
sys.path.insert(1, os.path.join(sys.path[0], '../lyrics'))
from coming_home import lyrics

stop_words = ( 'im', 'like', 'me', 'my', 'we', 'our', 'ours', 'ourselves', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't")
new_stop_words = set()
res = {}
for w in stop_words:
    new_stop_words.add(re.sub(r'[^\w\s]','',w))


seen = set()
count = 0

words = lyrics.split()

for w in words:
    # if '[' in w:
    #     continue
    # if ']' in w:
    #     continue
    stripped = re.sub(r'[^\w\s]','',w)    
    stripped = stripped.lower()

    if stripped not in seen:
        seen.add(stripped)
        count += 1

    if stripped in new_stop_words:
        continue

    if stripped in res:
        res[stripped] += 1

    else:
        res[stripped] = 1

# print(res)

print({k: v for k, v in sorted(res.items(), key=lambda item: item[1])})
print(count)
print(len(words))