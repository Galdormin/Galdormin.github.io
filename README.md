# Tchoinki-Couple

## Modifier les relations sur le tableur

 * Faire les changements de relation sur [Google Sheet](https://docs.google.com/spreadsheets/d/1D6fMJB34T3BYFzvyFDbP-SVo6syHEU-k6Sqr7WHGArY).
 * Exporter le fichier au format `csv`.

## Méthode 1 : Arbre Généalogique avec CSAcademy
Conversion d'un fichier CSV en graphe pour https://csacademy.com/app/graph_editor/

 * Exécuter le script python avec le fichier csv sous la forme : 
`python csv2graph.py table.csv graphe.txt`
 * Utiliser [CSAcademy](https://csacademy.com/app/graph_editor/)
 * Choisir `Directed Graph`
 * Copier le contenu du fichier `graphe.txt` sur la gauche.
 * Exporter le graphe au format PNG

## Méthode 2 : Arbre Généalogique avec Python
Conversion d'un fichier CSV en graphe avec Python et la bibliothèque [Pybis](https://pyvis.readthedocs.io/)

 * Exécuter le script python avec le fichier csv sous la forme : 
`python csv2network.py table.csv graphe.html`
 * Ouvrir le fichier `graphe.html` avec votre navigateur internet favoris.

# License

This work is licensed under the [MIT license](LICENSE).

This work was made for [Tchouki](https://www.twitch.tv/tchouuki) on twitch.
