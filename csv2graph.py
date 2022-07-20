NB_PARENTS = 2
NB_SUGARS = 3

import csv
import sys, getopt

def main(csvpath, txtpath):
    persons = []
    parents = []
    sugars = []
    couples = []

    # Parse the CSV
    with open(csvpath, newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in spamreader:
            if row[0]:
                # Get All Name
                name = row[0]
                persons.append(row[0])

                for i in range(1, len(row)):
                    if not row[i]:
                        continue
                    
                    # Get Parents
                    if i <= NB_PARENTS:
                        parents.append(row[i] + ' ' + name + ' parent')
                    # Get Sugars
                    elif i <= NB_PARENTS + NB_SUGARS:
                        sugars.append(row[i] + ' ' + name + ' sugar')
                    # Get Couples
                    else:
                        couples.append(name + ' ' + row[i])
                    
                    
    # print(persons)
    # print(parents)
    # print(sugars)
    # print(couples)

    # Export the Graph text file
    with open(txtpath, mode="wt") as f:
        f.write('\n'.join(persons))
        f.write('\n\n')
        f.write('\n'.join(parents))
        f.write('\n\n')
        f.write('\n'.join(sugars))
        f.write('\n\n')
        f.write('\n'.join(couples))

if __name__ == "__main__":
   if len(sys.argv) < 3:
       print('Utilisez le format : python csv2graph.py tableau.csv graphe.txt')
   else:
       main(sys.argv[1], sys.argv[2])
