BLOG

Api Firebase:

- [x] Authentification
- [x] Database
  - [x] User
    - [x] Article
    - [x] Comments

Fonctionnalités:

Login, Register, Disconnect:

- [x] Créer un compte
- [x] Se connecter
- [x] Se déconnecter

Article:

- [x] Afficher les articles
- [x] Lire un article
- [x] supprimer un article
- [x] Modifier un article
  - [x] modifier le titre
  - [x] modifier le contenu

Commentaires:

- [x] Afficher les commentaires
- [x] supprimer un com
      \*\*
- [x] Modifier un com
  - [x] modifier le contenu

Pages and Components:

- [x] MyApp (router)
  - [x] Header
    - [x] LogInButton
    - [x] HomeIconButton
    - [x] HambergerButton
    - [x] MenuModal
      - [x] LogOutButton
  - [x] Login
    - [x] LogForm
    - [x] LogLink
  - [x] Register
    - [x] LogForm
    - [x] LogLink
  - [x] Home
    - [x] ArtlicleList
      - [x] ArticleItem
        - [x] Article
          - [x] AuthorComponent
          - [x] CommentList
            - [x] CommentItem
              - [x] DeleteCommentButton
        - [x] AddCommentForm
  - [x] AddArticle
  - [x] 404
  - [x] Footer

Pages:

- [x] MyApp (router)
- [x] Login
- [x] Register
- [x] Home
- [x] Article
- [x] AddArticle
- [x] 404
- [x] Footer

Components:

- [x] Header
- [x] LogInButton
- [x] LogOutButton
- [x] HomeIconButton
- [x] HamburgerButton
- [x] MenuModal
- [x] LogForm
- [x] LogLink
- [x] ArtlicleList
- [x] ArticleItem
- [x] AuthorComponent
- [x] CommentList
- [x] CommentItem
- [x] DeleteCommentButton
- [x] AddCommentForm

Providers:

- [x] Providers
  - [x] UserProvider
  - [x] ArticleProvider
  - [x] CommentsProvider

Gestion des erreurs:

Login:

- [x] identifiant invalide (sans preciser email ou password)
- [x] email vide
- [x] password vide

Register :

- [x] email invalide
- [x] email deja utilisé
- [x] password invalide
  - [x] 8 caractères
  - [x] 1 majuscule
  - [x] 1 chiffre
  - [x] 1 caractère special
- [x] password ne correspond pas
- [x] email vide
- [x] password vide

Article:

- [x] erreur lors de la suppression
- [x] Article (titre) deja present ( ajout ou la modification)

Commentaire:

- [x] erreur lors de la suppression

Etape:

- [v] projet
- [v] projet Git
- [v] Firebase auth puis article/coms
- [x] dépendances (toastify/firebase/styled-comp)
- [x] créer dossier/fichiers
- [x] firebase et env.
- [x] créer router
- [x] providers
- [x] Constants
- [x] register
- [x] login
- [x] disconnect
- [x] header
- [x] menu
- [x] articleList
- [x] articleItem
  - [x] fake
  - [x] fetch
- [x] Ajouter un article (AddArticleForm in AddArticle)
- [x] Article(Page)
  - [x] fake
  - [x] fetch
- [x] Supprimer un article
- [x] Modifier un article
- [x] author
- [x] Footer
- [x] CommentList
  - [x] ajouter un commentaire (form)
- [x] commentItem

  - [x] supprimer un commentaire

- [x] modifier un commentaire \*\*