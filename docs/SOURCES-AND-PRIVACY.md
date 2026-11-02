# Sources, API et confidentialité — candidate 1.2.0

## Périmètre public actuel

La candidate du userscript expose **uniquement la France**. Le mode Colombie BETA, présent historiquement dans le moteur source, n'est pas proposé par le sélecteur et ne peut pas être activé par le paramétrage normal. Son inclusion future suppose une validation indépendante des droits de réutilisation et de redistribution des données INVÍAS / Red Vial. **Aucun jeu de données géographiques tiers n'est livré dans ce dépôt.**

## Données et provenance

- France : données de points de repère IGN BD TOPO® v3, © IGN, annoncées dans la source historique sous Licence Ouverte Etalab 2.0.
- La source de la candidate mentionne une extraction Géoplateforme du 22 septembre 2026 (lot IONOS). **L'édition officielle exacte n'est pas établie** et ne doit pas être déduite d'horodatages techniques.
- Service consommé : `https://api.x32data.fr/v1/pr/compat/` (HTTPS, lecture et recherche).
- Les calculs exploitent aussi la géométrie de routes visible/chargée dans WME et les fonctions du SDK WME.

La licence MIT du code **ne s'applique pas** aux données IGN, INVÍAS, Waze ou aux autres données externes.

## Fonctionnement réseau et vie privée

Le userscript interroge l'API X32 Data avec les critères utiles à la recherche (axe, PR, département et, si applicable, gestionnaire), ou l'emprise cartographique visible pour son calque PR. Les requêtes du localisateur n'ajoutent pas de pseudonyme Waze ni d'identifiant d'objet WME. L'hébergement de l'API est indiqué comme IONOS dans la présentation des sources.

Les préférences d'interface et le cache de vérification de version sont stockés localement par Tampermonkey. Le script ne tient pas d'historique des recherches. Les notes WME ne sont créées que sur action explicite de l'éditeur.

Un contrôle de version GreasyFork existe dans le script d'origine pour les installations reconnues ; la candidate ne définit **aucune** directive automatique `@updateURL` ou `@downloadURL`. Le dépôt GitHub ne déclenche pas de publication GreasyFork.

## Cloisonnement

Le dépôt public ne contient aucun module, code de raccordement, réglage d'accès ou identifiant propre à l'environnement personnel d'administration. La publication d'une candidate doit toujours passer les vérifications automatisées et la recette manuelle.
