/* ============================================================
   TALAN ACADEMY — Business Central bilingual dictionary (EN ↔ FR)
   Object/page IDs are standard W1 base-application references and can
   vary slightly by localization or extension — verify in your BC
   environment via Help → Inspect pages and data.
   ============================================================ */

const BC_DICTIONARY = [
  {
    id: "dict-finance", module: "Finance", moduleFr: "Finances", accent: "blue",
    terms: [
      { en: "General Ledger", fr: "Grand Livre", ids: "T17 · P20", desc: "Main accounting ledger storing all financial transactions." },
      { en: "Chart of Accounts", fr: "Plan comptable", ids: "T15 · P16/17", desc: "List of all general ledger accounts.", notes: "Hierarchical (Begin-Total / End-Total)." },
      { en: "G/L Account", fr: "Compte de Grand Livre", ids: "T15 · P17/18", desc: "Individual ledger account (Cash, Sales, etc.)." },
      { en: "General Journal", fr: "Journal général", ids: "T81 · P39", desc: "Journal for recording financial entries (adjustments, etc.)." },
      { en: "Payment Journal", fr: "Journal de paiements", ids: "T81 · P256", desc: "Journal for recording outgoing vendor payments." },
      { en: "Recurring Journal", fr: "Journal récurrent", ids: "T81 · P283", desc: "Template journal for periodic/recurring entries." },
      { en: "Posting", fr: "Comptabilisation / Validation", desc: "Finalizing and recording transactions in the ledger." },
      { en: "Posting Date", fr: "Date de comptabilisation", desc: "Date a transaction is posted.", notes: "Controlled by General Ledger Setup (Table 98)." },
      { en: "VAT", fr: "TVA (Taxe sur la Valeur Ajoutée)", ids: "T325", desc: "Indirect tax on sales/purchases." },
      { en: "VAT Posting Group", fr: "Groupe de comptabilisation TVA", ids: "T323/324 · P470/472", desc: "Determines how VAT is accounted for (Bus. + Prod.)." },
      { en: "General Bus. Posting Group", fr: "Groupe de comptabilisation marché", ids: "T250 · P312", desc: "Maps customers/markets to specific G/L accounts." },
      { en: "General Prod. Posting Group", fr: "Groupe de comptabilisation produit", ids: "T251 · P313", desc: "Maps items/products to specific G/L accounts." },
      { en: "Dimensions", fr: "Dimensions", ids: "T348/349/480 · P537/538", desc: "Tags (e.g., department, project) for analytical reporting.", notes: "Dimension Set ID (480) is used on most entries." },
      { en: "Budget", fr: "Budget", ids: "T95/96 · P121/113", desc: "Financial plan for revenues/expenses." },
      { en: "Bank Account", fr: "Compte bancaire", ids: "T270 · P370/371", desc: "Company's bank account record." },
      { en: "Bank Reconciliation", fr: "Rapprochement bancaire", ids: "T273/274 · P379/380", desc: "Matching bank statement lines with recorded transactions." },
      { en: "Fixed Asset", fr: "Immobilisation", ids: "T5600 · P5600/5601", desc: "Long-term asset (machinery, vehicles, etc.)." },
      { en: "Intercompany", fr: "Inter-sociétés / Intercompany", ids: "T410+", desc: "Transactions between related companies within BC." },
      { en: "Consolidation", fr: "Consolidation", desc: "Combining multiple companies' financial data for consolidated reports." },
      { en: "VAT Return", fr: "Déclaration de TVA", desc: "Declaring VAT collected and payable to the tax authority." },
      { en: "EU Sales List (ESL)", fr: "Liste des ventes UE", desc: "Report listing sales to customers in other EU countries." },
      { en: "Aged Receivables/Payables", fr: "Balance âgée (clients/fournisseurs)", ids: "P1001/1002 (approx.)", desc: "Overdue analysis of open customer/vendor invoices by aging periods." },
      { en: "Income Statement", fr: "Compte de résultat", desc: "Shows revenues and expenses for a period." },
      { en: "Balance Sheet", fr: "Bilan", desc: "Snapshot of assets, liabilities, and equity at a point in time." },
      { en: "Trial Balance", fr: "Balance", desc: "List of ledger accounts with debit/credit totals." },
      { en: "General Ledger Setup", fr: "Paramétrage du grand livre", ids: "T98 · P118", desc: "Core setup (posting dates, dimensions, currencies, VAT date, etc.)." },
      { en: "General Posting Setup", fr: "Paramétrage de comptabilisation", ids: "T252 · P314", desc: "Mapping of Bus. + Prod. posting groups to G/L accounts." }
    ]
  },
  {
    id: "dict-sales", module: "Sales", moduleFr: "Ventes", accent: "lime",
    terms: [
      { en: "Customer", fr: "Client", ids: "T18 · P21/22", desc: "Entity buying goods/services." },
      { en: "Sales Quote", fr: "Devis (vente)", ids: "T36 · P41", desc: "Estimate for a customer, convertible to a sales order.", notes: "Document Type = Quote." },
      { en: "Sales Order", fr: "Commande client", ids: "T36 · P42", desc: "Confirmed order from a customer.", notes: "Document Type = Order." },
      { en: "Sales Invoice", fr: "Facture (vente)", ids: "T36/112 · P43/132", desc: "Bill issued to a customer for goods/services." },
      { en: "Sales Credit Memo", fr: "Avoir (vente)", ids: "T36/114 · P44/134", desc: "Reverses/credits a posted sales invoice." },
      { en: "Sales Return Order", fr: "Retour commande client", ids: "T36 · P6630", desc: "Manages customer returns (items or corrections)." },
      { en: "Prepayment", fr: "Acompte", desc: "Advance payment from a customer." },
      { en: "Shipping", fr: "Expédition", ids: "T110/111 · P130/131", desc: "Process of delivering goods to the customer." },
      { en: "Billing", fr: "Facturation", desc: "Invoicing the customer." },
      { en: "Salesperson", fr: "Commercial / Vendeur", ids: "T13 · P14", desc: "Sales representative assigned to a sale." },
      { en: "Opportunity", fr: "Opportunité", ids: "T5092 · P5124", desc: "Potential sales deal or lead (CRM)." },
      { en: "Campaign", fr: "Campagne", ids: "T5071 · P5086", desc: "Marketing campaign record in the sales module." },
      { en: "Aged Receivables", fr: "Balance âgée clients", desc: "Breakdown of overdue customer invoices by period." },
      { en: "Sales Header / Line", fr: "En-tête / Ligne vente", ids: "T36/37", desc: "Core tables for all sales documents." }
    ]
  },
  {
    id: "dict-purchasing", module: "Purchasing", moduleFr: "Achats", accent: "magenta",
    terms: [
      { en: "Vendor", fr: "Fournisseur", ids: "T23 · P26/27", desc: "Supplier providing goods/services." },
      { en: "Purchase Quote", fr: "Devis d'achat / Demande de prix", ids: "T38 · P49", desc: "Request for vendor pricing, can become a purchase order." },
      { en: "Purchase Order", fr: "Commande d'achat", ids: "T38 · P50", desc: "Official order to buy items/services from a vendor." },
      { en: "Purchase Invoice", fr: "Facture d'achat", ids: "T38/122 · P51/138", desc: "Vendor's bill for delivered goods or services." },
      { en: "Purchase Credit Memo", fr: "Avoir d'achat", ids: "T38/124 · P52/140", desc: "Reverses/credits a posted purchase invoice." },
      { en: "Purchase Return Order", fr: "Retour commande d'achat", ids: "T38 · P6640", desc: "Manages item returns to a vendor." },
      { en: "Receiving", fr: "Réception", ids: "T120/121 · P136/137", desc: "Recording goods received into inventory." },
      { en: "Payment", fr: "Paiement", desc: "Paying vendor invoices (tracked in payment journals)." },
      { en: "Item Charge", fr: "Frais article", ids: "T5800", desc: "Extra costs (e.g., freight) allocated to purchased items." },
      { en: "Aged Payables", fr: "Balance âgée fournisseurs", desc: "Overdue analysis of open vendor invoices." },
      { en: "Purchase Header / Line", fr: "En-tête / Ligne achat", ids: "T38/39", desc: "Core tables for all purchase documents." }
    ]
  },
  {
    id: "dict-inventory", module: "Inventory", moduleFr: "Inventaire (Stock)", accent: "teal",
    terms: [
      { en: "Item", fr: "Article", ids: "T27 · P30/31", desc: "Product or material tracked in inventory." },
      { en: "Item List", fr: "Liste des articles", ids: "T27 · P31", desc: "Page showing all items." },
      { en: "Item Category", fr: "Catégorie d'article", ids: "T5722 · P5730", desc: "Classification/grouping of items." },
      { en: "Unit of Measure", fr: "Unité de mesure", ids: "T204 · P209", desc: "Measurement for items (Piece, Box, KG, etc.)." },
      { en: "Quantity on Hand", fr: "Quantité en stock", desc: "Current stock level of an item.", notes: "Calculated from Item Ledger Entry (Table 32)." },
      { en: "Location", fr: "Emplacement / Entrepôt", ids: "T14 · P15", desc: "Warehouse code where items are stored." },
      { en: "Physical Inventory", fr: "Inventaire physique", ids: "T5895/5896", desc: "Counting stock to adjust recorded quantities." },
      { en: "Adjustment", fr: "Ajustement", ids: "T83 · P40", desc: "Correcting stock via item journal (positive/negative)." },
      { en: "Stockkeeping Unit (SKU)", fr: "Unité de gestion des stocks (UGS)", ids: "T5700 · P5701", desc: "Location/variant-specific item record." },
      { en: "Replenishment", fr: "Réapprovisionnement", desc: "Method of refilling inventory (purchase, produce)." },
      { en: "Planning", fr: "Planification", desc: "MRP settings (lead time, reorder point, etc.)." },
      { en: "Item Tracking", fr: "Suivi de l'article", ids: "T336/337", desc: "Managing lot/serial numbers for traceability." },
      { en: "Transfer Order", fr: "Ordre de transfert", ids: "T5740/5741 · P5740", desc: "Moves inventory from one location to another." },
      { en: "Costing Method", fr: "Méthode de calcul des coûts", desc: "How item cost is calculated (FIFO, Average, Standard).", notes: "Set on the Item card." },
      { en: "Item Ledger Entry", fr: "Écriture article", ids: "T32 · P38", desc: "Core inventory transaction table." },
      { en: "Value Entry", fr: "Écriture valeur", ids: "T5802", desc: "Cost/value information linked to item ledger entries." }
    ]
  },
  {
    id: "dict-manufacturing", module: "Manufacturing", moduleFr: "Production (Fabrication)", accent: "blue",
    terms: [
      { en: "Production Order", fr: "Ordre de fabrication", ids: "T5405 · P99000813/99000867", desc: "Work order for manufacturing or assembling an item." },
      { en: "Bill of Materials (BOM)", fr: "Nomenclature", ids: "T99000771 · P99000772", desc: "List of components needed to build a product (Production BOM)." },
      { en: "Routing", fr: "Gamme", ids: "T99000765 · P99000764", desc: "Sequence of operations for production." },
      { en: "Work Center", fr: "Centre de charge", ids: "T99000754 · P99000755", desc: "Group resource (machines/people) with defined capacity." },
      { en: "Machine Center", fr: "Poste de charge", ids: "T99000758 · P99000759", desc: "Individual machine or station within a work center." },
      { en: "Capacity", fr: "Capacité", desc: "Available production output (hours, quantity)." },
      { en: "Consumption", fr: "Consommation", desc: "Use of materials in production." },
      { en: "Output", fr: "Sortie", desc: "Quantity of finished goods produced." },
      { en: "MRP (Material Requirements Planning)", fr: "Planification des besoins", desc: "Calculation suggesting production/purchase based on demand." }
    ]
  },
  {
    id: "dict-projects", module: "Projects", moduleFr: "Projets (Jobs)", accent: "lime",
    terms: [
      { en: "Job (Project)", fr: "Projet", ids: "T167 · P88", desc: "Tracks costs/revenues for project-based work." },
      { en: "Job Task", fr: "Tâche de projet", ids: "T1001 · P1002", desc: "Breakdown of project phases or tasks." },
      { en: "Job Planning Line", fr: "Ligne de planification projet", ids: "T1003", desc: "Plans resources, items, or expenses for each task." },
      { en: "Job Journal", fr: "Journal de projet", ids: "T210 · P201", desc: "Records usage/costs to a job (project)." },
      { en: "Work in Process (WIP)", fr: "Encours", desc: "Accumulated costs not yet recognized as revenue." },
      { en: "Job Invoice", fr: "Facture projet", desc: "Invoices for project-related work." },
      { en: "Job Budget", fr: "Budget projet", desc: "Planned costs/revenues for a project." },
      { en: "Time Sheet", fr: "Feuille de temps", ids: "T950/951 · P950", desc: "Record of time spent by resources on jobs/tasks, essential for tracking employee hours and project costs." },
      { en: "Resource", fr: "Ressource", ids: "T156 · P76/77", desc: "Entity assigned to jobs, such as employees or equipment, crucial for resource allocation and capacity planning." },
      { en: "WIP Method", fr: "Méthode de suivi des TEC", desc: "Method to recognize costs and revenues on jobs, such as Percentage of Completion or Completed Contract, affecting financial reporting." },
      { en: "Job Posting Group", fr: "Groupe de comptabilisation des chantiers", ids: "T208", desc: "Determines how job transactions are posted to the general ledger, ensuring accurate financial integration." }
    ]
  },
  {
    id: "dict-service", module: "Service", moduleFr: "Service", accent: "magenta",
    terms: [
      { en: "Service Order", fr: "Ordre de service", ids: "T5900 · P5900", desc: "Work order for servicing or repairing customer equipment." },
      { en: "Service Item", fr: "Élément de service", ids: "T5940 · P5980", desc: "The equipment/item under service." },
      { en: "Service Contract", fr: "Contrat de service", ids: "T5965 · P6050", desc: "Agreement for recurring maintenance services." },
      { en: "Service Quote", fr: "Devis de service", ids: "T5900 · P5964", desc: "Estimate for service work, can convert to a service order." },
      { en: "Service Invoice", fr: "Facture de service", ids: "T5900/5992 · P5912", desc: "Billing for completed service tasks." },
      { en: "Service Credit Memo", fr: "Avoir de service", ids: "T5900 · P5914", desc: "Credit memo for reversing a posted service invoice." }
    ]
  },
  {
    id: "dict-admin", module: "Administration & Setup", moduleFr: "Administration et Paramétrage", accent: "teal",
    terms: [
      { en: "Company", fr: "Société", ids: "T2000000006/79 · P1/340", desc: "Separate database/legal entity in BC." },
      { en: "User", fr: "Utilisateur", ids: "T2000000120 · P9800", desc: "Person with BC access (license/permissions)." },
      { en: "User Setup", fr: "Configuration utilisateur", ids: "T91 · P119", desc: "Additional user-based settings (posting date range, etc.)." },
      { en: "Profile (Role Center)", fr: "Profil / Centre de rôle", ids: "T2000000072", desc: "Role-based homepage and UI layout." },
      { en: "Permission Set", fr: "Ensemble d'autorisations", ids: "T2000000004 · P9802", desc: "Defines a group of access rights for users." },
      { en: "My Settings", fr: "Mes paramètres", ids: "P9174 (approx.)", desc: "Personal settings (language, work date, region)." },
      { en: "Work Date", fr: "Date de travail", desc: "\"Today\" date override for transactions." },
      { en: "Report", fr: "Rapport", desc: "Printable or viewable report." },
      { en: "Workflow", fr: "Flux de travail", ids: "T1501+", desc: "Automated process or approval steps." },
      { en: "Approval", fr: "Approbation", ids: "T454+", desc: "Document approval mechanism (e.g., purchase approval)." },
      { en: "Setup", fr: "Configuration / Paramétrage", desc: "Area for default system settings (Posting Setup, etc.)." },
      { en: "No. Series", fr: "Souches de numéros", ids: "T308/309 · P456/457", desc: "Automatic numbering sequences for documents." },
      { en: "Posting Setup", fr: "Paramétrage de comptabilisation", ids: "T252 · P314", desc: "Mapping transaction combos (e.g., Bus. & Prod. Posting Groups)." },
      { en: "Change Log", fr: "Journal des modifications", ids: "T405 · P595", desc: "Logs data changes (who, what, when)." },
      { en: "General Ledger Setup", fr: "Paramétrage grand livre", ids: "T98 · P118", desc: "Core financial parameters." }
    ]
  },
  {
    id: "dict-actions", module: "Common Actions & Buttons", moduleFr: "Actions et Boutons Courants", accent: "blue",
    terms: [
      { en: "New", fr: "Nouveau", desc: "Create a new record (customer, invoice, etc.)." },
      { en: "Edit", fr: "Modifier", desc: "Open a record for changes." },
      { en: "Delete", fr: "Supprimer", desc: "Remove the selected record." },
      { en: "Save", fr: "Enregistrer", desc: "Save changes (often auto-saved in BC)." },
      { en: "Cancel", fr: "Annuler", desc: "Cancel an action or close without saving." },
      { en: "Yes / No", fr: "Oui / Non", desc: "Confirmation dialog buttons." },
      { en: "OK", fr: "OK", desc: "Confirm or proceed." },
      { en: "Search", fr: "Rechercher", desc: "Find data in a list or page." },
      { en: "Filter", fr: "Filtrer", desc: "Narrow results by criteria." },
      { en: "Actions", fr: "Actions", desc: "Ribbon/menu of grouped tasks." },
      { en: "Print", fr: "Imprimer", desc: "Print a report or posted document." },
      { en: "Send by Email", fr: "Envoyer par email", desc: "Email the current document (quote, invoice)." },
      { en: "Post", fr: "Valider", desc: "Finalize/post a document or journal." },
      { en: "Post and Print", fr: "Valider et imprimer", desc: "Post and then print the document." },
      { en: "Release", fr: "Lancer / Libérer", desc: "Mark a document (e.g., order) as ready for next step." },
      { en: "Calculate", fr: "Calculer", desc: "Perform a calculation or refresh." },
      { en: "Refresh", fr: "Actualiser", desc: "Reload data on the page." },
      { en: "Attach", fr: "Joindre", desc: "Add files or notes as attachments." },
      { en: "Help", fr: "Aide", desc: "Open help documentation." }
    ]
  },
  {
    id: "dict-fields", module: "Common Field Labels", moduleFr: "Libellés de Champs Courants", accent: "lime",
    terms: [
      { en: "No.", fr: "N°", desc: "Identifier code (e.g., invoice no.)." },
      { en: "Name", fr: "Nom / Libellé", desc: "Name or descriptive label for an entity." },
      { en: "Description", fr: "Description", desc: "Longer text describing an item or record." },
      { en: "Date", fr: "Date", desc: "Generic date field (format depends on locale)." },
      { en: "Posting Date", fr: "Date de comptabilisation", desc: "Date of ledger posting for a transaction." },
      { en: "Document Date", fr: "Date du document", desc: "Date on the document (often used for due date calc)." },
      { en: "Due Date", fr: "Date d'échéance", desc: "Payment or deadline date." },
      { en: "Quantity", fr: "Quantité", desc: "Number of units in a line or transaction." },
      { en: "Unit Price", fr: "Prix unitaire", desc: "Price per single unit sold or purchased." },
      { en: "Line Discount %", fr: "% Remise ligne", desc: "Discount percentage applied to a line item." },
      { en: "Amount", fr: "Montant", desc: "Monetary sum (line amount, total, etc.)." },
      { en: "Balance", fr: "Solde", desc: "Remaining amount in an account or owed." },
      { en: "Debit / Credit", fr: "Débit / Crédit", desc: "Transaction type in ledger entries." },
      { en: "Account Type", fr: "Type de compte", desc: "Specifies if line references G/L, customer, vendor, etc." },
      { en: "Account No.", fr: "N° de compte", desc: "G/L or sub-ledger account identifier." },
      { en: "External Document No.", fr: "N° document externe", desc: "Reference number from an external source." },
      { en: "Status", fr: "Statut", desc: "Document status (Open, Released, etc.)." },
      { en: "Location Code", fr: "Code emplacement", desc: "Warehouse or location where items are stored." },
      { en: "Vendor/Customer Posting Group", fr: "Groupe compta. fournisseur/client", desc: "Determines linked accounts for transactions." },
      { en: "Currency Code", fr: "Code devise", desc: "Currency code (EUR, USD, etc.)." },
      { en: "Exchange Rate", fr: "Taux de change", desc: "Conversion rate for foreign currency." },
      { en: "Payment Terms", fr: "Conditions de paiement", desc: "Agreed timeline for paying an invoice." },
      { en: "Shipment Method", fr: "Mode d'expédition", desc: "How goods are shipped (Ground, Air, etc.)." },
      { en: "Language Code", fr: "Code langue", desc: "Language used on customer/vendor documents." }
    ]
  }
];
