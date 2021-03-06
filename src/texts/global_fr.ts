export const TEXT = {
    // GENERAL VARIABLES

    // Utils
    add: 'Ajouter',
    adm1: 'Province',
    adm2: 'District',
    adm3: 'Commune',
    adm4: 'Village',
    back: 'Retour',
    beneficiaries: 'Bénéficiaires',
    beneficiary: 'Bénéficiaire',
    cancel: 'Annuler',
    close: 'Fermer',
    characters:'Caractères',
    create: 'Créer',
    delete: 'Supprimer',
    details: 'Détails',
    distribution: 'Distribution',
    distributions: 'Distributions',
    done: 'Fin',
    email: 'Email',
    export: 'Export',
    gender: 'Sexe',
    home: 'Accueil',
    households: 'Ménage',
    import: 'Import',
    individual: 'Individual',
    location: 'Lieu',
    new: 'Nouveau',
    next: 'Suivant',
    no_data: 'Pas de données',
    phone: 'Téléphone',
    project: 'Projet',
    projects: 'Projets',
    reports: 'Rapports',
    rights: 'Rôles',
    save: 'Enregistrer',
    settings: 'Paramètres',
    update: 'Modifier',

    // Error
    back_to_homepage: 'Retour à la page d\'accueil',
    error_interceptor_msg: 'Un erreur est survenue, la requête n\'a pas abouti (La réponse de retour est vide).',
    forbidden: 'Page interdite',
    forbidden_message: 'Désolé, vous n\'avez pas l\'autorisation d\'accéder à cette page',
    not_found: 'Page non trouvée',
    not_found_message: 'Désolé, cette page n\'est pas disponible',

    // Role
    role_user_admin: 'Administrateur',
    role_user_country_manager: 'Responsable de pays',
    role_user_field_officer: 'Agent de terrain',
    role_user_project_manager: 'Responsable de projet',
    role_user_project_officer: 'Agent de projet',
    role_user_regional_manager: 'Responsable de région',


    // SPECIFIC VARIABLES

    // Add beneficiary
    add_beneficiary_done: 'Récapitulatif du bénéficiaire à créer',
    add_beneficiary_getAddressNumber: 'Numero de rue',
    add_beneficiary_getAddressPostcode: 'Code Postal',
    add_beneficiary_getAddressStreet: 'Rue',
    add_beneficiary_getDateOfBirth: 'Date de naissance',
    add_beneficiary_getFamilyName: 'Nom de famille',
    add_beneficiary_getGivenName: 'Prénom',
    add_beneficiary_getNationalID: 'Identifiant national',
    add_beneficiary_getOccupation: 'Métier',
    add_beneficiary_getTypeNationalId: 'Type d\'identifiant national',
    add_beneficiary_getTypePhone: 'Type de téléphone',
    add_beneficiary_res_address: 'Adresse du résident',
    add_beneficiary_step1: 'Information',
    add_beneficiary_step2: 'Chef de famille',
    add_beneficiary_step3: 'Membres',
    add_beneficiary_title: 'Ajout d\'un bénéficiaire',

    // Add distribution
    add_distribution_advanced_option: 'Options avancées',
    add_distribution_beneficiaries_reached: 'Bénéficaires atteints',
    add_distribution_check_date: 'Erreur lors de la sauvegarde de la date, vérifiez que le format est mm/dd/yyyy',
    add_distribution_check_fields: 'Remplissez les informations de la nouvelle distribution avant, incluant les commodités et le score minimum de sélection supérieur à 0.',
    add_distribution_commodities_delivered: 'a être délivrées',
    add_distribution_created: ' a été créée',
    add_distribution_date_inside_project: 'Erreur lors de la création d\'une nouvelle distribution, la date de la distribution doit être comprise entre les dates du projet',
    add_distribution_distributed_commodity: 'ressource distribuée',
    add_distribution_error_creating: 'Erreur lors de la création de la nouvelle distribution',
    add_distribution_female: 'Femme',
    add_distribution_households_reached: 'Ménages atteints',
    add_distribution_male: 'Homme',
    add_distribution_missing_commodity: 'Une commodité est manquante',
    add_distribution_missing_date: 'La date est manquante',
    add_distribution_missing_selection_criteria: 'Un critère de sélection est manquant',
    add_distribution_missing_threshold: 'Le score minimum doit être plus grand que 0',
    add_distribution_selection_criteria: 'critères de sélection',
    add_distribution_text_explanation: 'Le système va seulement sélectionner les bénéficiaires/ménages avec un score supérieur que le score minimum de sélection',
    add_distribution_threshold: 'Score minimum de sélection',

    // Add project
    add_project_new_distribution: 'nouvelle distribution',
    add_project_title: 'nouveau projet',

    // Beneficiaries
    beneficiaries_add_distribution: 'Ajouter les bénéficiaires à cette distribution',
    beneficiaries_add_list: 'Ajouter cette liste au projet',
    beneficiaries_add_project: 'S\'il vous plait, sélectionnez le(s) projet(s) dans le(s)quel(s) vous voudriez ajouter les',
    beneficiaries_added: 'Les bénéficiaires ont été ajouté au projet sélectionné',
    beneficiaries_advanced_research:'Recherche avancée',
    beneficiaries_clear_all_research:'Réinitialiser les filtres',
    beneficiaries_full_address: 'Adresse entière du ménage :',
    beneficiaries_household_info: 'Résumé des informations du ménage:',
    beneficiaries_import_addFile: 'ajouter un fichier ou glisser-déposer',
    beneficiaries_import_api: 'import depuis une source externe',
    beneficiaries_import_beneficiaries_imported: ' bénéficiaires insérés',
    beneficiaries_import_check_fields: 'Un champs est vide, s\'il vous plaît remplissez tous les champs et sélectionner un projet',
    beneficiaries_import_csv: 'télécharger le modèle',
    beneficiaries_import_error_importing: 'Erreur lors de l\'importation des données',
    beneficiaries_import_file: 'import depuis un fichier',
    beneficiaries_import_select_project: 'Vous devez selectionner un projet et ajouter un fichier avant l\'importation',
    beneficiaries_import_title: 'import de bénéficiaires',
    beneficiaries_location: 'Localisation du ménage :',
    beneficiaries_proxy: 'Proxy',
    beneficiaries_select_api: 'Sélectionner une API',
    beneficiaries_selected_project: 'bénéficiaires sélectionnés:',

    // Cache
    cache_distribution_added: 'Distribution et bénéficiaires du projet ont été ajoutés dans le cache',
    cache_store_beneficiaries: 'Enregistrer les bénéficiaires',
    cache_no_distribution: 'Cette distribution n\'est pas enregistrée dans le cache, vous ne pouvez pas y accéder hors-ligne',
    
    // Dashboard
    dashboard_distribution_map: 'répartition des distributions',
    dashboard_recent_distributions: 'distributions récentes',
    dashboard_summary: 'sommaire',
    dashboard_summary_1: 'total de bénéficiaires',
    dashboard_summary_2: 'projets en cours',
    dashboard_summary_3: 'bénéficiaires enregistrés',
    dashboard_summary_4: 'montant total des transactions',

    // Data verification
    data_verification_chip_actual: 'Ménage ciblé',
    data_verification_chip_add: 'A ajouter',
    data_verification_chip_existing: 'Actuel',
    data_verification_chip_old: 'Ancien',
    data_verification_chip_remove: 'A supprimer',
    data_verification_description1: 'Ci-dessous seront affichées les typos suspectes des bénéficiaires listés dans le fichier : S\'il s\'avère qu\'un bénéficiaire est presque identique à un autre dans la base de données, il sera affiché ici. Vous pouvez choisir entre remplacer les valeurs par le bénéficiaire qui est importé, conserver celui déjà présent, ou les sauvegarder comme deux bénéficiaires distincts',
    data_verification_description2: 'Ici sont affichés les bénéficiaires de votre fichier qui existent déjà dans la base de données comme membres d\'un foyer. Si le bénéficiaire n\'est pas un chef de famille, vous pouvez choisir de supprimer l\'un ou l\'autre, ou de conserver les deux dans le cas où vous êtes sûr qu\'il s\'agit de deux personnes différentes.',
    data_verification_description3: 'Ci-dessous sont listés les foyers déjà existants dans la base de données mais avec moins de bénéficiaires que dans le fichier importé. Vous pouvez vérifier les informations et ajouter ceux que vous désirez au foyer présent dans la base de données.',
    data_verification_description4: 'Ci-dessous sont listés les foyers déjà existants dans la base de données mais avec plus de bénéficiaires que dans le fichier importé. Vous pouvez vérifier les informations et supprimer ceux que vous désirez au foyer présent dans la base de données.',
    data_verification_description_end: 'Les modifications seront ajoutées à la base de donnée à chaque étape validée.',
    data_verification_done: 'Toutes les données ont été vérifiées',
    data_verification_error: 'Erreur lors du parcours des données',
    data_verification_send: 'Envoyer',
    data_verification_snackbar_duplicate_corrected: 'Problèmes de doublons corrigées',
    data_verification_snackbar_duplicate_no_corrected: 'Toutes les erreurs de doublons ne sont pas corrigées',
    data_verification_snackbar_less_corrected: 'Bénéficiaires supprimer avec succès',
    data_verification_snackbar_more_corrected: 'Bénéficiaires ajouter avec succès',
    data_verification_snackbar_typo_corrected: 'Erreurs d\'orthographe corrigées',
    data_verification_snackbar_typo_no_corrected: 'Toutes les erreurs d\'orthographe ne sont pas corrigées',
    data_verification_step_1: 'Erreurs d\'orthographe',
    data_verification_step_1_no_issues: 'Aucune erreur d\'orthographe',
    data_verification_step_2: 'Doublons',
    data_verification_step_2_no_issues: 'Aucun doublon',
    data_verification_step_3: 'Ajout',
    data_verification_step_3_no_issues: 'Aucun bénéficiaire à ajouter',
    data_verification_step_4: 'Suppression',
    data_verification_step_4_no_issues: 'Aucun bénéficiaire à supprimer',
    data_verification_step_info: 'Info de l\'étape',
    data_verification_title: 'vérification et validation des données',

    // Distribution
    distribution_accept_changed: 'Accepter les changements',
    distribution_add_beneficiaries: 'Ajouter des bénéficiaires à cette distribution',
    distribution_beneficiary_added: 'Bénéficiaire ajouté',
    distribution_beneficiary_not_added: 'Le bénéficiaire n\'a pas pu être ajouté',
    distribution_cant_update: 'Vous ne pouvez pas modifier cette distribution',
    distribution_details_export: 'liste de distribution',
    distribution_details_import: 'importer & comparer',
    distribution_details_random: 'échantillon aléatoire',
    distribution_details_sample_size: 'Taille d\'échantillon',
    distribution_details_validate: 'valider & verouiller',
    distribution_edit:'Modifier la distribution',
    distribution_error_validate: 'La distribution est vide, veuillez la remplir avant de la valider',
    distribution_no_beneficiaries: 'Aucun bénéficiaire n\'a été ajouté ou supprimé. N\'importe quel changement fait aux bénéficiaires importés vont être mis à jour dans le système.',
    distribution_no_random_sample: 'L\'échantillon aléatoire ne peut pas être généré',
    distribution_no_right_transaction: 'Vous n\'avait pas le droit nécessaire pour réaliser la transaction, demandez à votre responsable de projet ou à votre responsable de pays',
    distribution_no_right_validate: 'Vous n\'avez pas le droit nécessaire pour valider la distribution, demandez à votre responsable de projet',
    distribution_no_valid_commodity: 'Aucune commodité valide detectée pour cette distribution.',
    distribution_not_modified: 'Cette distribution n\'a pas été modifiée',
    distribution_not_validated: 'La distribution n\'a pas pu être validée',
    distribution_request_logs: 'Recevoir l\'historique des transactions par mail',
    distribution_select_beneficiaries: 'S\'il vous plait, selectionner les bénéficiaires depuis le projet',
    distribution_show_data: 'Afficher les données quand même',
    distribution_validate: 'Valider',
    distribution_validated: 'La distribution a été validée',
    distribution_want_add: 'que vous souhaitez ajouter à la ',

    // Header
    'header_add-beneficiaries': 'Ajouter un ménage',
    'header_add-distribution': 'Ajouter une distribution',
    header_beneficiaries: 'Bénéficiaires',
    'header_data-validation': 'Validation de données',
    header_disconnect: 'déconnexion',
    'header_distributions': 'Distribution',
    header_home: 'Accueil',
    header_import: 'Import de bénéficiaires',
    header_imported: 'Données des bénéficiaires importés',
    header_language: 'langue',
    header_profile: 'Profil',
    header_projects: 'Projets',
    header_reports: 'Rapports',
    header_settings: 'Paramètres',
    'header_update-beneficiary': 'Modifier',

    // Import
    import_added: 'Ajout',
    import_created: 'Création',
    import_deleted: 'Suppression',
    import_description: 'Importez le fichier contenant la distribution après modifications. La base de donnée sera mise à jour lorsque vous cliquerez sur "upload" après validation de l\'import. Les bénéficiaires inconnus seront ignorés.',
    import_distribution_no_right_update: 'Vous n\'avez pas le droit nécessaire pour modifier la distribution, demandez à votre reponsable de projet',
    import_distribution_updated: 'Distribution modifiée',
    import_updated: 'Mis à jour',

    // Login
    login_bms: 'Beneficiary management system',
    login_forgot_password: 'Mot de passe oublié ?',
    login_password: '*********',
    login_title: 'Connexion',
    login_username: 'identifiant',

    // Modal
    modal_add_bad_weight: 'Le poids doit être supérieur à 0',
    modal_add_check_fields_budget: 'Champs invalides : vérifiez que vous avez rempli tous les champs et que le budget est supérieur à 0',
    modal_add_check_fields_quantity: 'Champs invalides : vérifiez que vous avez rempli tous les champs et que la quantité est supérieur à 0',
    modal_add_fail_criteria: 'Erreur lors de la création du critère',
    modal_add_invalid_mail: 'Vous devez définir un email',
    modal_add_no_right: 'Vous devez définir un droit',
    modal_add_no_value: 'Vous devez entrer une valeur',
    modal_add_title: 'Ajouter un nouveau',
    modal_check_date: 'Champs invalides: La date de début ne peut pas être plus ancienne que la date de fin et vice versa',
    modal_check_fields: 'Champs invalides: vérifiez que vous avez rempli tous les champs',
    modal_delete_sentence: 'Vous êtes sur le point de supprimer ',
    modal_delete_sentence_2: '. ',
    modal_email_is: 'Email ',
    modal_language_actual: 'Langue actuelle :',
    modal_language_title: 'Langage',
    modal_failure: 'Echecs',
    modal_leave: 'Quitter',
    modal_leave_sentence: 'Souhaitez-vous réellement quitter sans enregistrer vos modifications ?',
    modal_no_country: 'Vous devez définir au moins une ville pour ce rôle',
    modal_no_password: 'Vous devez définir un mot de passe',
    modal_not_enough_strong: 'Mot de passe insuffisant... Minimum requis: 8 caractères, 1 minuscule, 1 majuscule, 1 chiffre',
    modal_no_project: 'Vous devez définir au moins un projet pour ce rôle',
    modal_pending_requests: 'Pending Requests',
    modal_project_name_characters_limit:'ne pas dépasser',
    modal_save_language_as_default: 'Définir ceci comme langage par défaut',
    modal_success: 'Succès',
    modal_required: 'obligatoire',
    modal_valid_email: 'Veuillez utiliser un mail valide',
    modal_warning_pending_requests_1: 'Find the requests you created during your offline time below, you can send those you want to apply to modify the database.',
    modal_warning_pending_requests_2: 'WARNING: Requests linked to an item you created offline will fail !',

    // Model
    model_beneficiaries_dependents: 'Dépendents',
    model_beneficiaries_nationalids: 'Numéro d\'identification',
    model_beneficiaries_phones: 'Téléphones (sans le code pays)',
    model_beneficiaries_status: 'Satut',
    model_commodity: 'Ressource',
    model_commodity_modality: 'Modalité',
    model_commodity_unit: 'Unité',
    model_commodity_value: 'Quantité',
    model_countryIso3: 'Pays',
    model_country_specific: 'Option par pays',
    model_country_specific_field: 'Champ',
    model_criteria: 'Critère',
    model_criteria_operator: 'Condition',
    model_criteria_weight: 'Score du poids',
    model_dateofbirth: 'Date de naissance',
    model_distribution_date: 'Date de la Distribution',
    model_distribution_name: 'Nom',
    model_distribution_type: 'Cible',
    model_donor: 'Donneur',
    model_donor_fullname: 'Nom du donneur',
    model_donor_shortname: 'Surnom',
    model_familyName: 'Nom',
    model_firstName: 'Prénom',
    model_notes: 'Notes',
    model_project_donors_name: 'Donneurs',
    model_project_end_date: 'Date de fin de projet',
    model_project_name: 'Nom  du projet',
    model_project_number_of_households: 'Nombre de ménages',
    model_project_start_date: 'Date de début de projet',
    model_project_value: 'Montant à distribuer',
    model_sector: 'Secteur',
    model_sectors_name: 'Secteurs',
    model_transaction_message: 'Message',
    model_transaction_pickupDate: 'Date de récupération',
    model_transaction_state: 'État',
    model_type: 'Type',
    model_user: 'Utilisateur',
    model_user_password: 'Mot de passe',
    model_value: 'Valeur',
    model_vulnerabilities: 'Vulnérabilités',

    // Profile
    profile_user_change_password: 'Changer de mot de passe',
    profile_user_hint_new_password: 'Nouveau mot de passe',
    profile_user_hint_new_password_again: 'Ré-entrez votre nouveau mot de passe',
    profile_user_hint_old_password: 'Mot de passe actuel',
    profile_user_information: 'Informations utilisateur',

    // Project
    project_add: 'S\'il vous plait, créez d\'abord des projets ! Ensuite, vous pourrez gérer des distributions...',
    project_add_household: 'S\'il vous plait, ajoutez d\'abord des bénéficiaires ! Ensuite, vous pourrez gérer des distributions...',
    project_click: 'Cliquer sur ',
    project_create: 'Créer un nouveau projet',
    project_description: 'Vous pourrez modifier le nom du projet jusqu\'à votre première distribution',
    project_go_beneficiaries: 'Aller aux bénéficiaires',
    project_no_distribution: 'Le projet ne contient aucune distribution. Créer votre première !',
    project_no_household: 'Le projet ne contient aucun ménage.',
    project_no_projects: 'Le pays ne contient aucun projet.',

    // Report
    report_apply: 'appliquer',
    report_country: 'par pays',
    report_country_report: 'graphiques par pays',
    report_distribution: 'par distribution',
    report_distribution_report: 'graphiques par distribution',
    report_filter_chose_periode: 'choisir période',
    report_filter_per_month: 'par mois',
    report_filter_per_quarter: 'par trimestre',
    report_filter_per_year: 'par année',
    report_frequency_month: 'Mois',
    report_frequency_quarter: 'Trimestre',
    report_frequency_year: 'Année',
    report_from: 'de',
    report_loader: 'Chargement',
    report_period_selected: 'période choisie',
    report_project: 'par projet',
    report_project_report: 'graphiques par projet',
    report_select_frequency: 'Choisir fréquence',
    report_to: 'à',
    report_upcoming_reporting: 'Graphiques à venir',

    // Settings
    settings_country_specific_options: 'options par pays',
    settings_created: ' créé(e)',
    settings_donors: 'donateurs',
    settings_financial_provider: 'Connexion tiers',
    settings_log_button: 'Recevoir les logs de cet utilisateur par email',
    settings_project_exists: 'Un projet avec le même nom existe déjà',
    settings_users: 'utilisateurs',

    // Snackbar
    snackbar_change_password_done: 'Mot de passe modifié !',
    snackbar_change_password_fail: 'Le mot de passe n\'a pas pu être changé...',
    snackbar_change_password_not_possible: 'Mot de passe pas assez long ou différent de la vérification',

    // Table
    table_actions: 'Actions',
    table_element_deleted: ' supprimé(e)',
    table_element_updated: ' modifié(e)',
    table_filter: 'Rechercher par mot clé',
    table_first_page: 'Début',
    table_items_per_page: 'Items par page',
    table_last_page: 'Fin',
    table_next_page: 'Page suivante',
    table_of_page: 'sur',
    table_previous_page: 'Page précédente',

    // Transaction
    transaction_accept_prevention: 'J\'accepte ces conditions.',
    transaction_again: 'Renvoyer',
    transaction_amount_done: 'Quantité envoyée',
    transaction_amount_total: 'Quantité totale',
    transaction_amount_waiting: 'Reste à envoyer',
    transaction_confirm: 'Confirmer la transaction',
    transaction_confirm_button: 'Confirmer',
    transaction_email_code: 'Un email contenant votre code de validation a été envoyé à : ',
    transaction_id_transaction: 'ID Transaction',
    transaction_inProgress: 'Transaction en cours...',
    transaction_paste_code: 'S\'il vous plait, coller le code ici et cliquer sur \'Confirmer\' pour procéder à la transaction',
    transaction_prevention: 'This platform is still under development and the online cash transaction functionality may not be fully stable yet. The development team denies responsibility for any errors that may occur in terms of money loss. By ticking the box below, you agree to use the system knowing fully well its limitations and take responsibility for the results of the transaction.',
    transaction_progress: 'progrès de la distribution des produits:',
    transaction_refresh: 'Vérifier les retraits',
    transaction_transaction: 'Démarrer la transaction',
    transaction_validate_distribution: 'Voulez vous vraiment valider la distribution ? Vous ne serez plus capable de la modifier',
    transaction_validation: 'Confirmer la validation',

    // Tooltip
    tooltip_add_beneficiaries: 'Cette page est la page d\'ajout des bénéficiaires. C\'est un formulaire pour ajouter un nouveau ménage avec des champs obligatoires.',
    tooltip_add_distribution: 'Cette page est la page d\'ajout d\'une distribution. C\'est un formulaire pour ajouter une nouvelle distribution avec des champs obligatoires. Vous allez sélectionner des ménages ou des bénéficiaires en les triant selon un critère de sélection et ajouter un montant spécifique de commodités pour la distribution.',
    tooltip_beneficiaries: 'Cette page est la page des bénéficiaires. Vous pouvez voir tous les ménages du pays. Si vous avez le droit, vous pouvez ajouter de nouveaux ménages avec le bouton "+", gérer des ménages et rechercher dans la liste.',
    tooltip_dashboard: 'Cette page est le tableau de bord. Vous avez une vue générale de chiffres clés à propos du pays et de ses projets. Vous avez accès à une carte avec les distribution du pays ainsi qu\'un résumé des dernières distributions.',
    tooltip_data: 'Cette page est la page d\'après importation des bénéficiaires. C\'est un résumé des ménages que vous avez importé.',
    tooltip_data_validation: 'Cette page est la page d\'import des bénéficiaires en utilisant un fichier. Vous devez vérifier votre fichier en suivant les étapes.',
    tooltip_distributions: 'Cette page est la page de distribution. Vous pouvez voir tous les ménages de la distribution. Si vous avez le droit, vous pouvez ajouter de nouveaux ménages en important un fichier ou en les sélectionnant dans la liste, gérer des ménages et valider la disitrbution pour devenir une transaction.',
    tooltip_import: 'Cette page est la page d\'import des bénéficiaires. Vous pouvez choisir entre importer un nouveau ménage en utilisant un fichier ou l\'API (la source de données externe) pour importer tous les ménages d\'une commune spécifique.',
    tooltip_profile: 'Cette page est la page de profil. Vous pouvez changer votre mot de passe.',
    tooltip_projects: 'Cette page est la page des projets. Vous pouvez voir les projets du pays (seulement ceux dont vous avez le droit de voir). Si vous avez le droit, vous pouvez ajouter une nouvelle distribution avec des ménages qui sont dans le projet, gérer des distributions et des transactions.',
    tooltip_reports: 'Cette page est la page des rapports. Cette page est utilisée pour voir les statistiques du pays, comme la moyenne des transactions d\'un projet, le nombre de distributions d\'un projet...',
    tooltip_settings: 'Cette page est la page des paramètres. Dans cette page, vous pourrez ajouter un nouvel utilisateur, de nouvelle options pour le pays, de nouveaux donneurs, de nouveaux projets et changer les informations de connexion pour les transactions.',
    tooltip_update_beneficiary: 'Cette page est la page de modification des bénéficiaires. C\'est un formulaire pour modifier le ménage selectionné avec des champs obligatoires.',

    // Update beneficiary
    update_beneficiary_check_steps: 'Les données requises sont incomplètes ou invalides: s\'il vous plait vérifier toutes les étapes',
    update_beneficiary_created_successfully: 'Créé avec succès !',
    update_beneficiary_error_creating: 'Erreur lors de la création: ',
    update_beneficiary_error_updated: 'Erreur lors de la modification: ',
    update_beneficiary_title: 'Modifier un bénéficiaire',
    update_beneficiary_updated_successfully: 'Modifié avec succès !',
};
