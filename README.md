# Tchoinki-Couple
Conversion d'un fichier CSV en graphe pour https://csacademy.com/app/graph_editor/

# Comment faire l'arbre généalogique

## 1/ Modifier les relations sur le tableur

 * Faire les changements de relation sur [Google Sheet](https://docs.google.com/spreadsheets/d/1D6fMJB34T3BYFzvyFDbP-SVo6syHEU-k6Sqr7WHGArY).
 * Exporter le fichier au format `csv`.

## 2/ Changer le fichier `csv` en graphe

 * Exécuter le script python avec le fichier csv sous la forme : 
`python csv2graph.py table.csv graphe.txt`

## 3/ Générer l'arbre généalogique

 * Utiliser [CSAcademy](https://csacademy.com/app/graph_editor/)
 * Choisir `Directed Graph`
 * Copier le contenu du fichier `graphe.txt` sur la gauche.
 * Exporter le graphe au format PNG

# License

This work is licensed under the [MIT license](LICENSE).

This work was made for [Tchouki](https://www.twitch.tv/tchouuki) on twitch.
