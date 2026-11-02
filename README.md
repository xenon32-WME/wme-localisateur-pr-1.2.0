# WME Localisateur de PR — 1.2.0

Userscript pour retrouver des **points de repère routiers (PR)** depuis l'éditeur de carte Waze (WME). Cette branche contient une **candidate publique France**, encore en recette.

> **Statut : pas de release, pas de publication GreasyFork, pas de remplacement automatique de la 1.1.5 en service.**

## Fonctionnalités de la candidate

- Recherche par axe routier et PR (ex. `D1084`, `35+250`), y compris recherche d'une zone comprise entre deux PR.
- Prise en charge des types A, N, D et des axes intercommunaux.
- Géométrie WME, sélection de segments, sens de circulation et visualisation du résultat.
- Calque général de points de repère, cartouches, filtres et personnalisation.
- Accès HTTPS aux données IGN par l'intermédiaire du service **X32 Data**, avec informations de source et confidentialité.
- Initialisation du SDK WME en **mode asynchrone obligatoire**.

Le **mode Colombie BETA n'est pas activé dans cette édition publique**, en attente de validation des droits des données concernées. Le code de compatibilité historique peut encore être présent mais n'est pas accessible par la configuration utilisateur de cette candidate.

## Organisation

| Chemin | Rôle |
| --- | --- |
| `src/WME-Localisateur-de-PR-France-v1.2.0.user.js` | Userscript de la candidate |
| `tests/` | Garde-fous d'édition publique, contrôles de sources et test du démarrage SDK |
| `.github/workflows/validate.yml` | Vérification syntaxique et exécution des tests Node |
| `docs/RECETTE-WME.md` | Recette manuelle WME Beta / Production |
| `docs/SOURCES-AND-PRIVACY.md` | Provenance des données, appels réseau et confidentialité |
| `docs/CONTRIBUTING.md` | Contributions et règles de publication |

## Tests automatisés

Node.js 22 est recommandé.

```bash
node --check src/WME-Localisateur-de-PR-France-v1.2.0.user.js
node tests/public-candidate-check.cjs
node tests/france-sources-and-ui.cjs
node tests/strict-async-sdk-startup.cjs
```

Ces contrôles vérifient notamment que le mode Colombie est désactivé, que le code privé n'est pas introduit, que les directives de mise à jour automatique sont absentes et que l'initialisation SDK est strictement asynchrone.

## Installation pour recette uniquement

Installer le fichier `.user.js` dans Tampermonkey, depuis un **profil de navigateur réservé à la recette**. Ne pas activer les variantes historiques DEV/TEMP en même temps : les préférences locales peuvent se chevaucher.

La candidate doit encore être testée en situation réelle dans WME Beta et Production. Pour les critères : [plan de recette](docs/RECETTE-WME.md).

## Licence et sources

Le **code** est sous licence MIT ([LICENSE](LICENSE)). La licence MIT ne couvre **pas** les jeux de données cartographiques ou leurs droits de redistribution.

Les mentions IGN BD TOPO® / Licence Ouverte 2.0 et la date d'extraction proviennent de la source de la candidate ; l'édition officielle exacte reste à confirmer. Voir [Sources et confidentialité](docs/SOURCES-AND-PRIVACY.md).

Aucune clé privée ni composant du module personnel d'administration ne doit être ajouté à ce dépôt.
