# Contribution et politique de publication

Ce dépôt héberge le code de la **candidate publique 1.2.0 France** du Localisateur de PR.

## Développement

1. Créer une branche dédiée et limiter les changements à un sujet fonctionnel.
2. Lancer `node --check src/WME-Localisateur-de-PR-France-v1.2.0.user.js` puis `node tests/public-candidate-check.cjs`.
3. Fournir les étapes de reproduction pour tout changement affectant le calcul PR, la géométrie, les interactions WME ou les calques.
4. Tester dans WME Beta puis Production avant validation de la publication.
5. Vérifier l'absence de secrets, de code personnel privé, de données non redistribuables et de fichiers issus d'autres projets.

Aucune action GitHub de ce dépôt ne publie sur GreasyFork. Le contrôle de version GreasyFork historique inclus dans le userscript n'est pas un déploiement.

La version France publique n'expose pas le mode Colombie BETA en attente de clarification des droits sur les données sources.

Les modifications de l'API/BD restent indépendantes du présent dépôt : la licence du userscript ne confère aucun droit de redistribuer les jeux de données externes.
