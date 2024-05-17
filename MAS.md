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
  - [x] CreateArticle
  - [x] 404
  - [x] Footer

Pages:

- [x] MyApp (router)
- [x] Login
- [x] Register
- [x] Home
- [x] Article
- [x] CreateArticle
- [x] 404

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
- [x] Footer

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
- [v] dépendances (toastify/firebase/styled-comp)
- [v] créer dossier/fichiers
- [v] firebase et env.
- [v] providers
- [v] créer router
- [v] Constants
- [v] register
- [v] LogForm
- [v] login
- [v] header
- [v] menu
- [v] disconnect
- [v] home
- [v] articleList
  - [v] fake
- [v] Ajouter un article (AddArticleForm in AddArticle)
  - [v] fake
  - [v] fetch
- [v] backHomeButton
- [v] articleList
  - [v] fetch
- [v] articleItem
- [v] Article(Page)
  - [v] fake
  - [v] fetch
- [v] Supprimer un article
- [x] Modifier un article
- [x] author
- [x] Footer
- [x] CommentList
  - [x] ajouter un commentaire (form)
- [x] commentItem

  - [x] supprimer un commentaire

- [x] modifier un commentaire \*\*

dependances:
react icon
firebase styled comp
toastify
