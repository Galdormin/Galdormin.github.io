NB_PARENTS = 2
NB_SUGARS = 3

import csv
from msvcrt import kbhit
import sys
from pyvis.network import Network

def main(csvpath, htmlpath):
    persons = {}
    parents = []
    sugars = []
    couples = []

    # Parse the CSV
    with open(csvpath, newline='') as csvfile:
        k = 0
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            if row[0]:
                # Get All Name
                name = row[0]
                persons[name] = k
                k = k+1

                for i in range(1, len(row)):
                    if not row[i]:
                        continue
                    
                    # Get Parents
                    if i <= NB_PARENTS:
                        parents.append((row[i], name))
                    # Get Sugars
                    elif i <= NB_PARENTS + NB_SUGARS:
                        sugars.append((row[i], name))
                    # Get Couples
                    else:
                        couples.append((name, row[i]))
                    
                    
    # print(persons)
    # print(parents)
    # print(sugars)
    # print(couples)
    
    # Create the Networkx
    graph = Network('100%', '60%', directed = True)
    
    graph.set_options('''var options = {
        "edges": {
            "smooth": false
        }
    }''')
    
    for name in persons:
        graph.add_node(persons[name], label = name)
        
    for (p1, p2) in couples:
        graph.add_edge(persons[p1], persons[p2], width=2)
    
    for (p1, p2) in parents:
        graph.add_edge(persons[p1], persons[p2], color='red', width=2)
        
    for (p1, p2) in sugars:
        graph.add_edge(persons[p1], persons[p2], color='green', width=2)
    
    graph.write_html(htmlpath)

if __name__ == "__main__":
   if len(sys.argv) < 3:
       print('Utilisez le format : python csv2network.py tableau.csv arbre.html')
   else:
       main(sys.argv[1], sys.argv[2])
