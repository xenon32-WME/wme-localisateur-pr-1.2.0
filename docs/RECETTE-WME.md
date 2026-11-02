# Plan de recette WME — 1.2.0 candidate publique France

**Statut : à exécuter et consigner avant toute publication définitive.** Les tests Node et les vérifications syntaxiques ne remplacent pas la validation interactive dans WME.

## Préparation

- [ ] Installer la candidate dans un **profil Tampermonkey de recette** (ne pas activer simultanément les variantes historiques DEV/TEMP).
- [ ] Vérifier le démarrage sans erreur dans **WME Beta** et **WME Production**.
- [ ] Vérifier l'acquisition du SDK WME en mode asynchrone uniquement ; aucune initialisation par repli synchrone.
- [ ] Vérifier le panneau latéral, le mode flottant, l'en-tête, le zoom et le recentrage.
- [ ] Vérifier que la France est le seul pays proposé et qu'une préférence locale historique `CO` revient sur `FR`.

## Recherches et géométrie

- [ ] Routes départementales (D), nationales (N), autoroutes (A) et catégories intercommunales (I).
- [ ] Points PR et PRF, saisies `52+000`, `60+007` et zone entre deux PR.
- [ ] Résultats de distance/limite (DS/FS) et comportements aux ruptures de géométrie.
- [ ] Autoroute : vérifier les deux sens, la sélection de chaussée et les cartouches.
- [ ] Segments WME non chargés / partiellement chargés : messages et absence de résultat trompeur.
- [ ] Sélection automatique de segment, éventuelle note de carte uniquement sur commande explicite.

## Calques et persistance

- [ ] Calque général de PR, filtrages, étiquettes, zoom, rafraîchissement et suppression.
- [ ] Personnalisation des tailles/couleurs, panneaux et préférences persistantes après rechargement.
- [ ] Retour à la recherche après l'affichage des réglages.

## Réseau / confidentialité / livraison

- [ ] Requêtes GET vers l'API HTTPS X32 Data, erreurs HTTP et indisponibilité correctement gérées.
- [ ] Absence de requêtes envoyant un identifiant Waze ou un identifiant d'objet WME.
- [ ] Sources IGN, avertissements et traitement des données affichés correctement.
- [ ] Aucun mécanisme de mise à jour automatique activé sur la candidate.
- [ ] Sauvegarder les résultats WME Beta et Production, les anomalies et le SHA-256 du fichier validé.

**Décision de publication : non acquise par la seule présence du code dans GitHub.**
