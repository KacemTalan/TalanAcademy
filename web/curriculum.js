/* ============ CURRICULUM INJECTED HERE ============ */
/* ============================================================
   TALAN ACADEMY — CURRICULUM DATA (Part A)
   Business · Platform · Executive tracks
   ============================================================ */

const CURRICULUM_A = [

/* ---------------- BC ACADEMY ---------------- */
{
  code: "BCA", track: "business", accent: "blue",
  title: "BC Academy",
  tagline: "The six core modules of Business Central, one lesson at a time.",
  audience: "End users, business teams, new joiners",
  desc: "If someone at a client site asks 'what does Business Central actually do?', this is the answer — split into the six areas the platform is organised around.",
  lessons: [
    {
      id: "bca-01", n: "01", title: "Sales & Service Management", dur: "13 min read",
      summary: "The module that carries a customer from first quote through to after-sales support, without the data being re-entered anywhere along the way.",
      concepts: [
        { h: "Customer setup", p: "Every sales document depends on the customer card being right first — payment terms, credit limit, posting groups, and default ship-to/bill-to addresses. Get these wrong and the symptom shows up three steps later, at invoicing, not at data entry." },
        { h: "Quotes and sales orders", p: "A quote is a proposal; a sales order is a commitment. Business Central converts one into the other without retyping, so the numbers a customer agreed to are the numbers that get fulfilled and invoiced." },
        { h: "Pricing, discounts & tariffs", p: "Customer-specific prices, line and invoice discounts, and tariff-driven surcharges are configured once and applied automatically at order entry. Nobody has to remember that a particular client gets 12% off a particular item group, or that a tariff code changes the landed cost." },
        { h: "Blanket and open orders", p: "A blanket order captures a long-term agreement — a total quantity or value over a period — without committing to specific delivery dates up front. Individual sales orders are released against it as the customer actually calls off stock, so the agreement and the fulfilment stay linked." },
        { h: "Prepayments", p: "A sales order can require a prepayment percentage before it ships, invoiced and tracked as its own document. This protects cash flow on large or custom orders without inventing a manual side-process for deposit tracking." },
        { h: "Availability, reservation & drop shipment", p: "Order Promising shows real availability across on-hand, incoming and reserved quantities before a delivery date is promised. Reservation locks specific stock to a specific order line, and drop shipment routes a sales order straight to a purchase order when the item never touches the warehouse at all." },
        { h: "Shipment, delivery & order tracking", p: "Status, shipment, and invoicing sit on the same record, so answering 'where is my order?' is a lookup rather than an investigation across three systems. Partial shipments and back orders are tracked on the same document rather than as separate paperwork." },
        { h: "Invoicing, credit memos & returns", p: "Sales invoices post from the shipped quantity, keeping billing tied to what actually left the warehouse. Credit memos and sales return orders reverse a sale cleanly — a return order links back to the original shipment so both the stock and the financial side correct together, not just the invoice." },
        { h: "Recurring billing, contracts & subscriptions", p: "A repeating charge — a maintenance contract, a subscription — can be reproduced period after period using Copy Document rather than retyped, or spread through a service contract for recurring service-type billing. Standard Business Central doesn't automate proration or term tracking natively, so a genuinely automated subscription product still needs Service Contracts or a dedicated add-on." },
        { h: "Deferred revenue awareness", p: "When an invoice covers a period rather than a point-in-time delivery, revenue can be deferred and recognized across that period instead of hitting the P&L in one shot on the invoice date. This is a finance-setup decision, not a sales one, but a consultant about to sell a multi-period service should know the option exists before promising otherwise." },
        { h: "Approvals", p: "Sales documents above a threshold — a large discount, a credit limit override — can route through an approval workflow before they're allowed to post. This puts a policy in the system instead of relying on someone remembering to ask." },
        { h: "Customer reminders", p: "Overdue invoices generate reminder letters automatically, with configurable levels and interest or fee calculation, so collections follows a consistent process instead of depending on whoever notices an aged balance first." },
        { h: "Customer interaction history", p: "Calls, emails, quotes, and orders attach to one customer record. Whoever picks up the phone next has the full context, without needing to ask the customer to repeat what they already said." },
        { h: "Service items, contracts & service orders", p: "A service item represents a specific piece of equipment a customer owns; a service contract covers it under an agreed maintenance schedule; a service order is one visit or repair against either. Keeping the three linked is what turns 'a customer called about their machine' into a traceable history instead of a one-off ticket." },
        { h: "Technician assignment, spare parts & service invoicing", p: "A service order assigns a technician, consumes spare parts from inventory the same way a production order consumes components, and invoices for both labor and parts from the same document. Parts consumption hits inventory exactly like any other outbound movement — service isn't a separate stock universe." },
        { h: "Equipment service history", p: "Every service order against a service item builds a permanent history — what broke, when, what part fixed it. That history is what turns a routine renewal conversation into an evidence-based one instead of a guess." }
      ],
      why: "Most businesses lose margin in the gaps between systems: a quote in a spreadsheet, an order in email, a service request in someone's inbox. Sales & Service Management closes those gaps by keeping one record of the relationship.",
      check: { q: "A customer calls about an order placed three weeks ago and asks why the price differs from their quote. Where do you look?", a: "The sales order itself — because it was converted from the quote, the pricing lineage is on the same record chain, along with any discount rules that applied." },
      video: "From first quote to lasting customer relationship — all in one system."
    },
    {
      id: "bca-02", n: "02", title: "Financial Management", dur: "14 min read",
      summary: "Accounting, cash flow and reporting with numbers that are current rather than reconstructed at month end.",
      concepts: [
        { h: "General ledger & chart of accounts", p: "The chart of accounts, journals and postings live in one place, and every transaction elsewhere in the system eventually lands here as a debit/credit pair. That's what makes the ledger trustworthy — it isn't a summary of the business, it's the business's transactions themselves." },
        { h: "Accounting setup & posting groups", p: "Posting groups map a customer, vendor, or item to the specific G/L accounts a transaction should hit — the single most common source of 'why won't this post' errors when incomplete. Getting this setup right before go-live is cheaper than any fix after transactions exist." },
        { h: "General journals", p: "Manual entries — adjustments, accruals, corrections — post through general journals rather than being typed directly onto an account. Recurring journals template entries that repeat every period, so accruals don't get retyped from scratch each month." },
        { h: "Accounts receivable", p: "Customer invoices, credit memos and their open balances are tracked centrally, with aging visible at any point rather than reconstructed at month end." },
        { h: "Accounts payable", p: "Vendor bills are tracked the same way, from receipt through approval to payment, with the payable balance always current rather than a periodic snapshot." },
        { h: "Payments, receipts & application (lettrage)", p: "A payment or receipt is applied against the specific invoice(s) it settles, which is what actually closes the open entry — posting the payment alone isn't enough. Payment management (payment slips, payment runs) batches outgoing vendor payments so a finance team isn't creating one payment at a time." },
        { h: "Bank management & reconciliation", p: "Bank transactions are matched automatically against ledger entries; a human reviews the exceptions, not the whole statement. This is what keeps reconciliation a five-minute review instead of a line-by-line afternoon." },
        { h: "Treasury & cash visibility", p: "Cash flow forecasts and bank balances are visible across accounts and currencies in one place, so a treasury decision — can we make this payment run, do we need a transfer — is answered from the system instead of a phone call to accounting." },
        { h: "Fixed assets", p: "Assets are tracked from acquisition through depreciation to disposal, with depreciation posting automatically on schedule instead of being calculated by hand every period." },
        { h: "Budgets", p: "Budgets can be built by department, project or account, and variance is visible as it develops rather than at quarter end — the same as-you-go visibility the Project module gives a project manager, applied at the company level." },
        { h: "Dimensions & analytical accounting", p: "Dimensions (department, project, cost center, and up to seven more per posting) tag every transaction for analysis without multiplying the chart of accounts. A P&L by department doesn't need a department-specific account for every line — it needs one dimension, filtered." },
        { h: "Currencies & exchange rates", p: "Foreign-currency transactions post in their original currency and revalue to the company's functional currency using rates the system maintains, without a manual conversion spreadsheet acting as the source of truth." },
        { h: "VAT & tax declarations", p: "VAT posting groups determine how tax calculates and which account it hits — the setup has to exist and be correct before the first invoice posts; getting the actual rates and filing rules right is a local compliance question outside what this lesson covers." },
        { h: "Period close", p: "A month-end close follows a repeatable sequence — post open documents, reconcile the bank, adjust inventory cost, review VAT, lock the period — so the close is a checklist, not a fire drill reinvented every month." },
        { h: "Consolidation & intercompany", p: "Multiple companies' financials combine into one consolidated report, and transactions between related companies — an intercompany sale, a shared cost — post on both sides automatically instead of requiring a manual mirror entry." },
        { h: "Financial statements & reporting", p: "Income statement, balance sheet and cash flow reports read live posted data, not a periodic export — the number in the report is the number in the ledger, always, because they're the same number." }
      ],
      why: "Finance teams spend a large share of their time assembling numbers rather than interpreting them. When the ledger updates as the business operates, the close gets shorter and the analysis gets earlier.",
      check: { q: "Why is a shorter month-end close worth more than the hours it saves?", a: "Because decisions get made on current data. A ten-day close means leadership is always looking at a picture that is at least ten days stale."},
      video: "From daily transactions to strategic decisions — one connected financial view."
    },
    {
      id: "bca-03", n: "03", title: "Operations Management", dur: "11 min read",
      summary: "Manufacturing, planning and day-to-day operations coordinated against real capacity rather than an optimistic whiteboard.",
      concepts: [
        { h: "Bill of materials (BOM)", p: "Components and assemblies are defined once, in a Production BOM, so planning always knows what a finished item actually consumes. Every downstream calculation — material requirements, cost — starts from this one definition." },
        { h: "Routings", p: "A routing defines the sequence of operations a production order runs through — which work center, how long, in what order. Without one, a production order has components but no actual process to follow." },
        { h: "Work centres, machine centres & capacity calendars", p: "Work centers group machine centers and define available capacity against a calendar of working time. Scheduling checks this capacity before committing a date, so a promise to a customer reflects what the floor can actually deliver, not an optimistic guess." },
        { h: "Production orders", p: "A production order moves through a lifecycle — Planned, Firm Planned, Released — before it's actually run and posted. Each stage is a deliberate commitment level, from a rough plan that can still change to a released order the floor is executing against." },
        { h: "Planning, MRP & MPS", p: "MRP (Material Requirements Planning) calculates what needs to be purchased or produced, and when, based on demand and current stock. MPS (Master Production Schedule) sits above it for finished-goods-level planning — the two work together, not as alternatives to each other." },
        { h: "Material consumption & scrap", p: "Components are consumed from inventory as a production order runs, either automatically (flushed by the BOM) or manually posted as actual usage. Scrap — expected loss during production — is planned into the BOM or routing so a normal spoilage rate doesn't show up as an unexplained cost variance." },
        { h: "Production output & feedback", p: "Finished quantity is posted as output, capturing actual progress rather than an assumed completion. Output and consumption together are what let a manager see a job's real status mid-run, not just at the end." },
        { h: "Subcontracting", p: "An operation on the routing can be sent to an outside vendor instead of run in-house — the production order tracks it as a subcontracted step, with the vendor's cost flowing into the item's total cost the same way an internal operation would." },
        { h: "Standard costing & WIP", p: "Standard costing sets a predictable cost per operation and component before production runs, and variances — what it actually cost versus the standard — surface afterward for review. Work in Process (WIP) is the value sitting in unfinished production orders: real cost incurred, not yet on a finished, sellable item." },
        { h: "Production order close", p: "Closing a production order finalizes its cost, posts any variance to the G/L, and moves the order out of WIP. Skipping or delaying this step is why a finance team sometimes finds inventory value that doesn't reconcile — the cost is real, it just hasn't been closed out yet." },
        { h: "Assembly — the lighter alternative", p: "Not every 'build' needs a full production order — Assembly Management handles kitting and light configuration (components in, one finished item out) without routings, work centers, or a multi-stage lifecycle. For a distributor bundling a kit rather than running a factory floor, Assembly is usually the right-sized tool, and it's available without a Manufacturing license." }
      ],
      why: "Operations problems are almost always visibility problems first. A bottleneck you can see two weeks out is a scheduling decision; the same bottleneck discovered on the day is a crisis.",
      check: { q: "What is the practical difference between a BOM and a production order?", a: "The BOM is the recipe — what a finished item is made of. The production order is one instance of actually making it, with its own schedule, costs and status." },
      video: "From raw materials to finished goods — one connected operations view."
    },
    {
      id: "bca-04", n: "04", title: "Supply Chain Management", dur: "13 min read",
      summary: "Inventory, purchasing and logistics — keeping the right stock in the right place without over-committing cash to a warehouse.",
      concepts: [
        { h: "Item setup & master data", p: "An item card's posting groups, costing method, and base unit of measure decide how every future transaction on it behaves — get these right before the first purchase receipt, since costing method locks after that." },
        { h: "Units of measure, variants & categories", p: "An item can be purchased in one unit of measure and sold in another, with a defined conversion between them. Variants handle the same base item in different colors or sizes; categories group items for reporting and search without needing a separate item number for every attribute combination." },
        { h: "Inbound and outbound stock flow", p: "Every quantity that enters or leaves inventory — a purchase receipt, a sales shipment, a transfer, an adjustment — creates an Item Ledger Entry, the permanent record the on-hand quantity is always summed from." },
        { h: "Item journal, reclassification & adjustments", p: "The item journal is the general-purpose tool for posting a stock movement that isn't a normal sale or purchase — a positive or negative adjustment, or a reclassification that moves value or location without a physical count discrepancy driving it." },
        { h: "Transfers between locations", p: "A transfer order moves stock from one location to another as a tracked, two-leg posting (ship, then receive), so multi-warehouse stock visibility reflects where inventory actually is, not just a single company-wide total." },
        { h: "Physical inventory & cycle counting", p: "A physical inventory journal compares counted quantities against system quantities and posts the difference as an adjustment. Cycle counting spreads that count across the year by item class instead of shutting the warehouse down once annually for a full count." },
        { h: "Reservations", p: "Reserving stock links a specific quantity to a specific demand — a sales order line, a production order — so it can't be accidentally promised twice. It's the mechanic behind Order Promising's real-availability picture." },
        { h: "Lot and serial tracking", p: "Item Tracking assigns lot or serial numbers at receipt and follows them through every subsequent transaction, which is what makes a recall or a warranty claim traceable to the exact batch or unit involved, not just 'somewhere in that month's shipments.'" },
        { h: "Costing methods & cost adjustment", p: "FIFO, Average, Standard, and Specific each answer 'what did this unit actually cost' differently, and the choice locks after an item's first transaction. Adjust Cost - Item Entries is the batch job that keeps valuation current as purchase costs and consumption interact — skipping it is why inventory value on the balance sheet can drift from what the ledger entries actually say." },
        { h: "Item charges", p: "Freight, duty, and other landed costs that aren't the item's purchase price get allocated onto the items they relate to through an item charge, so unit cost reflects the true delivered cost, not just what the vendor invoice's line price says." },
        { h: "Warehouse receipt, put-away, pick & shipment", p: "In a warehouse-enabled location, receiving, putting stock away, picking for an order, and shipping are each their own document and posting step — splitting one purchase or sales transaction into the physical steps a warehouse actually performs, with each step's own accountable person." },
        { h: "Bins, internal movements & bin replenishment", p: "Bins subdivide a location into specific, addressable storage spots. Internal movements reposition stock between bins without an external transaction driving it, and bin replenishment automatically proposes moving stock from bulk storage to a pick face before it runs out." },
        { h: "Cross-docking", p: "Cross-docking routes incoming stock straight to an outbound shipment without ever being put away — useful when a purchase order was raised specifically to cover a known sales order, and holding the stock in storage would just add a step with no benefit." },
        { h: "Advanced warehousing — when it's worth it", p: "Directed pick/put-away, wave picking, and the fuller warehouse feature set exist for high-volume operations where the basic receipt/pick/ship flow becomes a bottleneck. For a lower-volume warehouse, the basic flow is usually the right scope — advanced warehousing is a volume-driven decision, not a default." },
        { h: "The link to purchasing", p: "Supply chain and purchasing share the same item and vendor data by design — a reorder point calculated from sales history becomes a purchase order without anyone retyping the item, the quantity, or the vendor's pricing agreement." }
      ],
      why: "Inventory is capital sitting still. Too little costs you sales, too much costs you cash — and both problems come from the same root cause: not knowing what is actually moving.",
      check: { q: "Why does demand forecasting matter more than simply setting a fixed reorder point?", a: "A fixed reorder point assumes demand is steady. Forecasting adapts to seasonality and trend, so you hold less stock for slow items and avoid stockouts on accelerating ones." },
      video: "From vendor to customer — one connected supply chain."
    },
    {
      id: "bca-05", n: "05", title: "Project Management", dur: "11 min read",
      summary: "Planning, tracking and costing projects so that budgets and invoices reflect the work that actually happened.",
      concepts: [
        { h: "Project setup & templates", p: "A project template pre-fills the task structure, planning lines, and posting setup a recurring project type always needs, so starting the tenth similar engagement doesn't mean rebuilding it from a blank job." },
        { h: "Project creation, tasks & planning lines", p: "A project breaks into tasks, and each task carries planning lines — the budgeted and billable quantities of resources, items, and G/L costs expected against it. This structure is what everything else in the project gets measured against." },
        { h: "Budgeting & budget revisions", p: "The original budget is a planning line snapshot; a budget revision captures a deliberate change to scope or estimate without silently overwriting the original numbers a client agreed to. Comparing revisions to the original is how scope creep gets documented instead of just felt." },
        { h: "Resources & resource planning", p: "People and equipment are set up as resources with a cost and price, and assigned to project tasks based on real availability — the structural fix for the familiar problem of the same specialist being promised to three projects at once." },
        { h: "Time sheets", p: "Time is captured against a specific project and task, with an approval step before it counts as posted usage. A time sheet entered but not approved is invisible to billing, the same way an unposted job journal line is — logged isn't the same as usable." },
        { h: "Consumption — resources, items & purchases", p: "A project consumes three kinds of cost: resource time, items pulled from inventory, and purchases bought specifically for the job. All three post through the project so a single view shows true cost incurred, not just the labor side." },
        { h: "Project purchasing", p: "A purchase order can be tied directly to a project and task, so a job-specific cost — a rented piece of equipment, a specialty material — flows into that project's actuals automatically instead of landing in general overhead by mistake." },
        { h: "Progress & WIP", p: "Work in Process on a project is the value of work done but not yet billed — real cost or earned revenue sitting on the balance sheet until an invoice catches up to it. How that WIP gets recognized is a deliberate accounting-method choice, not a default to accept unexamined." },
        { h: "Billing methods & project invoicing", p: "A project can bill Time and Material (invoice actual usage as it's incurred), Fixed Price (bill milestones regardless of usage), or a mix — the method has to be decided per project, because it changes what 'over budget' even means for that engagement. Invoicing pulls directly from posted usage: unposted work isn't billable work." },
        { h: "Profitability follow-up", p: "Budget, actual cost, and billed amount sit side by side at the project level, so margin erosion is visible while the project is still running — not discovered in a final report after the client relationship is already closed." },
        { h: "Project close", p: "Closing a project locks it from further postings and finalizes its cost and WIP — the project-level equivalent of closing a production order, and skipped for the same reason: it's easy to consider a project 'done' informally long before anyone does the close that makes the financials agree." }
      ],
      why: "In project businesses, margin leaks quietly: unbilled hours, scope that grew without a conversation, costs discovered after the invoice went out. Tracking as you go is what stops the leak.",
      check: { q: "Why is 'budget vs. actual' more useful than a final project profitability report?", a: "Because a final report tells you what happened. Budget vs. actual during the project tells you what is happening, while you can still change the outcome." },
      video: "From project kickoff to final invoice — one connected view."
    },
    {
      id: "bca-06", n: "06", title: "Reporting & Analytics", dur: "7 min read",
      summary: "The module that turns everything the other five produce into something a person can actually decide on.",
      concepts: [
        { h: "Built-in dashboards", p: "Role-based dashboards surface the KPIs relevant to a person's job the moment they log in, rather than requiring them to go looking." },
        { h: "Power BI integration", p: "Business Central data becomes interactive reporting without a separate data-entry or export step. The report reads the system; nobody rekeys anything." },
        { h: "Financial and operational reports", p: "Standard and custom reports run across every module and stay current, because they read live data rather than a periodic extract." },
        { h: "Account schedules", p: "Account schedules build custom financial reports — a management P&L cut a specific way, a covenant calculation a lender wants — as a reusable, live definition rather than a spreadsheet rebuilt from scratch every reporting period." },
        { h: "Real-time data", p: "No overnight sync. What happened this morning is in this morning's number." },
        { h: "Drill-down analysis", p: "You can move from a high-level figure straight to the individual transaction behind it — which is what makes a number defensible in a meeting." }
      ],
      why: "Reporting is where the value of an integrated system finally becomes visible. If sales, finance and operations all write to the same place, then one number can be trusted by everyone looking at it.",
      check: { q: "Why does 'one source of truth' matter more than report quality?", a: "A beautiful report built on a disputed number still ends the meeting in an argument about whose figure is right. Agreement on the source is what makes analysis productive." },
      video: "Every module feeds one connected view — that's the power of Business Central."
    }
  ]
},

/* ---------------- POWER CONNECT ---------------- */
{
  code: "PC", track: "platform", accent: "lime",
  title: "Power Connect",
  tagline: "How Business Central plugs into the Power Platform — and into Copilot.",
  audience: "Business users, consultants, prospects evaluating the ecosystem",
  desc: "Business Central is rarely bought on its own merits alone. This track covers what it connects to, and what each connection actually buys you.",
  lessons: [
    {
      id: "pc-00", n: "00", title: "One system, endless connections", dur: "4 min read",
      summary: "The orientation lesson: what the Power Platform is, and why Business Central sitting inside it changes the value of both.",
      concepts: [
        { h: "Business Central is the system of record", p: "It holds the transactions — orders, invoices, stock, ledger entries. Everything else in this track reads from or writes to that record." },
        { h: "The Power Platform is the layer around it", p: "Power BI for analysis, Power Apps for tailored interfaces, Power Automate for workflow, Copilot Studio for AI agents. None of them replaces the ERP; they extend how people interact with it." },
        { h: "The connection is native, not a project", p: "These tools are built to read Business Central data directly. Integration here is configuration rather than a custom development effort." }
      ],
      why: "Most ERP disappointment comes from the system being technically correct and practically unusable for half the staff. The Power Platform is how you give each group an interface that fits their job without forking the data.",
      check: { q: "If Business Central already has reports, why would a client also want Power BI?", a: "Built-in reports answer known questions well. Power BI is for exploration — combining BC data with other sources, and letting a decision-maker follow a thread without asking someone to build a new report first." },
      video: "Coming up: three episodes exploring each connection."
    },
    {
      id: "pc-01", n: "01", title: "Business Central + Power BI", dur: "5 min read",
      summary: "Turning transactional data into live analysis, without exports and without a reconciliation argument.",
      concepts: [
        { h: "Live dashboards", p: "Reports read the system directly. There is no manual export step, which removes both the delay and the opportunity for version drift." },
        { h: "One trusted number", p: "Finance, sales and operations look at the same underlying data. Disagreements move from 'whose figure is right' to 'what should we do about it'." },
        { h: "Drill-down in one click", p: "A KPI on a dashboard traces back to the transactions behind it, so a surprising number can be investigated in the meeting rather than after it." }
      ],
      why: "The gap between 'we have the data' and 'we can act on it' is usually a reporting gap. Power BI closes it by making exploration cheap.",
      check: { q: "What is the operational risk of building reports on manual exports?", a: "Every export is a snapshot with a timestamp nobody records. Two people can build correct reports from different extracts and reach different conclusions." },
      video: "Business Central + Power BI — see what's happening now."
    },
    {
      id: "pc-02", n: "02", title: "Business Central + Power Apps", dur: "5 min read",
      summary: "Building the narrow, task-shaped interface that a warehouse or field team actually needs.",
      concepts: [
        { h: "Custom apps without code", p: "Apps are built visually. A functional consultant can deliver a working tool without a development cycle." },
        { h: "Built on Business Central data", p: "The app is a view onto the ERP, not a separate database. There is no sync to maintain and no second version of the truth." },
        { h: "Changes sync back instantly", p: "A warehouse operator confirming a shipment on a phone updates the same record a finance user sees on a desktop." }
      ],
      why: "The full Business Central interface is right for a finance controller and overwhelming for a driver with one job to do. Power Apps lets you match the interface to the task without splitting the data.",
      check: { q: "Why is a Power App preferable to giving a field worker full BC access?", a: "Full access is both a security surface and a training burden. A focused app exposes exactly the actions that person needs, which is faster to learn and safer to grant." },
      video: "Business Central + Power Apps — the right tool, built fast."
    },
    {
      id: "pc-03", n: "03", title: "Business Central + Power Automate", dur: "5 min read",
      summary: "Moving approvals and repetitive steps off people's desks and into the background.",
      concepts: [
        { h: "Approvals that run themselves", p: "A document over a threshold routes to the right approver automatically, with a record of who approved what and when." },
        { h: "Workflows triggered by data", p: "Flows fire the moment a record changes in Business Central — no polling, no scheduled batch, no one remembering to check." },
        { h: "Fewer manual steps, fewer errors", p: "Every step removed from a human is a step that cannot be skipped, mistyped or forgotten under pressure." }
      ],
      why: "Automation's real return is not the minutes saved on any single task; it is the elimination of an entire class of 'someone forgot' failures.",
      check: { q: "What makes an approval workflow different from an email asking for approval?", a: "The workflow is enforced and recorded. The document cannot proceed without the approval, and the audit trail is a by-product rather than something reconstructed later." },
      video: "Business Central + Power Automate — let it work in the background."
    },
    {
      id: "pc-04", n: "04", title: "Business Central + Copilot", dur: "7 min read",
      summary: "What AI inside the ERP actually does today — asking in plain language, drafting documents, and explaining the numbers.",
      concepts: [
        { h: "Ask instead of navigate", p: "Natural-language search replaces menu-hunting: 'show overdue invoices', 'purchase orders waiting approval', 'items below reorder point'." },
        { h: "Drafting", p: "Copilot generates sales quotes from a description, drafts purchase documents, writes item and marketing descriptions, and composes customer replies — all as drafts a person reviews." },
        { h: "Explaining", p: "Rather than only reporting that costs rose, Copilot can summarise records, explain variances, and surface anomalies with the reasoning attached." },
        { h: "Document intelligence", p: "Vendor invoices are read, fields extracted, and matched against purchase orders, with discrepancies flagged for review." },
        { h: "Autonomous agents", p: "The Payables Agent handles invoice workflows end to end with limited intervention, and Copilot Studio lets you build your own agents against Business Central data." }
      ],
      why: "The pattern to explain to clients: Copilot does not replace the process, it removes the search-and-retype layer around it. Most of the time saved is time nobody was proud of spending.",
      check: { q: "A client worries Copilot will post transactions incorrectly. How do you frame it?", a: "Most Copilot features produce drafts and suggestions that a person approves. The autonomous agents are scoped and reviewable. The control point moves from doing the work to checking it." },
      video: "Business Central + Copilot — less searching, more doing."
    }
  ]
},

/* ---------------- BC SETUP ---------------- */
{
  code: "BCS", track: "business", accent: "blue",
  title: "BC Setup",
  tagline: "Configuration, in the order you actually do it.",
  audience: "Implementation consultants, admins, functional analysts",
  desc: "The configuration track. Each lesson is a decision you have to get right before the next one makes sense — which is why the order matters.",
  lessons: [
    {
      id: "bcs-01", n: "01", title: "Company & General Setup", dur: "5 min read",
      summary: "The foundation layer. Currency, fiscal year and localisation decisions that everything downstream inherits.",
      concepts: [
        { h: "Company details", p: "Name, address and country flow into invoices, reports and customer communications. Getting these wrong is visible to clients on day one." },
        { h: "Fiscal year", p: "The fiscal year start determines how every closing period and comparative report is structured. Changing it after transactions exist is painful." },
        { h: "Currency and localisation", p: "Base currency, number formatting and language are set once and applied consistently. Localisation also governs statutory reporting behaviour." }
      ],
      why: "This is the least interesting lesson in the track and the most expensive one to get wrong. Almost every configuration mistake found later traces back to an assumption made here.",
      check: { q: "A client wants to change their fiscal year start six months after go-live. What is the concern?", a: "Existing posted transactions are already assigned to periods under the old structure. Comparative reporting breaks, and correcting it is a data exercise rather than a settings change." }
    },
    {
      id: "bcs-02", n: "02", title: "Chart of Accounts & Posting Groups", dur: "6 min read",
      summary: "Where transactions live, and the rules that route them there without anyone choosing an account manually.",
      concepts: [
        { h: "The chart of accounts", p: "Every account has a number, a name and a category — assets, liabilities, equity, income, expenses — and the category defines its behaviour in reporting." },
        { h: "The routing problem", p: "When a sales invoice posts, the system has to know which receivables account and which revenue account it belongs to. Left to users, this is where inconsistency enters the ledger." },
        { h: "Posting groups", p: "Posting groups are the rules that answer that question automatically. A customer posting group links a customer to its receivables and sales accounts; the same pattern applies to vendors, inventory and general business posting." }
      ],
      why: "Posting groups are the single highest-leverage configuration in Business Central. Set them correctly and users never choose a G/L account again — which is exactly what you want, because they will choose inconsistently.",
      check: { q: "Why not simply train users to pick the right account?", a: "Because it scales badly and fails quietly. One misposted invoice a week is invisible until reconciliation. Posting groups make the correct behaviour the only behaviour." }
    },
    {
      id: "bcs-03", n: "03", title: "Number Series", dur: "4 min read",
      summary: "Sequential, gap-free document numbering — an audit requirement dressed up as an administrative detail.",
      concepts: [
        { h: "What a number series does", p: "It hands out the next number in a defined range automatically, so two documents can never claim the same identifier." },
        { h: "Defining a series", p: "A series has a code, a starting number, an ending number, and a format. The range should be generous enough to outlive the client's growth plans." },
        { h: "Linking to document types", p: "Each document type points at its own series — sales invoices, orders, credit memos and vendor documents are all numbered separately." }
      ],
      why: "Auditors care about sequence. A numbering scheme with unexplained gaps invites questions you do not want to be answering manually.",
      check: { q: "Why give each document type its own number series rather than one shared series?", a: "Shared numbering makes documents harder to identify at a glance and makes gaps in any single document type impossible to distinguish from normal interleaving." }
    },
    {
      id: "bcs-04", n: "04", title: "Dimensions", dur: "6 min read",
      summary: "Answering 'which department spent this?' without creating a separate account for every combination.",
      concepts: [
        { h: "The problem dimensions solve", p: "A single 'Travel Expenses' account cannot tell you which department, project or region the spend belongs to. The naive fix — one account per combination — makes the chart of accounts unmanageable." },
        { h: "Dimensions and dimension values", p: "A dimension is a category, such as DEPARTMENT. Its values are the options — Sales, IT, Operations. The same dimension is reused across every transaction." },
        { h: "Multiple dimensions per transaction", p: "One document can carry several dimensions at once — department and project and region — which is what makes multi-angle reporting possible from a single posting." }
      ],
      why: "Dimensions are what let you keep a small, clean chart of accounts and still slice reporting any way leadership asks. Skipping them is the most common cause of a chart of accounts that has grown to several hundred lines.",
      check: { q: "A client proposes creating separate G/L accounts for each of their five regions. What do you advise?", a: "Use a REGION dimension instead. It gives the same reporting split without multiplying the chart of accounts by five, and it composes with other dimensions." }
    },
    {
      id: "bcs-05", n: "05", title: "Approval Workflows", dur: "5 min read",
      summary: "Adding a control point to a process without adding a bottleneck to it.",
      concepts: [
        { h: "The three parts of a workflow", p: "A trigger (what starts it), a condition (when it applies), and a response (what happens next). Almost every workflow is a variation on this shape." },
        { h: "Thresholds", p: "Conditions are usually value-based: purchase orders above a set amount require approval, below it they proceed. This is what keeps routine work fast." },
        { h: "Approval chains", p: "Larger amounts can require sequential approvals — manager, then finance director — with each step recorded." }
      ],
      why: "Uncontrolled spend is a risk; over-controlled spend is a different risk, because people route around processes that slow them down. The threshold is the design decision that matters.",
      check: { q: "What happens if the approval threshold is set too low?", a: "Approvers get flooded with routine requests and start rubber-stamping. The control becomes theatre — worse than no control, because it looks like assurance." }
    },
    {
      id: "bcs-06", n: "06", title: "User Setup & Permissions", dur: "5 min read",
      summary: "Giving each person exactly the access their job requires — which is a usability decision as much as a security one.",
      concepts: [
        { h: "The user record", p: "Every user has an identity and a Role Center, which determines the home screen and shapes their entire experience of the system." },
        { h: "Permission sets", p: "Permission sets define what a user can read, insert, modify and delete. They are assigned to users, and a user can hold several." },
        { h: "Combining sets", p: "Multiple permission sets combine additively. This is convenient and also the main source of accidental over-permissioning — always check what the combination adds up to." }
      ],
      why: "A user with access to everything is both a risk and a confused user. Narrowing access improves security and reduces training time at the same time.",
      check: { q: "Why is permission design partly a usability concern?", a: "Because menus and pages the user cannot act on still occupy their attention. Removing them makes the system easier to learn, not just safer." }
    },
    {
      id: "bcs-07", n: "07", title: "RapidStart & Data Migration", dur: "6 min read",
      summary: "Getting the client's real data into the system, validated against the configuration you have just built.",
      concepts: [
        { h: "Configuration packages", p: "Each table to be migrated — customers, vendors, items, G/L accounts — gets a template. Data is prepared in Excel against that template." },
        { h: "Validation before apply", p: "RapidStart checks incoming data against the rules already configured. A customer missing a posting group is flagged before it reaches the live tables." },
        { h: "Why order matters", p: "Migration is the last lesson in this track because it validates against everything in the previous six. Migrating before configuration is complete means importing data the system cannot yet interpret." }
      ],
      why: "Go-live risk concentrates here. A clean migration is mostly a function of how disciplined the preceding configuration was — which is why this lesson comes last.",
      check: { q: "Why does RapidStart validate against configuration rather than just loading the data?", a: "Because loading unvalidated data produces records that exist but cannot be transacted against — customers with no posting group, items with no unit of measure. Failing at import is cheaper than failing at first invoice." }
    }
  ]
},

/* ---------------- WHY BUSINESS CENTRAL ---------------- */
{
  code: "WBC", track: "executive", accent: "magenta",
  title: "Why Business Central",
  tagline: "The business case, in the language a decision-maker uses.",
  audience: "Pre-sales, account managers, anyone in a room with a CFO",
  desc: "Not a feature list. These are the five arguments that actually move an evaluation, and the counter-arguments you should expect.",
  lessons: [
    {
      id: "wbc-01", n: "01", title: "The real cost of staying the same", dur: "5 min read",
      summary: "The status-quo argument. What the current setup costs, framed in terms the client already feels.",
      concepts: [
        { h: "The costs are hidden, not absent", p: "Hours lost to manual reconciliation, decisions made on stale data, opportunities missed because nobody saw them coming. None of these appear as a line item, which is precisely why they persist." },
        { h: "Framing without exaggeration", p: "Resist inventing statistics. Ask the client what their month-end close takes and how often two reports disagree. Their own numbers are more persuasive than any benchmark you bring." },
        { h: "The counter-argument", p: "'We manage fine today.' Usually true — and the honest response is that managing fine at current scale is not evidence of managing fine at planned scale." }
      ],
      why: "This is the opening argument because it establishes that there is a problem worth spending on. Without it, every feature you demonstrate is a solution to a problem the client has not yet agreed exists.",
      check: { q: "What is the risk of leading with a dramatic industry statistic?", a: "It invites scepticism about the source and shifts the conversation to the statistic rather than the client's own situation. Their numbers are harder to argue with." }
    },
    {
      id: "wbc-02", n: "02", title: "Built to grow with you", dur: "5 min read",
      summary: "The scalability argument — for clients whose current tools worked at their old size.",
      concepts: [
        { h: "The growth failure mode", p: "Spreadsheets that worked at ten people break at a hundred. Tools bolted together with workarounds accumulate a maintenance cost nobody owns." },
        { h: "What scaling actually means here", p: "Adding users, companies and countries without replacing the platform. Multi-entity and multi-currency are capabilities of the same system, not a migration." },
        { h: "The counter-argument", p: "'We'll deal with that when we get there.' The response is that replatforming mid-growth is more disruptive than platforming before it — and growth is exactly when you have least capacity for disruption." }
      ],
      why: "This argument lands hardest with businesses that have already outgrown one system. If they have done a painful migration before, they know the cost you are describing.",
      check: { q: "Why is this argument weaker with a stable, non-growing business?", a: "Because the premise is future scale. For a stable business, lead with visibility or consolidation instead — the cost of fragmentation is present-tense." }
    },
    {
      id: "wbc-03", n: "03", title: "One system, total visibility", dur: "5 min read",
      summary: "The consolidation argument. Usually the most immediately felt of the five.",
      concepts: [
        { h: "The fragmentation symptom", p: "Finance in one tool, sales in another, inventory somewhere else — and three versions of the same number, none of them agreeing." },
        { h: "What consolidation buys", p: "One number, trusted by everyone who looks at it, available when something changes rather than when someone remembers to check." },
        { h: "The counter-argument", p: "'Our tools integrate already.' Probe what integration means — usually a scheduled export. Ask how quickly a change in one system appears in the other, and who notices when the sync fails." }
      ],
      why: "Most clients recognise this problem immediately because they lived it in the last board meeting. It is the argument least likely to need explaining.",
      check: { q: "How do you test whether a client's existing 'integration' is real?", a: "Ask about latency and failure. Real-time or batch? And when the sync breaks, how long before anyone knows — and who finds out first?" }
    },
    {
      id: "wbc-04", n: "04", title: "Backed by Microsoft", dur: "4 min read",
      summary: "The longevity and ecosystem argument — for the risk-averse buyer.",
      concepts: [
        { h: "Software is a long-term commitment", p: "The question is not only whether a product is good today, but whether it is still being invested in when the client is three years into using it." },
        { h: "The ecosystem effect", p: "A global partner network, an available talent pool, and native connection to tools the business likely already uses — Teams, Outlook, Excel, the Power Platform." },
        { h: "Continued investment", p: "AI capability arriving as part of the platform rather than a separate purchase is the clearest current evidence of ongoing investment." }
      ],
      why: "This argument is not about features at all. It is about de-risking a decision the buyer will be held responsible for in three years.",
      check: { q: "Which buyer persona does this argument suit best?", a: "The risk-averse one — often the CFO or a board sponsor rather than the operational lead. The operational lead cares about capability; the sponsor cares about not having chosen wrong." }
    },
    {
      id: "wbc-05", n: "05", title: "The implementation question", dur: "5 min read",
      summary: "Where Talan becomes the differentiator rather than the product.",
      concepts: [
        { h: "The product is half the answer", p: "The best software, poorly implemented, is an expensive problem. Clients who have been through a bad rollout know this better than you can tell them." },
        { h: "What a good partner delivers", p: "An implementation that starts from the client's actual processes rather than a template, a go-live where staff are trained and ready, and support that continues after the invoice." },
        { h: "Why this is the closing argument", p: "Every previous lesson argues for Business Central. This one argues for Talan — and it is the only one a competitor cannot make identically." }
      ],
      why: "Once a client has decided on Business Central, the conversation becomes a partner selection. This is the material for that conversation.",
      check: { q: "Why is this the weakest argument to open with and the strongest to close on?", a: "Opening with it presumes a decision the client has not made yet. Closing with it addresses the decision they are actually about to make." }
    }
  ]
},

/* ---------------- BC FOR INDUSTRIES ---------------- */
{
  code: "IND", track: "executive", accent: "magenta",
  title: "BC for Industries",
  tagline: "The same platform, four different problems.",
  audience: "Pre-sales and marketing, targeting a specific vertical",
  desc: "Vertical positioning. Each lesson is the pain-point vocabulary of one industry, so a prospect recognises themselves in the first sentence.",
  lessons: [
    {
      id: "ind-01", n: "01", title: "BC for Manufacturing", dur: "4 min read",
      summary: "Shop-floor reality versus planning assumptions.",
      concepts: [
        { h: "The pain vocabulary", p: "Bills of materials that do not match what is actually on hand. Capacity planned on a whiteboard. Costs discovered after the job is finished rather than during it." },
        { h: "What to demonstrate", p: "Production orders reflecting real capacity, job costing updating as work happens, and the shop floor connected to finance without a manual handover." },
        { h: "The proof point", p: "Real-time visibility from raw materials to finished goods in one platform — with Power BI for the analysis layer on top." }
      ],
      why: "Manufacturers evaluate ERP on whether it understands production, not accounting. Lead with capacity and costing, not the ledger.",
      check: { q: "Why lead a manufacturer demo with production orders rather than financials?", a: "Because the person evaluating is usually an operations lead. Financial capability is assumed; production capability is what they are actually testing." }
    },
    {
      id: "ind-02", n: "02", title: "BC for Distribution", dur: "4 min read",
      summary: "Stock accuracy, fulfilment speed, and the cash tied up in both.",
      concepts: [
        { h: "The pain vocabulary", p: "Inventory counts already wrong by the time anyone checks. Orders bouncing between systems that do not talk. No visibility into what is moving versus what is sitting still." },
        { h: "What to demonstrate", p: "Inventory reflecting reality, demand forecasting catching reorder points early, and warehouse, purchasing and sales operating from one record." },
        { h: "The proof point", p: "Vendor to warehouse to customer, connected — with Power Automate handling the routine steps between." }
      ],
      why: "Distributors feel every stockout as a lost sale and every overstock as trapped cash. Frame the value in those two currencies.",
      check: { q: "What single metric usually resonates most with a distributor?", a: "Inventory accuracy — because it is the upstream cause of both stockouts and overstock, and they can usually quote you their current figure." }
    },
    {
      id: "ind-03", n: "03", title: "BC for Professional Services", dur: "4 min read",
      summary: "The gap between work performed and work billed.",
      concepts: [
        { h: "The pain vocabulary", p: "Time tracked in one tool and billed from another. Project budgets discovered blown after the invoice went out. Resource availability guessed rather than known." },
        { h: "What to demonstrate", p: "Time and expenses captured as work happens, budget versus actual visible in real time, and invoicing generated directly from tracked work." },
        { h: "The proof point", p: "The work done and the invoice sent, connected — with nothing lost in between." }
      ],
      why: "In services businesses, unbilled work is the largest and quietest source of margin loss. That is the number to put in front of them.",
      check: { q: "Why is this vertical particularly receptive to the Project Management module?", a: "Because in services, the project is the product. Project costing is not a supporting function — it is the core operational and financial record." }
    },
    {
      id: "ind-04", n: "04", title: "BC for Retail", dur: "4 min read",
      summary: "Channel consistency, and the customer who notices when you get it wrong.",
      concepts: [
        { h: "The pain vocabulary", p: "In-store and online inventory that do not match. Promotions applied inconsistently across channels. Slow answers when a customer asks whether something is in stock." },
        { h: "What to demonstrate", p: "One inventory view across every channel, pricing and promotions applied consistently, and customer history available at every touchpoint." },
        { h: "The proof point", p: "Every channel in sync, so customers get the same accurate answer wherever they ask — with Power Apps for in-store and mobile interfaces." }
      ],
      why: "Retail failures are customer-visible in a way that back-office failures are not. That visibility is the urgency in the argument.",
      check: { q: "Why does channel inconsistency cost more in retail than in other verticals?", a: "Because the error is discovered by the customer, in the moment, and it directly costs the sale as well as the trust." }
    }
  ]
},

/* ---------------- FLOW: FUNCTIONAL FLOWS & CONSULTANT TOOLKIT ---------------- */
{
  code: "FLOW", track: "business", accent: "teal", noVideo: true,
  title: "Functional Flows & Consultant Toolkit",
  tagline: "The process cheat sheets a consultant reaches for mid-call.",
  audience: "Functional consultants, business analysts, and implementation teams working day to day in Business Central",
  desc: "Process-by-process cheat sheets for O2C, P2P, Inventory, Finance and Jobs, plus the setup, troubleshooting and navigation reference a BC consultant reaches for daily.",
  groups: [
    { key: "flows", label: "Process Flows" },
    { key: "setup", label: "Setup & Data Model" },
    { key: "ops", label: "Daily Operations" },
    { key: "consultant", label: "Consultant Toolkit" }
  ],
  lessons: [
    {
      id: "flow-01-o2c", group: "flows", n: "01", title: "Order to Cash, step by step",
      dur: "12 min read",
      summary: "The customer lifecycle from first quote to cash in hand, and the one release step that quietly links inventory and finance together.",
      flow: [
        { label: "Sales Quote", detail: "Sales Agent" },
        { label: "Sales Order", detail: "Sales Agent" },
        { label: "Pick / Ship", detail: "Warehouse Ops" },
        { label: "Post Shipment", detail: "Warehouse Ops" },
        { label: "Sales Invoice", detail: "Accountant" },
        { label: "Payment", detail: "Accountant" }
      ],
      concepts: [
        { h: "The six-step flow", p: "Order to Cash runs Sales Quote → Sales Order → Pick/Ship → Post Shipment → Sales Invoice → Payment. Three roles carry it: the Sales Agent creates the quote and order, Warehouse Operations handles the pick and ship, and the Accountant sees the invoice through to payment. Nothing here is optional if you're selling anything through BC — even a same-day cash sale still walks through an order and an invoice, just compressed." },
        { h: "Key documents, and why there are so many", p: "BC produces a distinct document at nearly every step: Sales Quote, Sales Order, Posted Shipment, Posted Invoice, Customer Ledger Entry, G/L Entry. This isn't bureaucracy — quotes and orders are editable working documents, while posted shipments and posted invoices are the permanent, unchangeable record. Once a document is posted, correcting it means issuing a new document (a credit memo, a corrective shipment), not editing the old one." },
        { h: "Release before warehouse processing", p: "The consultant tip from this flow: release the Sales Order before it goes to the warehouse. Releasing is what lets BC auto-create the shipment and link the resulting inventory movement back to finance. Skip the release step and warehouse staff either can't act on the order or end up working from a document that isn't yet tracked for G/L purposes." },
        { h: "Every step posts to the G/L automatically", p: "This is the structural fact behind O2C: you don't post a document and separately post to finance — posting the shipment and posting the invoice *are* the G/L entries, generated through the posting groups configured on the customer and the items involved. If a G/L account is missing from that setup, the symptom shows up here, at invoice posting, not in Finance module setup." }
      ],
      why: "The most common O2C support ticket — 'the warehouse can't see the order' — traces straight back to a skipped release step, not a warehouse permissions problem. Knowing the flow well enough to ask 'was it released?' first saves a full troubleshooting cycle.",
      check: { q: "A Sales Order was created and saved, but the warehouse says it never showed up in their pick queue. What's the first thing to check?", a: "Whether the order was released. BC only auto-creates the shipment and exposes it to warehouse processing after the Sales Order is released — an unreleased order is still a working document, invisible to the pick/ship flow." }
    },
    {
      id: "flow-02-p2p", group: "flows", n: "02", title: "Procure to Pay, step by step",
      dur: "10 min read",
      summary: "Requisition to payment, with the 3-way match that stands between a vendor invoice and the money leaving the account.",
      concepts: [
        { h: "The six-step flow", p: "Procure to Pay runs Purchase Requisition → Purchase Order → Receive Goods → Vendor Invoice → Post & Match → Payment. Three roles carry it: the Purchasing Agent sources and orders, Warehouse receives the goods in, and Finance settles the invoice against Accounts Payable. It's the mirror image of Order to Cash, run from the buying side instead of the selling side." },
        { h: "Key documents", p: "BC produces a Purchase Quote, a Purchase Order, a Posted Receipt, a Purchase Invoice, a Vendor Ledger Entry, and a G/L Entry along the way. As with sales documents, the quote and order are editable working documents; the posted receipt and posted invoice are the permanent record once posting happens." },
        { h: "3-way matching is enforced, not optional", p: "BC checks the Purchase Order, the Posted Receipt, and the Vendor Invoice against each other before the invoice can post cleanly — quantities and amounts across all three have to agree. This is what catches a vendor billing for more than was ordered or more than was actually received, before the money ever moves." },
        { h: "Discrepancies trigger approval, not a silent block", p: "When the three documents don't line up, BC doesn't just refuse to post — it routes the mismatch into an approval workflow so a human decides whether to accept the discrepancy (a price change, a partial shipment) or reject the invoice back to the vendor. Payment release waits on that approval." }
      ],
      why: "A consultant who understands 3-way matching can immediately tell a client whether a stuck vendor invoice is a data-entry mismatch (wrong quantity typed somewhere) or a genuine approval bottleneck (someone hasn't signed off) — two very different fixes that look identical from the invoice screen alone.",
      check: { q: "A vendor invoice for 100 units arrives, but the posted receipt only shows 80 units received. What happens when someone tries to post the invoice, and why?", a: "The invoice doesn't post cleanly because the 3-way match between PO, receipt, and invoice fails — the received quantity (80) doesn't agree with the invoiced quantity (100). The mismatch routes into an approval workflow instead of silently posting or silently blocking, so someone can decide whether the discrepancy is legitimate before payment is released." },
      flow: [
        { label: "Purchase Requisition", detail: "Purchasing Agent" },
        { label: "Purchase Order", detail: "Purchasing Agent" },
        { label: "Receive Goods", detail: "Warehouse" },
        { label: "Vendor Invoice", detail: "Finance" },
        { label: "Post & Match", detail: "Finance" },
        { label: "Payment", detail: "Finance" }
      ]
    },
    {
      id: "flow-03-inventory", group: "flows", n: "03", title: "Inventory management flow",
      dur: "10 min read",
      summary: "Item setup through valuation, and why costing method is a decision you only get to make once per item.",
      concepts: [
        { h: "The six-step flow", p: "Inventory management runs Item Setup → Stock Receipt → Bin/Location → Transfer Order → Adjustment → Valuation. Three roles carry it: the Warehouse Manager runs day-to-day movement, the Supply Planner drives replenishment decisions, and the Accountant owns the resulting valuation. BC tracks inventory in real time across as many locations as the business needs." },
        { h: "Key documents", p: "The flow moves through the Item Card (master data), Item Journal (movements), Transfer Order (between locations), Physical Inventory (counts), Item Ledger Entry (posted quantity movements), and Value Entry (posted cost movements). Every receipt, shipment, or transfer posts a Value Entry linked to the G/L through inventory posting groups — the same posting-groups mechanism that drives every other module." },
        { h: "Costing method: a one-time decision", p: "FIFO, Average, Standard, or Specific costing has to be set per item before that item's first transaction — and it cannot be changed once entries exist. This isn't a BC limitation to work around; it's a deliberate guardrail, because changing the costing method partway through an item's history would make its valuation internally inconsistent." },
        { h: "Choosing well the first time", p: "Standard costing tends to suit manufacturing, where a predictable, pre-set cost is more useful for planning than a moving actual cost. Average costing tends to suit retail, where costs genuinely fluctuate and an averaged figure is a fairer representation. Getting this decision made — deliberately, per item category — during setup is far cheaper than discovering the wrong choice after go-live." }
      ],
      why: "Because costing method locks in after the first transaction, a wrong choice discovered post-go-live isn't a configuration fix — it's a data problem that usually means creating a replacement item and migrating forward, which is exactly the kind of expensive correction a five-minute setup conversation would have avoided.",
      check: { q: "A client wants to switch a live item from Average costing to Standard costing because they've realized Standard suits their manufacturing process better. What do you tell them?", a: "It can't be done on the existing item once it has posted transactions — costing method is fixed at first transaction. The realistic path is creating a new item with Standard costing and transitioning forward, not changing the setting on the item that's already in use." },
      flow: [
        { label: "Item Setup", detail: "Supply Planner" },
        { label: "Stock Receipt", detail: "Warehouse Manager" },
        { label: "Bin / Location", detail: "Warehouse Manager" },
        { label: "Transfer Order", detail: "Warehouse Manager" },
        { label: "Adjustment", detail: "Warehouse Manager" },
        { label: "Valuation", detail: "Accountant" }
      ]
    },
    {
      id: "flow-04-finance-gl", group: "flows", n: "04", title: "Finance & General Ledger flow",
      dur: "10 min read",
      summary: "Journal to financial report, and how every other module quietly feeds this one through posting groups.",
      concepts: [
        { h: "The six-step flow", p: "Finance & G/L runs Journal Entry → Approval → Posting → Reconcile → Period Close → Financial Report. Three roles carry it: the Accountant enters and reviews journals, the Controller oversees close and reconciliation, and the CFO consumes the resulting financial reports. Unlike O2C or P2P, this flow doesn't start with a customer or vendor transaction — it's where every other module's transactions ultimately land." },
        { h: "Key documents", p: "The flow moves through the General Journal (entry), Posted G/L Entry (the permanent record), Bank Rec. Worksheet (reconciliation), and out to Trial Balance, Income Statement, and Balance Sheet as the reporting output. The reports aren't separate data — they're views over the same posted G/L entries every other module contributed to." },
        { h: "Every module feeds the G/L through posting groups", p: "A sales invoice, a purchase invoice, an inventory adjustment — none of them post directly to a specific G/L account chosen by the user. Each one posts through the posting-group setup (customer posting group, vendor posting group, inventory posting group, general posting setup) configured for that transaction type, which is what determines the actual account. This is the same mechanism from O2C, P2P, and Inventory, converging here." },
        { h: "Two habits worth keeping", p: "Use Recurring Journals for anything that repeats on a schedule — monthly accruals, standard depreciation entries — instead of re-entering them by hand every period. And lock posted periods immediately after close: leaving a closed period open for posting is what allows a later retroactive entry to quietly distort a report someone already signed off on." }
      ],
      why: "A CFO who asks why the Trial Balance doesn't match expectations is really asking a question about postings that happened in Sales, Purchasing, and Inventory weeks earlier — understanding that every module's posting groups feed here is what lets a consultant trace the discrepancy back to its actual source instead of staring at the G/L in isolation.",
      check: { q: "A Balance Sheet figure looks wrong for a particular G/L account, but nobody has touched the General Journal directly. Where else should you look?", a: "The posting groups on whatever module actually generated the entries — customer, vendor, or inventory posting groups feeding that account through Sales, Purchasing, or Inventory transactions. The G/L Entry itself is downstream of those posting groups, not the place the error originated." },
      flow: [
        { label: "Journal Entry", detail: "Accountant" },
        { label: "Approval", detail: "Accountant" },
        { label: "Posting", detail: "Accountant" },
        { label: "Reconcile", detail: "Controller" },
        { label: "Period Close", detail: "Controller" },
        { label: "Financial Report", detail: "CFO" }
      ]
    },
    {
      id: "flow-05-month-end-close", group: "flows", n: "05", title: "Month-end & year-end close, step by step",
      dur: "12 min read",
      summary: "The eight-step accountant close checklist, including the one step that only runs once a year.",
      concepts: [
        { h: "Steps 1–4: clear the operational backlog", p: "Post all open journals and documents first — no unposted Sales Orders, Purchase Invoices, or Journal Batches should remain open going into a close. Then run bank reconciliation, matching every bank statement line to its BC ledger entry and resolving differences. Post recurring journals (accruals, prepayments, depreciation) into the correct period. Then run the inventory cost adjustment — Adjust Cost - Item Entries, followed by Post Inventory Cost to G/L — so inventory valuation is current before anything downstream reads it." },
        { h: "Steps 5–7: reconcile, report, and lock", p: "Review and post VAT: run the VAT Statement, verify it against the tax authority return, and mark VAT entries as closed. Print the financial reports — Trial Balance, Income Statement, Balance Sheet — for management review. Then lock the accounting period by updating Allow Posting From in the Accounting Periods setup, which is what actually prevents anyone from posting into a period that's supposed to be closed." },
        { h: "Step 8: the once-a-year step", p: "Close Income Statement runs only at year-end. It posts the full year's profit-and-loss to Retained Earnings and opens the new fiscal year. This is structurally different from the other seven steps — running it mid-year would zero out the income statement before the year's activity is complete, which is exactly why it's an annual step and not a monthly one." },
        { h: "Order matters", p: "The sequence isn't arbitrary — inventory cost adjustment has to run before the financial reports are printed, or the reports reflect stale valuation; VAT has to be reviewed before period lock, or a correction after lock means reopening a period that was supposed to be closed. Following the checklist in order avoids having to unwind and redo a step." }
      ],
      why: "A consultant who can recite this checklist from memory is the difference between a close that takes an afternoon and one that drags into next week because a step got skipped and had to be discovered — and fixed — after the period was already locked.",
      check: { q: "Why does 'Close Income Statement' only run once a year, while the other seven steps repeat every month?", a: "It posts the entire year's profit-and-loss to Retained Earnings and opens a new fiscal year — an action that only makes sense once the year's activity is complete. Running it every month would prematurely zero out the income statement mid-year, which is the opposite of what a monthly close needs." },
      flow: [
        { label: "Post Open Documents", detail: "Steps 1-4" },
        { label: "Bank Reconciliation", detail: "Steps 1-4" },
        { label: "Post Recurring Journals", detail: "Steps 1-4" },
        { label: "Inventory Cost Adjustment", detail: "Steps 1-4" },
        { label: "Review & Post VAT", detail: "Steps 5-7" },
        { label: "Print Financial Reports", detail: "Steps 5-7" },
        { label: "Lock Period", detail: "Steps 5-7" },
        { label: "Close Income Statement", detail: "Step 8 — year-end only" }
      ]
    },
    {
      id: "flow-06-jobs", group: "flows", n: "06", title: "Project management (Jobs) flow",
      dur: "11 min read",
      summary: "Create Job through to invoice, and the three WIP methods that decide when revenue actually gets recognized.",
      concepts: [
        { h: "The six-step flow", p: "The Jobs module runs Create Job → Budget Lines → Plan Resources → Time Sheets → Post Usage → Job Invoice. Three roles carry it: the Project Manager owns the job and its budget, the Consultant logs time against it, and Finance turns posted usage into a client invoice. This module exists for service and consulting firms specifically — anyone billing based on actual time and material consumption rather than a fixed shipped-goods sale." },
        { h: "Key documents", p: "The flow moves through the Job Card (the project itself), Job Planning Lines (budget and plan), Job Journal (time and material entries before posting), Time Sheet (the consultant's input), Posted Job Ledger (the permanent usage record), and out to a Sales Invoice for billing. Billing is generated from actuals posted through the Job Ledger, not from the original budget." },
        { h: "Three WIP methods, three different answers to 'when is revenue earned'", p: "Work in Progress accounting controls when revenue gets recognized on a job that's still in progress. Fixed Contract recognizes revenue on a schedule tied to the contract terms, independent of percentage completed. Cost of Sales matches revenue recognition to costs as they're incurred. Percentage of Completion recognizes revenue proportionally as the job progresses toward completion. Each produces a materially different financial picture for the exact same underlying project." },
        { h: "The choice has to fit the business model", p: "A firm billing fixed-fee contracts with clear milestones is a poor fit for Percentage of Completion, which assumes progress can be measured continuously. A firm running long, gradually-progressing engagements is a poor fit for Fixed Contract, which doesn't reflect how the work is actually being done. Picking the WIP method is a finance decision made once per job type, not something to leave at the BC default without checking." }
      ],
      why: "The wrong WIP method doesn't produce an error — it produces a financial statement that's technically valid but doesn't reflect economic reality, which only gets discovered when an auditor or a controller asks why revenue recognition doesn't match how the business actually works.",
      check: { q: "A consulting firm wants revenue recognized gradually as work is delivered over a multi-month engagement, rather than all at contract signing or all at final delivery. Which WIP method fits, and why not Fixed Contract?", a: "Percentage of Completion — it recognizes revenue proportionally as the job progresses. Fixed Contract ties recognition to the contract schedule rather than actual progress, which wouldn't reflect the gradual-delivery pattern this firm needs." },
      flow: [
        { label: "Create Job", detail: "Project Manager" },
        { label: "Budget Lines", detail: "Project Manager" },
        { label: "Plan Resources", detail: "Project Manager" },
        { label: "Time Sheets", detail: "Consultant" },
        { label: "Post Usage", detail: "Consultant" },
        { label: "Job Invoice", detail: "Finance" }
      ]
    },
    {
      id: "flow-07-setup-essentials", group: "setup", n: "07", title: "Setup essentials: posting groups, number series, dimensions",
      dur: "12 min read",
      summary: "The three setup categories that have to be right before the first transaction, because fixing them after the fact means editing history.",
      concepts: [
        { h: "Posting groups translate business meaning into G/L accounts", p: "General Posting Setup maps a Business Posting Group plus a Product Posting Group to specific G/L accounts. Customer Posting Groups and Vendor Posting Groups do the same for receivables and payables, and Inventory Posting Groups do it for stock value. None of these are optional — every sales line, purchase line, and inventory movement needs a complete combination of these groups before it can post." },
        { h: "Number series drive document numbering", p: "Every document type — sales, purchase, inventory — needs its own number series so BC can assign the next document number automatically. Series can be manual or auto-increment, and the choice is tied directly to posting: a document type without a configured series simply cannot be created, let alone posted." },
        { h: "Dimensions add the analysis axis", p: "Cost Center, Department, and Project are the typical dimensions, applied as default-dimension rules on customers, vendors, and items, and marked mandatory or optional per combination. Dimensions get attached at the point of transaction entry — every journal line, sales line, and purchase line carries them forward." },
        { h: "Complete setup before the first transaction, always", p: "This is the one-line rule from the source material, and it is not an exaggeration: errors in posting groups cause financial imbalances that are hard to reverse once real transactions have posted against them. Setup mistakes discovered after go-live usually mean correcting entries rather than correcting configuration." }
      ],
      why: "This lesson exists because the single highest-frequency implementation error traced in the troubleshooting material — 'Gen. Posting Setup does not exist' — is a direct, predictable consequence of treating this setup as something to finish later. Getting it right before transactions start is cheaper than any fix afterward.",
      check: { q: "A Customer Posting Group is missing its Receivables Account mapping. What actually fails, and when?", a: "Posting a sales invoice for any customer assigned to that posting group fails — not at order entry, but at the moment BC tries to post and needs to write to the Receivables G/L account the mapping should have supplied. The order and invoice can still be created and saved; only posting is blocked." }
    },
    {
      id: "flow-08-db-map", group: "setup", n: "08", title: "The BC data model in one map",
      dur: "14 min read",
      summary: "Master, transaction/document, and posted-ledger tables — how they relate and which table number to remember for each.",
      concepts: [
        { h: "Six categories of tables", p: "Master Tables (roughly 40) hold Customer, Vendor, Item, G/L Account, Resource, and Employee — the reference data everything else points at. Transaction Tables (roughly 60) hold Sales/Purchase Header & Lines, Journal Lines, and Job Lines — open, editable documents. Posted/Ledger tables (roughly 30) hold G/L Entry, Cust. Ledger Entry, Item Ledger Entry, and Value Entry — the immutable audit trail. Setup Tables (roughly 80) hold configuration like Gen. Posting Setup, Inventory Posting, and Payment Terms. Dimension Tables (roughly 10) hold Dimension, Dimension Value, and Dimension Set Entry. Buffer/Temp tables exist only in memory during processing — never stored permanently." },
        { h: "Master tables to know by number", p: "Customer is table 18, Vendor is 23, Item is 27, G/L Account is 15, Resource is 156, Fixed Asset is 5600, Bank Account is 270, Dimension is 348, Unit of Measure is 204, Payment Terms is 3. Every master table uses an alphanumeric No. as its primary key, assigned through a No. Series. Master records are never deleted in a healthy implementation — they're blocked instead, so the historical transactions that reference them stay intact." },
        { h: "Transaction (document) tables: headers and lines are always separate", p: "Sales Header (36) and Sales Line (37), Purchase Header (38) and Purchase Line (39), Gen. Journal Line (81), Item Journal Line (83), Job Journal Line (210) — these are open documents that exist only until posted, at which point they move to the corresponding posted tables. Headers and lines are always separate tables, linked by Document No. — when troubleshooting an incomplete transaction, query both, not just one." },
        { h: "Posted ledger entries: the permanent audit trail", p: "G/L Entry (17), Customer Ledger Entry (21), Detailed Cust. Ledger Entry (379), Vendor Ledger Entry (25), Item Ledger Entry (32), Value Entry (5802) — these are created when documents post, and in production they are never deleted. Entry No. auto-increments globally per table, and the 'Applied Entries' feature is the standard way to trace how a payment matched against an invoice.",
          table: {
            headers: ["Category", "Table (No.)", "Holds"],
            rows: [
              ["Master", "Customer (18), Vendor (23), Item (27), G/L Account (15), Resource (156), Employee", "Reference data everything else points at"],
              ["Transaction / document", "Sales Header (36) & Line (37), Purchase Header (38) & Line (39), Journal Lines, Job Lines", "Open, editable documents before posting"],
              ["Posted / ledger", "G/L Entry (17), Cust. Ledger Entry (21), Item Ledger Entry (32), Value Entry (5802)", "Immutable audit trail after posting"],
              ["Setup", "Gen. Posting Setup, Inventory Posting, Payment Terms, ~80 tables", "Configuration that governs posting behavior"],
              ["Dimension", "Dimension, Dimension Value, Dimension Set Entry", "Analysis axes (Cost Center, Department, Project)"],
              ["Buffer / Temp", "In-memory only", "Never stored permanently"]
            ]
          } }
      ],
      why: "A consultant who can name the right table number in a support conversation — 'that's Customer Ledger Entry, table 21' — moves a troubleshooting call forward immediately, instead of everyone waiting while someone looks it up mid-call.",
      check: { q: "You need to trace a posted G/L Entry back to the original Sales Invoice that created it. Which field connects them, and what built-in BC tool automates that trace?", a: "The Document No. field on the G/L Entry connects it back to the source document, and the Navigate feature (Ctrl+Alt+F9) automates walking from any G/L Entry back to its originating Sales Invoice, payment, or journal." },
      code: "// BC table numbers worth knowing cold\n// Customer            18   Vendor                23\n// Item                 27   G/L Account            15\n// Resource            156   Fixed Asset          5600\n// Bank Account        270   Dimension              348\n// Unit of Measure     204   Payment Terms            3\n//\n// Sales Header         36   Sales Line              37\n// Purchase Header       38   Purchase Line           39\n// Gen. Journal Line     81   Item Journal Line       83\n// Job Journal Line     210   Transfer Header       5740\n//\n// G/L Entry             17   Customer Ledger Entry   21\n// Vendor Ledger Entry   25   Item Ledger Entry       32\n// Value Entry         5802   Bank Acc. Ledger Entry  271"
    },
    {
      id: "flow-09-critical-setup-tables", group: "setup", n: "09", title: "Critical setup tables reference",
      dur: "12 min read",
      summary: "The ten configuration tables that, if incomplete, block or corrupt posting.",
      concepts: [
        { h: "The ten tables and what breaks without them", p: "Each of the ten maps a specific business concept to a G/L account or a system-wide behavior, and each has a distinct, predictable failure mode when it's missing a row.",
          table: {
            headers: ["Table (No.)", "Purpose", "Symptom if missing"],
            rows: [
              ["General Posting Setup (252)", "Bus. + Prod. Posting Group → G/L Accounts", "\"G/L account missing\""],
              ["Inventory Posting Setup (5813)", "Location + Inv. Group → G/L", "Inventory posting blocked"],
              ["Customer Posting Group (92)", "Customer type → Receivables", "Customer invoice won't post"],
              ["Vendor Posting Group (93)", "Vendor type → Payables", "Vendor invoice won't post"],
              ["VAT Posting Setup (325)", "VAT Groups → VAT Account", "Tax calculation fails"],
              ["General Ledger Setup (98)", "Currency, rounding, periods", "Fiscal year / rounding errors"],
              ["Sales & Receivables Setup (311)", "Default accounts, rounding", "Sales process deviations"],
              ["Purchases & Payables Setup (312)", "Default accounts, receipts", "Purchase process deviations"],
              ["Inventory Setup (313)", "Costing, location, auto cost", "Inventory valuation mismatch"],
              ["No. Series (308)", "Document numbering per type", "Cannot create new documents"]
            ]
          } },
        { h: "The two most common failure points", p: "General Posting Setup and VAT Posting Setup cause the most common implementation errors when incomplete, because both are combinatorial — every Business Posting Group × Product Posting Group pair (or every VAT Business × VAT Product Group pair) needs its own row. A setup that's 90% complete looks fine until the one untested combination shows up in a live transaction." },
        { h: "These are configuration, not master or transaction data", p: "It's worth keeping the three data categories distinct: master data (Customer, Vendor, Item) describes who and what you're transacting with; transaction data (Sales Header, Purchase Line) records what actually happened; setup tables like these ten configure how BC behaves and what it's allowed to post. A missing row in a setup table doesn't corrupt data that already exists — it blocks new posting until the row is added." },
        { h: "Run 'Test Posting' before go-live", p: "The consultant discipline behind this table: always run Test Posting before go-live, and test the full combination matrix with an actual purchase and sales cycle — not just the common cases. Missing entries in Gen. Posting Setup or VAT Posting Setup are, by a wide margin, the most common implementation errors this reference material calls out." }
      ],
      why: "When a client reports a posting error mid-implementation, checking this ten-table list first — rather than assuming it's a data or permissions problem — resolves the majority of 'why won't this post' tickets in minutes instead of hours.",
      check: { q: "Which two setup tables does this reference call out as causing the most common implementation errors when incomplete, and why do both fail the same way?", a: "General Posting Setup and VAT Posting Setup. Both fail the same way because both require a complete combination matrix (Bus. + Prod. Posting Group for one, VAT Bus. + VAT Prod. Group for the other) — a setup that covers the common cases but misses one combination looks complete until that specific combination is finally used in a live transaction." },
      code: "// Critical setup tables — table no. | purpose | symptom if missing\n// General Posting Setup       252  Bus.+Prod. -> G/L Accounts     'G/L account missing'\n// Inventory Posting Setup    5813  Location+Inv. Group -> G/L      Inventory posting blocked\n// Customer Posting Group       92  Customer type -> Receivables    Customer invoice won't post\n// Vendor Posting Group         93  Vendor type -> Payables         Vendor invoice won't post\n// VAT Posting Setup           325  VAT Groups -> VAT Account       Tax calculation fails\n// General Ledger Setup         98  Currency, rounding, periods     Fiscal year / rounding errors\n// Sales & Receivables Setup   311  Default accounts, rounding      Sales process deviations\n// Purchases & Payables Setup  312  Default accounts, receipts      Purchase process deviations\n// Inventory Setup             313  Costing, location, auto cost    Inventory valuation mismatch\n// No. Series                  308  Document numbering per type     Cannot create new documents"
    },
    {
      id: "flow-10-master-data-fields", group: "setup", n: "10", title: "Master data field reference: Customer, Vendor, Item",
      dur: "13 min read",
      summary: "The fields on each card that actually drive posting behavior, credit checks, and document defaults.",
      concepts: [
        { h: "Customer Card (table 18): General and Invoicing", p: "No. is the primary key from No. Series. Name/Name 2 display on documents; Address/Post Code/City set the default ship-to address. Credit Limit (LCY) triggers a credit warning on orders that exceed it, and Blocked (Ship/Invoice/All) stops transactions outright.",
          table: {
            headers: ["Field", "Drives"],
            rows: [
              ["Customer Posting Group", "Receivables G/L Account"],
              ["Gen. Bus. Posting Group", "Sales Account, via Gen. Posting Setup"],
              ["VAT Bus. Posting Group", "VAT Account, via VAT Posting Setup"],
              ["Payment Terms Code", "Due-date calculation"],
              ["Credit Limit (LCY)", "Credit warning when an order exceeds it"],
              ["Blocked", "Ship / Invoice / All — stops transactions outright"]
            ]
          } },
        { h: "Customer Card: Shipping fields", p: "The fields that set defaults for how — and whether — a customer's orders ship.",
          table: {
            headers: ["Field", "Drives"],
            rows: [
              ["Location Code", "Default warehouse for shipments"],
              ["Shipment Method Code", "Incoterms carried onto documents"],
              ["Shipping Agent Code", "Carrier integration"],
              ["Combine Shipments", "Auto-combines multiple orders onto one invoice"],
              ["Reserve", "Never / Optional / Always — automatic inventory reservation"]
            ]
          } },
        { h: "Vendor Card (table 23): the payables mirror of the Customer Card", p: "The same posting-group mechanism as the Customer Card, mirrored to the buying side.",
          table: {
            headers: ["Field", "Drives"],
            rows: [
              ["Vendor Posting Group", "Payables G/L Account"],
              ["Gen. Bus. Posting Group", "Purchase Account, via Gen. Posting Setup"],
              ["VAT Bus. Posting Group", "Input-tax VAT Account"],
              ["Payment Terms Code", "Due date for AP aging"],
              ["Currency Code", "Foreign-currency vendors"],
              ["Purchaser Code", "Assigns a buyer"],
              ["Blocked", "Payment / All — stops AP transactions"],
              ["Invoice Discount %", "Auto-applies on purchase lines"]
            ]
          } },
        { h: "Item Card (table 27): the fields that decide how an item behaves", p: "The fields that decide whether an item is tracked, how it's costed, and what stops it from transacting.",
          table: {
            headers: ["Field", "Drives"],
            rows: [
              ["Item Type", "Inventory / Non-Inventory / Service — whether it's tracked in stock at all"],
              ["Costing Method", "FIFO / Average / Standard / Specific — permanent once transactions exist"],
              ["Inventory Posting Group", "Inventory G/L Account"],
              ["Gen. Prod. Posting Group", "Revenue / COGS, via Gen. Posting Setup"],
              ["Base Unit of Measure", "Primary UoM for every transaction on the item"],
              ["Reorder Point / Qty", "Triggers MRP planning"],
              ["Blocked", "Stops all transactions for the item outright"]
            ]
          } }
      ],
      why: "Nearly every 'why did this post to the wrong account' or 'why can't this customer place an order' question traces back to one specific field on one of these three cards — knowing the field by name, not just 'somewhere in setup,' is what makes a consultant fast on a support call.",
      check: { q: "Which single field on the Customer Card determines the G/L Receivables account used when that customer's invoice posts?", a: "Customer Posting Group — it maps to the Receivables G/L Account. Gen. Bus. Posting Group and VAT Bus. Posting Group affect the Sales and VAT accounts respectively, but Receivables specifically comes from Customer Posting Group." }
    },
    {
      id: "flow-11-chart-of-accounts", group: "setup", n: "11", title: "Chart of accounts structure",
      dur: "8 min read",
      summary: "The standard number-range convention for Assets, Liabilities, Revenue, COGS, Opex, and statistical accounts.",
      concepts: [
        { h: "Balance Sheet ranges: 1000–2999", p: "Both ranges feed the Balance Sheet, and both represent point-in-time positions rather than period activity." },
        { h: "Income Statement ranges: 3000–8999", p: "All three ranges feed the Income Statement and represent activity over a period, not a point-in-time balance." },
        { h: "9000–9999: statistical, not financial", p: "This range is reserved for Non-Financial/Memo accounts — Headcount, Units Sold, Hours Worked — statistical entries only. These accounts don't carry monetary value in the way the ranges below them do; they exist purely to track a number alongside the financial data for reporting and ratio purposes.",
          table: {
            headers: ["Range", "Category", "Examples", "Feeds"],
            rows: [
              ["1000-1999", "Assets", "Bank Accounts, Accounts Receivable, Inventory, Fixed Assets", "Balance Sheet"],
              ["2000-2999", "Liabilities & Equity", "Accounts Payable, VAT Payable, Bank Loans, Share Capital", "Balance Sheet"],
              ["3000-3999", "Revenue", "Sales Domestic, Sales Export, Service Revenue, Other Income", "Income Statement"],
              ["4000-5999", "Cost of Goods Sold", "Material Cost, Direct Labor, Manufacturing Overhead, Freight", "Income Statement"],
              ["6000-8999", "Operating Expenses", "Salaries, Rent, Marketing, Depreciation, Admin Costs", "Income Statement"],
              ["9000-9999", "Non-Financial / Memo", "Headcount, Units Sold, Hours Worked", "Statistical only"]
            ]
          } },
        { h: "Why the convention matters", p: "Sticking to this number-range convention means any consultant — not just the one who originally set up the chart of accounts — can look at an account number and immediately know which financial statement it feeds and roughly what kind of account it is, without opening the G/L Account card. Breaking the convention on a single client engagement makes every future consultant slower on that specific implementation." }
      ],
      why: "An account numbered outside its expected range is usually a sign that someone created it in a hurry without checking the convention — and it's exactly the kind of small inconsistency that turns a routine chart-of-accounts review into a longer cleanup exercise before go-live.",
      check: { q: "An account numbered 4500 records freight cost. Which financial statement does it flow into, and how do you know from the number alone?", a: "The Income Statement — the number falls in the 4000–5999 Cost of Goods Sold range, and COGS accounts (along with Revenue and Operating Expenses) feed the Income Statement rather than the Balance Sheet." },
      code: "// Chart of accounts — standard number ranges\n// 1000-1999  Assets                Balance Sheet\n// 2000-2999  Liabilities & Equity  Balance Sheet\n// 3000-3999  Revenue               Income Statement\n// 4000-5999  Cost of Goods Sold    Income Statement\n// 6000-8999  Operating Expenses    Income Statement\n// 9000-9999  Non-Financial / Memo  Statistical only"
    },
    {
      id: "flow-12-role-centers", group: "ops", n: "12", title: "Role Centers by role",
      dur: "10 min read",
      summary: "What each of the six common Role Centers surfaces, so you can map a real job title to the right BC role.",
      concepts: [
        { h: "Business Manager and Accountant", p: "Business Manager surfaces a financial overview, a KPI dashboard, a cash flow forecast, and top customers/vendors — the executive-level view of the business. Accountant surfaces G/L journals, bank reconciliation, period close, and financial reports — the day-to-day finance operational view, distinct from Business Manager's higher-altitude summary." },
        { h: "Sales Order Processor and Purchasing Agent", p: "Sales Order Processor surfaces the sales orders list, customer list, shipment queue, and invoice to-do — everything the O2C flow needs from the sales side. Purchasing Agent surfaces purchase orders, vendor list, receipts pending, and invoice matching — the P2P equivalent from the buying side." },
        { h: "Warehouse Worker and Project Manager", p: "Warehouse Worker surfaces pick/put-away, bin contents, transfer orders, and physical inventory — the operational inventory view built around movement, not valuation. Project Manager surfaces jobs overview, time sheets, WIP analysis, and resource availability — the Jobs-module equivalent of the other operational role centers." },
        { h: "Matching a job title to a role", p: "BC adapts its interface based on the assigned role, showing only the KPIs, tasks, and shortcuts relevant to that job. The practical use of this list for a consultant: when a client describes a new hire's actual day-to-day work, this table is the fast way to map that description to the right Role Center assignment, rather than defaulting everyone to a generic view." }
      ],
      why: "Assigning the wrong Role Center to a new user doesn't cause an error — it just means that user's daily workspace is cluttered with tiles and shortcuts for a job they don't do, which quietly costs them time every single day until someone notices and fixes the assignment.",
      check: { q: "A client says their new hire's job is 'processes vendor invoices and matches them to purchase orders.' Which Role Center fits?", a: "Purchasing Agent — its surfaced items (purchase orders, vendor list, receipts pending, invoice matching) map directly onto that job description, unlike Warehouse Worker or Accountant, which cover adjacent but different responsibilities." }
    },
    {
      id: "flow-13-navigation-shortcuts", group: "ops", n: "13", title: "Navigation, search & keyboard shortcuts",
      dur: "11 min read",
      summary: "Tell Me, Navigate, filter expressions, and the keyboard shortcuts worth memorizing.",
      concepts: [
        { h: "Tell Me and Navigate", p: "Tell Me (Alt+Q) is a universal search across every page, report, and action in BC — type any keyword to find a feature instantly instead of hunting through menus; typing 'post' surfaces every posting action, 'customer' surfaces every customer-related page. Navigate (Ctrl+Alt+F9) traces any G/L Entry back to its source document, which is the standard tool for auditing and troubleshooting a financial discrepancy — from any G/L Entry, Navigate finds the original Sales Invoice, payment, or journal that created it." },
        { h: "Bookmarks and personalization", p: "Frequently used pages can be pinned to the Role Center, and users or teams can add fields to lists, move columns, and save filter views. Right-clicking any column header opens the add/remove-fields menu, and the Personalise banner gives access to the same customization directly." },
        { h: "Filters and FlowFilters", p: "Lists filter by date ranges, dimensions, locations, and custom expressions, and FlowFilters recalculate their totals dynamically as the filter changes rather than showing a static snapshot. The filter expression syntax itself is worth memorizing.",
          table: {
            headers: ["Expression", "Meaning"],
            rows: [
              ["1/1/25..3/31/25", "Range (inclusive)"],
              ["<1/1/25", "Before a date"],
              [">100", "Greater than a value"],
              ["10|20|30", "One of several values"],
              ["A*", "Starts with a letter"],
              ["<>BLOCKED", "Not equal to a value"]
            ]
          } },
        { h: "Essential keyboard shortcuts", p: "These cover the large majority of everyday keyboard-driven navigation.",
          table: {
            headers: ["Shortcut", "Action"],
            rows: [
              ["Alt+Q", "Opens Tell Me"],
              ["F5", "Refreshes the page"],
              ["Ctrl+F7", "Opens ledger entries"],
              ["Ctrl+F9", "Releases a document"],
              ["F9", "Posts a document"],
              ["Ctrl+Shift+F9", "Deletes a posting (used carefully)"],
              ["Ctrl+Home", "Jumps to the first record"],
              ["Alt+F4", "Closes the page"],
              ["Ctrl+N", "Creates a new record"],
              ["Ctrl+D", "Deletes a record"]
            ]
          } }
      ],
      why: "A consultant who navigates BC entirely by mouse clicks through menus is visibly, measurably slower in front of a client than one who uses Tell Me and the shortcut set — and in a live troubleshooting session, that speed difference is what makes the difference between confidence and fumbling.",
      check: { q: "You need every sales invoice numbered either INV-001 or INV-002. What do you type into the Document No. filter field?", a: "INV-001|INV-002 — the pipe character is BC's OR condition within a filter expression, matching either value." },
      code: "// Filter expression reference\n// 1000..2000   Range (from..to)     Post Date: 01/01/24..31/12/24\n// >500         Greater than          Amount: >500\n// <>0          Not equal to zero     Remaining Amount: <>0\n// A*           Starts with A         Name: Micro*\n// *GmbH        Ends with GmbH        Name: *GmbH\n// 10|20|30     OR condition          Document No.: INV-001|INV-002\n// &            AND within one field  Description: *Service*&*2024*\n\n// Essential keyboard shortcuts\n// Alt+Q            Tell Me / Search        Ctrl+F7          Ledger entries\n// F5               Refresh page            Ctrl+F9          Release document\n// F9               Post document           Ctrl+Shift+F9    Delete posting\n// Ctrl+Home        First record            Alt+F4           Close page\n// Ctrl+N           New record              Ctrl+D           Delete record"
    },
    {
      id: "flow-14-approvals-power-automate", group: "ops", n: "14", title: "Approvals & Power Automate flows",
      dur: "11 min read",
      summary: "The four built-in approval chains and six common Power Automate patterns, none of which need AL.",
      concepts: [
        { h: "Four built-in approval chains", p: "Purchase Order Approval triggers when a PO amount exceeds a threshold, and routes Requestor → Line Manager → Finance Director. Sales Invoice Approval triggers before posting a high-value invoice, routing Sales Agent → Sales Manager → CFO. Credit Limit Override triggers when an order exceeds the customer's credit limit, routing Sales Rep → Credit Manager. Journal Batch Approval triggers on a G/L journal before posting, routing Accountant → Controller. All four are configured, not coded — they're part of BC's built-in approval engine." },
        { h: "Six Power Automate patterns, no code required", p: "Order visibility: a new Sales Order triggers a summary email plus a Teams notification to the Sales Manager. Mobile approvals: a PO requiring approval sends an Adaptive Card in Teams for in-app approve/reject. Reporting pipeline: a posted invoice creates a SharePoint list row and updates a Power BI dataset. Procurement alerts: stock falling below reorder point creates a Planner task and notifies purchasing. CRM sync: an updated customer record syncs to Dynamics 365 Sales or Salesforce. Expense automation: a submitted expense routes to a manager in Teams and posts to the BC Journal on approval. Every one of these uses the BC connector inside the Power Automate portal." },
        { h: "Why this matters for a consultant's toolkit", p: "The instinct to reach for custom AL the moment a client asks for 'notify someone when X happens' is usually wrong — both the built-in approval engine and Power Automate cover the large majority of real-world approval and notification requirements without a single line of code, and without the ongoing maintenance burden custom AL carries." },
        { h: "Mobile and Teams are first-class here", p: "Several of these patterns route specifically through Teams — Adaptive Cards for mobile approvals, channel notifications for order visibility — which matters in practice because it means approvers don't need to open BC itself to act on a request. That's often the deciding factor in whether an approval workflow actually gets used or gets ignored." }
      ],
      why: "A client who's told 'that needs custom development' for a requirement Power Automate already covers out of the box ends up paying for AL work that adds long-term maintenance cost for no real benefit over the no-code option — checking this list first is a genuine cost-saving step, not just a shortcut.",
      check: { q: "A finance team wants any sales invoice over a set amount to require CFO sign-off before it posts, with no custom AL. What's the built-in mechanism?", a: "The Sales Invoice Approval chain — it triggers automatically before posting a high-value invoice and routes Sales Agent → Sales Manager → CFO, entirely through BC's built-in approval engine with no AL required." }
    },
    {
      id: "flow-15-reports-powerbi", group: "ops", n: "15", title: "Built-in reports, financial statements & Power BI",
      dur: "13 min read",
      summary: "What ships out of the box by module, and how the Power BI connection is wired — though the account-schedule mechanics and Power BI setup steps are named here rather than walked through.",
      concepts: [
        { h: "Built-in reports by module", p: "Finance ships Trial Balance, Balance Sheet, Income Statement, Cash Flow Forecast, Aged Accounts Receivable, Aged Accounts Payable, Bank Account Reconciliation, and G/L Detail Trial Balance. Sales ships Sales Statistics, Customer Order Summary, Customer Top 10 List, Item Sales Statistics, Salesperson Statistics, Sales Quote - Expired, and Invoice Discount List. Purchasing ships Vendor Purchase List, Purchase Statistics, Vendor Top 10 List, Outstanding Purchase Orders, Purchase Receivable Analysis, and Expected Cost Posting. Inventory ships Inventory Valuation, Inventory Availability, Phys. Inventory List, Item Turnover, Inventory Cost & Price List, and Item Vendor Catalog." },
        { h: "Power BI: connection architecture and free apps", p: "The data path runs BC OData API → Power Query → Data Model → DAX Measures → Power BI Report → Embedded in BC. Microsoft ships four free BC Power BI apps: Finance (Revenue vs Budget, Gross Margin %, DSO, Cash Position, AP Aging), Sales (Sales by Region, Top Customers, Win Rate, Pipeline Value, Monthly Trend), Inventory (Stock Turnover, Days of Supply, Slow Movers, Reorder Alerts, Valuation), and Project/Jobs (Budget vs Actual, Billable Hours, WIP Value, Utilization Rate, Profit Margin)." },
        { h: "Account Schedules: named, not walked through step by step", p: "BC's built-in financial statement builder uses a Row Definition (mapping G/L accounts, ranges, formulas, and totalling rows, reusable across reports), a Column Definition (Actual, Budget, Variance, Prior Year, % Change), Dimension Filtering (slicing any report by Department, Cost Center, or Project without touching the account structure), and Budget Integration (importing from Excel or building in BC, with automatic variance calculation). **[expand later]** — the source material names each of these four pieces and what it does, but doesn't walk through the actual configuration steps to build one." },
        { h: "Standard financial reports included", p: "Income Statement (P&L), Balance Sheet, Cash Flow Statement, Trial Balance, Budget vs Actual, and Consolidation Report ship as standard financial reports built on the Account Schedules engine described above." }
      ],
      why: "Knowing what ships standard by module means a consultant can answer 'does BC already do this' in seconds during a scoping conversation, instead of promising custom report development for something that was a checkbox away the whole time.",
      check: { q: "Which four free Power BI apps does Microsoft ship for Business Central, and what does each roughly cover?", a: "Finance (revenue, margin, DSO, cash, AP aging), Sales (regional sales, top customers, win rate, pipeline, trend), Inventory (turnover, days of supply, slow movers, reorder alerts, valuation), and Project/Jobs (budget vs actual, billable hours, WIP, utilization, margin)." }
    },
    {
      id: "flow-16-pitfalls-troubleshooting", group: "consultant", n: "16", title: "Common pitfalls & troubleshooting",
      dur: "13 min read",
      summary: "Six mistakes that show up on almost every implementation, and the six runtime errors a consultant will be asked to fix the most.",
      concepts: [
        { h: "Costing method is a one-way door", p: "Once an item has posted its first transaction, its costing method can't be changed. Standard costing suits manufacturing; Average suits retail. This has to be decided per item category during setup, not discovered after go-live." },
        { h: "Incomplete Gen. Posting Setup causes random-looking errors", p: "Because posting groups are combinatorial (every Business Posting Group × Product Posting Group pair needs its own row), a setup that's 90% complete produces errors that look random — they only appear when a specific, untested combination is finally used in a live transaction. Use the 'Suggest Accounts' feature and test the full combination matrix with an actual purchase and sales cycle before go-live, not just the common cases." },
        { h: "No dimension strategy means reporting gaps later", p: "Dimensions have to be designed in the implementation phase, with sign-off, and added before the first transactions post — because dimension values can't be retrofitted onto entries that already exist. A missing dimension strategy shows up months later as manual Excel work to reconstruct analysis that should have come free from BC." },
        { h: "Six errors you'll be asked about the most", p: "'Gen. Posting Setup does not exist' → add the missing Bus./Prod. Posting Group combination. 'The inventory is not sufficient' → stock is zero/negative at that location; post a positive adjustment or check the location filter. 'Period is not open for posting' → update Allow Posting From/To in General Ledger Setup. 'Outstanding amount exceeds credit limit' → override on the order or raise the Customer Card credit limit. 'Item [X] does not have a unit cost' → Standard costing with a zero standard cost; update it via the Standard Cost Worksheet. 'The amount in the journal is zero' → a Gen. Journal balancing issue; check the Bal. Account Type/No. so debit equals credit." }
      ],
      why: "This is the lesson a consultant actually reaches for mid-call, with a client watching an error dialog. Fast, correct answers to 'why is this happening' build the kind of trust that turns a one-off engagement into a retained relationship — which is the whole ROI case for this series existing.",
      check: { q: "A user gets 'Gen. Posting Setup does not exist' while posting a sales invoice. What's missing, specifically?", a: "The row in the General Posting Setup table for that customer's Business Posting Group combined with that item's Product Posting Group. The fix is adding the missing Bus. + Prod. Posting Group combination with the correct G/L accounts, not a permissions or document fix." }
    },
    {
      id: "flow-17-go-live-readiness", group: "consultant", n: "17", title: "Go-live readiness & data migration",
      dur: "14 min read",
      summary: "The four-phase Success by Design methodology and the go-live checklist by category — leaning more toward project-management reference than day-to-day functional use.",
      concepts: [
        { h: "Data migration: a six-step process, four tool options", p: "Migration runs Extract from Legacy → Clean & Transform → Map to BC Fields → RapidStart/API Load → Validate & Reconcile → Sign-off. RapidStart Services is BC's native tool, using Excel templates per table, best for master data (Customers, Vendors, Items, G/L Accounts), validated before applying. Configuration Packages bundle multiple related tables for one-step apply/validate, and export/import between environments for template companies. The BC API (REST) handles programmatic loads of large data sets, using PATCH for updates and POST for new records. Third-party ETL tools (Scribe, Stoneridge, Kingswaysoft) suit complex transformations or migrations from Dynamics NAV/GP/AX." },
        { h: "Success by Design: four phases", p: "Initiate (1-2 weeks) covers project charter, stakeholder mapping, high-level scope, and access/environments. Implement (8-16 weeks) covers fit-gap analysis, configuration, data migration prep, and custom development. Prepare (2-4 weeks) covers user acceptance testing, training, data migration dry-run, and performance testing. Operate (go-live and beyond) covers cutover, hypercare support, post-go-live review, and knowledge transfer. Checkpoints — Initiate Review, Solution Blueprint, Mock Go-Live, Go-Live Readiness — happen at each phase gate." },
        { h: "The go-live checklist, by category", p: "Data Migration: master data validated, opening balances posted correctly, open AR/AP reconciled, inventory opening entries costed correctly, historical data isolated. System Configuration: number series set, all Gen. Posting Setup combinations covered, VAT Posting Setup validated, bank accounts configured, workflows tested end-to-end. Users & Security: correct roles assigned, permission sets tested with no super-user in production, data sensitivity labels applied, GDPR reviewed, MFA enforced. Testing & Training: UAT sign-off obtained, end-to-end O2C and P2P tested in a production sandbox, month-end dry run completed, all roles trained, support escalation documented." },
        { h: "Why this lesson leans thinner on hands-on detail", p: "Compared to the process-flow lessons in this series, this material sits closer to project-management reference than day-to-day functional use — it's the checklist a consultant consults during an implementation's structured phases, not something reached for mid-transaction the way a filter expression or a posting-group fix is." }
      ],
      why: "A go-live that skips items on this checklist doesn't fail visibly during testing — it fails in front of real users on day one, in production, which is the single most expensive time and place for a gap like an untested Gen. Posting Setup combination to surface.",
      check: { q: "According to Success by Design, roughly how long does the Implement phase run, and what four activities happen during it?", a: "8–16 weeks, covering fit-gap analysis, configuration, data migration prep, and custom development." }
    },
    {
      id: "flow-18-advanced-modules", group: "consultant", n: "18", title: "Advanced modules quick reference: Manufacturing & Service",
      dur: "10 min read",
      summary: "One-slide-each overview of the two Premium-license modules — no setup or configuration detail exists in this source material behind either.",
      concepts: [
        { h: "Manufacturing: Premium license required", p: "Manufacturing handles Bills of Materials, production routing, machine and work centers, and MRP planning, driving production orders from demand. Roles: Production Planner, Shop Floor Operator, Inventory, Finance. Flow: Sales Demand → MRP Run → Production Order → Release & Pick → Output Journal → Post & Close. Documents: Production BOM, Routing, Production Order, Production Journal, Capacity Ledger Entry, Item Ledger Entry." },
        { h: "Manufacturing tips", p: "Standard Costing is the recommended costing method for manufactured items — consistent with the earlier point that Standard suits manufacturing generally. MRP is run through 'Calculate Regenerative Plan' in the Planning Worksheet. Critically, this entire module requires a Premium BC license — it isn't available on Essentials." },
        { h: "Service Management: field service and contracts", p: "Service Management handles field service, repair-shop workflows, and recurring maintenance contracts, fully integrated with inventory (for spare parts) and finance (for billing). Roles: Service Manager, Service Tech, Dispatcher, Finance. Flow: Service Contract → Service Order → Dispatch Tech → Record Labor/Parts → Close Order → Post Invoice. Documents: Service Contract, Service Order, Service Item, Resource Ledger Entry, Service Invoice, Service Ledger Entry." },
        { h: "Service Management tips, and the honest gap", p: "Service Items track individual serialized equipment with a full service history, and Contracts auto-create renewal invoices on expiry. **[expand later]** — for both modules, the source material provides exactly one process-flow slide each; there is no setup or configuration walkthrough behind either overview in this deck, so treat this lesson as a map of what exists, not a how-to-configure-it guide." }
      ],
      why: "Knowing that Manufacturing is Premium-only, at a glance, prevents a consultant from scoping a BOM-and-routing requirement against a client's existing Essentials license and then discovering the licensing gap mid-project.",
      check: { q: "A client on an Essentials license wants BOM and routing-based production orders. What's the first thing to check before anything else?", a: "Whether they're prepared to upgrade to a Premium license — the Manufacturing module, including BOM and routing, is Premium-only and simply isn't available on Essentials, regardless of configuration effort." }
    }
  ]
},

/* ---------------- LAB: SANDBOX LABS ---------------- */
{
  code: "LAB", track: "platform", accent: "lime", noVideo: true,
  title: "Sandbox Labs",
  tagline: "Guided hands-on exercises with sample data — master data, sales, purchasing, inventory, and month-end close.",
  audience: "Functional consultants and juniors with access to a BC sandbox (CRONUS or demo company OK)",
  desc: "Guided hands-on exercises with sample data — master data, sales, purchasing, inventory, and month-end close.",
  groups: [
    { key: "intro", label: "Start here" },
    { key: "master-data", label: "Master data" },
    { key: "o2c", label: "Order to Cash" },
    { key: "p2p", label: "Procure to Pay" },
    { key: "inventory", label: "Inventory & corrections" },
    { key: "finance", label: "Finance close" },
    { key: "capstone", label: "Capstone" }
  ],
  lessons: [
    {
      id: "lab-00-intro", group: "intro", n: "00", title: "How to use Sandbox Labs",
      dur: "10 min", difficulty: "Starter",
      summary: "Sandbox safety, the recommended role, the LAB- naming convention, and how to reset if a lab goes sideways.",
      concepts: [
        { h: "Goal", p: "Know exactly where these labs are safe to run, which role to sign in as, how the LAB- naming convention works, and how to undo a lab that went wrong — before touching lab 01." },
        { h: "Sandbox safety — read this before lab 01", p: "Every lab in this series posts real documents: sales orders, purchase invoices, payments, journal lines. Run them only in a sandbox or demo company — CRONUS International Ltd. is the obvious choice, since it ships with realistic master data and posting groups already configured. Never run these labs against a production company, even 'just to check something quickly.' If your tenant only has one company and you're not certain whether it's a sandbox, stop and ask before lab 01 — this is the one rule in the whole series that isn't recoverable by re-reading a later lab.",
          table: { headers: ["Environment", "OK to run labs here?"], rows: [
            ["CRONUS International Ltd. (or another CRONUS variant)", "Yes — this is what the series is written against"],
            ["A dedicated sandbox / trial tenant", "Yes"],
            ["A partner demo company with real-looking data", "Yes, if you're told it's disposable"],
            ["Any production company", "No — never"]
          ] } },
        { h: "Recommended role", p: "Sign in with a user that has broad functional access — the **Business Manager** or **Accountant** role center covers everything these labs touch (Sales, Purchasing, Inventory, and posting). You don't need SUPER or admin permissions, just a role that isn't restricted to one narrow area. If your sandbox user only sees a stripped-down Role Center, switch roles from **My Settings** before lab 01." },
        { h: "The LAB- naming convention", p: "Every record this series creates — customer, vendor, item, document — starts with the prefix `LAB-`. That's deliberate: it means you can filter any list page (Customers, Vendors, Items, Sales Orders...) on No. `LAB-*` at any point and see exactly what this series has touched, with zero risk of confusing a lab record for a real CRONUS one. Use the consolidated sample data sheet as your copy-paste reference for exact field values across labs 01–04." },
        { h: "How to reset if you get lost", p: "Most labs are additive and don't need a reset — if a step fails, the 'If something fails' section in that lab tells you how to recover in place. If a lab genuinely goes wrong (wrong item quantity posted, wrong customer used), the safest fix is almost never 'undo' — Business Central doesn't have one for posted documents. Instead: post a correcting document (a credit memo, a negative adjustment) rather than trying to delete history. If an unposted document (a quote, an unposted order) is simply wrong, delete it and start that lab's Steps section over — unposted documents are the one thing in this series that's safe to throw away." }
      ],
      why: "Every lab after this one assumes you've read this once. Skipping it is how someone ends up running lab 05 against a production tenant, or spending twenty minutes hunting for a customer they definitely created but can't remember the exact No. of.",
      check: { q: "You're not sure whether the company you're signed into is a real sandbox or accidentally production. What's the right move?", a: "Stop before running any lab and confirm with someone who knows the environment. These labs post real, hard-to-reverse documents — the cost of asking first is one delayed lab; the cost of guessing wrong is real data in a real company." }
    },
    {
      id: "lab-01-customer", group: "master-data", n: "01", title: "Customer master — LAB-C001",
      dur: "25 min", difficulty: "Starter",
      summary: "Create a customer from scratch: posting groups, payment terms, credit limit, and an optional ship-to address.",
      concepts: [
        { h: "Goal", p: "Create customer LAB-C001 with valid posting groups, payment terms, and a credit limit, so it's ready to receive a sales order in lab 05." },
        { h: "Prerequisites", p: "Lab 00 read (sandbox confirmed, role set). No previous lab required. Any functional or admin role in a CRONUS-type sandbox." },
        { h: "Sample data", p: "Create new — use these exact values.",
          table: { headers: ["Field", "Value"], rows: [
            ["No.", "LAB-C001"],
            ["Name", "Lab Consulting Customer 001"],
            ["Customer Posting Group", "An existing domestic group, e.g. DOMESTIC"],
            ["Gen. Bus. Posting Group", "Same domestic group as above"],
            ["Payment Terms Code", "30 DAYS (or your CRONUS's net-30 equivalent)"],
            ["Credit Limit (LCY)", "5000"],
            ["Ship-to Address", "Optional — leave blank unless practicing multi-address setups"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Customers**, then select **New**."],
            ["2", "In the No. field, type `LAB-C001` (if No. is greyed out / auto-filled, clear the No. Series default and type it manually, or accept the series and rename after)."],
            ["3", "Set Name to `Lab Consulting Customer 001`."],
            ["4", "Open the **Invoicing** FastTab. Set Customer Posting Group and Gen. Bus. Posting Group to the same existing domestic group (don't create a new one — see lab 04)."],
            ["5", "Set Payment Terms Code to `30 DAYS` (or your sandbox's equivalent)."],
            ["6", "Open the **General** FastTab (or Credit tab, version-dependent). Set Credit Limit (LCY) to `5000`."],
            ["7", "Optional: add a Ship-to Address from the Customer card's related actions if you want to practice multi-address sales orders later."],
            ["8", "Select **Save**, or simply navigate away — Business Central autosaves the card."]
          ] } },
        { h: "Expected result", p: "Customer LAB-C001 exists, opens without an error banner, and its Invoicing FastTab shows both posting groups populated (not blank)." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Customers list, filtered on LAB-*, shows exactly one row: LAB-C001"],
            ["Customer Posting Group and Gen. Bus. Posting Group are both non-blank"],
            ["Payment Terms Code shows 30 DAYS (or equivalent) on the card"],
            ["Credit Limit (LCY) shows 5000"],
            ["No error or warning banner appears at the top of the card"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["\"You must specify ... Customer Posting Group\" appears later, on a sales order", "Go back to the Customer card's Invoicing tab and set it — it's silently allowed to stay blank at customer-creation time, but nothing posts without it."],
            ["No. field won't accept LAB-C001 (already numbered by a series)", "Check the No. Series setup on the Customers page (gear icon → No. Series), or accept the auto-number and manually overwrite it if your sandbox allows manual entry."],
            ["\"The Payment Terms Code ... does not exist\"", "Your CRONUS variant may use a different code (e.g. N30, 1M(8D)). Open Payment Terms (Tell Me) and pick whichever existing code is closest to net-30."]
          ] } }
      ],
      why: "A customer card built with the Invoicing tab skipped compiles fine and looks fine — right up until the first sales order tries to post and BC can't find a Receivables account. Getting posting groups right at creation time is the entire point of this lab; everything else on the card is secondary.",
      check: { q: "Why does this lab insist on using an *existing* posting group rather than creating a new one?", a: "A brand-new posting group has no G/L account mapping behind it yet — using one would make lab 06's sales invoice fail to post with a missing-account error that has nothing to do with the customer itself. Reusing a posting group CRONUS already configured guarantees the accounts exist." }
    },
    {
      id: "lab-02-vendor", group: "master-data", n: "02", title: "Vendor master — LAB-V001",
      dur: "20 min", difficulty: "Starter",
      summary: "Create a vendor from scratch, mirroring lab 01 on the payables side: posting groups and payment terms.",
      concepts: [
        { h: "Goal", p: "Create vendor LAB-V001 with valid posting groups and payment terms, ready for a purchase order in lab 08." },
        { h: "Prerequisites", p: "Lab 00 read. Lab 01 not required (independent record) but recommended first since it establishes the pattern." },
        { h: "Sample data", p: "Create new — use these exact values.",
          table: { headers: ["Field", "Value"], rows: [
            ["No.", "LAB-V001"],
            ["Name", "Lab Sandbox Vendor 001"],
            ["Vendor Posting Group", "An existing domestic group, e.g. DOMESTIC"],
            ["Gen. Bus. Posting Group", "Same domestic group as above"],
            ["Payment Terms Code", "30 DAYS (or your CRONUS's equivalent)"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Vendors**, then select **New**."],
            ["2", "Set No. to `LAB-V001` (same manual-entry note as lab 01 if a No. Series intervenes)."],
            ["3", "Set Name to `Lab Sandbox Vendor 001`."],
            ["4", "Open the **Invoicing** FastTab. Set Vendor Posting Group and Gen. Bus. Posting Group to the same existing domestic group."],
            ["5", "Set Payment Terms Code to `30 DAYS`."],
            ["6", "Save / navigate away."]
          ] } },
        { h: "Expected result", p: "Vendor LAB-V001 exists with both posting groups populated and no error banner." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Vendors list filtered on LAB-* shows exactly one row: LAB-V001"],
            ["Vendor Posting Group and Gen. Bus. Posting Group are both non-blank"],
            ["Payment Terms Code shows 30 DAYS on the card"],
            ["No error banner on the card"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["\"You must specify ... Vendor Posting Group\" on a later purchase document", "Return to the Vendor card's Invoicing tab and set it — same silent-gap issue as lab 01."],
            ["Vendor No. collides with an existing CRONUS vendor", "CRONUS vendor numbers don't use the LAB- prefix, so this shouldn't happen — double-check you typed LAB-V001 exactly, not a default-series number."]
          ] } }
      ],
      why: "Procure to Pay in lab 08 needs a vendor that can actually receive a purchase order and post an invoice — same failure mode as lab 01 if posting groups are skipped.",
      check: { q: "What's the payables-side equivalent of the Customer Posting Group?", a: "Vendor Posting Group — it determines the Payables G/L account the same way Customer Posting Group determines the Receivables account." }
    },
    {
      id: "lab-03-item", group: "master-data", n: "03", title: "Item master — LAB-I001",
      dur: "25 min", difficulty: "Starter",
      summary: "Create an inventory item with a base unit of measure, costing method, posting groups, and both a unit cost and unit price.",
      concepts: [
        { h: "Goal", p: "Create item LAB-I001 as a fully sellable, purchasable, stock-tracked item ready for both the O2C and P2P labs." },
        { h: "Prerequisites", p: "Lab 00 read. No other lab required." },
        { h: "Sample data", p: "Create new — use these exact values.",
          table: { headers: ["Field", "Value"], rows: [
            ["No.", "LAB-I001"],
            ["Description", "Lab Sandbox Widget"],
            ["Type", "Inventory"],
            ["Base Unit of Measure", "PCS"],
            ["Costing Method", "FIFO"],
            ["Inventory Posting Group", "An existing group, e.g. RETAIL or MISC"],
            ["Gen. Prod. Posting Group", "An existing group matching the above"],
            ["Unit Cost", "50"],
            ["Unit Price", "100"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Items**, then select **New**."],
            ["2", "Set No. to `LAB-I001` and Description to `Lab Sandbox Widget`."],
            ["3", "Confirm Type is `Inventory` (this is the default for most CRONUS item templates — verify, don't assume)."],
            ["4", "Set Base Unit of Measure to `PCS`."],
            ["5", "Open the **Costing** FastTab (or Replenishment, version-dependent). Set Costing Method to `FIFO`."],
            ["6", "Open the **Posting** FastTab. Set Inventory Posting Group and Gen. Prod. Posting Group to existing groups already used on similar items."],
            ["7", "Set Unit Cost to `50` and Unit Price to `100` on the Invoicing / Price FastTab."],
            ["8", "Save / navigate away."]
          ] } },
        { h: "Expected result", p: "Item LAB-I001 exists, is type Inventory, and shows Unit Cost 50 / Unit Price 100 with both posting groups populated." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Items list filtered on LAB-* shows exactly one row: LAB-I001"],
            ["Type = Inventory, Base Unit of Measure = PCS"],
            ["Costing Method = FIFO"],
            ["Inventory Posting Group and Gen. Prod. Posting Group are both non-blank"],
            ["Unit Cost = 50, Unit Price = 100"],
            ["Item card shows no error banner"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["\"Inventory Posting Group must have a value\" on a later purchase receipt", "Return to the item card's Posting tab — same silent-gap pattern as labs 01–02."],
            ["Costing Method field is locked / greyed out", "It locks after the item's first transaction. If this happens, you're editing an item that already has ledger entries — you likely reused an existing CRONUS item by mistake instead of creating LAB-I001 fresh."]
          ] } }
      ],
      why: "Costing method is the one field on this card that can't be changed later without consequence — decide it now, deliberately, not by accepting whatever the default happens to be.",
      check: { q: "You realize after lab 09 that LAB-I001 should have used Average costing instead of FIFO. Can you just change it?", a: "No — Costing Method locks the moment the item has posted transactions. The realistic fix is creating a new item with the right costing method and using that going forward, not editing this one." }
    },
    {
      id: "lab-04-posting-groups", group: "master-data", n: "04", title: "Posting groups sanity check",
      dur: "20 min", difficulty: "Starter",
      summary: "A read-only detective lab: verify the posting-group setup behind LAB-C001, LAB-V001, and LAB-I001 actually has G/L accounts mapped, before trusting it in labs 05–10.",
      concepts: [
        { h: "Goal", p: "Confirm that every posting group used by LAB-C001, LAB-V001, and LAB-I001 has a real G/L account behind it, without posting anything." },
        { h: "Prerequisites", p: "Labs 01, 02, and 03 completed." },
        { h: "Sample data", p: "None created in this lab — it only reads what labs 01–03 already set up.",
          table: { headers: ["Record", "What to look up"], rows: [
            ["LAB-C001", "Its Customer Posting Group and Gen. Bus. Posting Group"],
            ["LAB-V001", "Its Vendor Posting Group and Gen. Bus. Posting Group"],
            ["LAB-I001", "Its Inventory Posting Group and Gen. Prod. Posting Group"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "Open LAB-C001's Customer card, note its Customer Posting Group and Gen. Bus. Posting Group values."],
            ["2", "**Tell Me → Customer Posting Groups**. Find the group from step 1, confirm the Receivables Account column has a real G/L account number, not blank."],
            ["3", "**Tell Me → General Posting Setup**. Scan for the Gen. Bus. Posting Group from step 1 combined with LAB-I001's Gen. Prod. Posting Group. Confirm a row exists with Sales Account and COGS Account both populated."],
            ["4", "Open LAB-V001's Vendor card, note its Vendor Posting Group."],
            ["5", "**Tell Me → Vendor Posting Groups**. Confirm the Payables Account column is populated for that group."],
            ["6", "Open LAB-I001's Item card, note its Inventory Posting Group."],
            ["7", "**Tell Me → Inventory Posting Setup**. Confirm a row exists for that group with Inventory Account populated."],
            ["8", "**Tell Me → VAT Posting Setup**. Confirm at least one row exists combining a VAT Business Posting Group and VAT Product Posting Group with both Sales VAT Account and Purchase VAT Account populated."]
          ] } },
        { h: "Expected result", p: "Every posting-group combination touched by LAB-C001, LAB-V001, and LAB-I001 has a real G/L account mapped — no blanks in the Account columns you checked." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Customer Posting Groups: Receivables Account populated for LAB-C001's group"],
            ["General Posting Setup: a row exists for LAB-C001 × LAB-I001's group combination, Sales Account and COGS Account both populated"],
            ["Vendor Posting Groups: Payables Account populated for LAB-V001's group"],
            ["Inventory Posting Setup: Inventory Account populated for LAB-I001's group"],
            ["VAT Posting Setup: at least one fully-mapped combination exists"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["A Receivables/Payables/Inventory Account column is blank", "Don't fix it yourself in a shared sandbox — that's a setup decision, not a lab exercise. Pick a different existing group for labs 01–03, or flag it to whoever owns the sandbox."],
            ["No row exists in General Posting Setup for the combination you need", "Pick a Gen. Bus. Posting Group / Gen. Prod. Posting Group pair that CRONUS already has a complete row for, rather than assuming one exists."]
          ] } }
      ],
      why: "This lesson exists because it catches the single highest-frequency real-world BC support ticket — a posting group that looks fine on a card but has no G/L account mapped underneath it — before labs 05–10 try to post real documents.",
      check: { q: "This lab doesn't post anything, so why does it matter?", a: "Because it catches exactly the failure mode labs 01–03 can't see for themselves — a posting group that's set on a card but has no G/L account behind it. Finding that gap here turns a confusing runtime error later into a five-minute setup check now." }
    },
    {
      id: "lab-05-quote-order", group: "o2c", n: "05", title: "Sales quote → order",
      dur: "25 min", difficulty: "Starter",
      summary: "Create a sales quote for LAB-C001 and LAB-I001, then convert it into a sales order — the first two documents in the Order to Cash chain.",
      concepts: [
        { h: "Goal", p: "Produce a sales order for LAB-C001, 5 units of LAB-I001, converted from a quote rather than created directly." },
        { h: "Prerequisites", p: "Labs 01, 03, and 04 completed. Sales Order Processor or equivalent role." },
        { h: "Sample data", p: "No new master data — reuses LAB-C001 and LAB-I001.",
          table: { headers: ["Field", "Value"], rows: [
            ["Sell-to Customer No.", "LAB-C001"],
            ["Item No.", "LAB-I001"],
            ["Quantity", "5"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Sales Quotes**, then select **New**."],
            ["2", "Set Sell-to Customer No. to `LAB-C001`. Confirm Name auto-fills."],
            ["3", "On the Lines FastTab, add a line: Type `Item`, No. `LAB-I001`, Quantity `5`."],
            ["4", "Confirm Unit Price on the line shows 100 (from LAB-I001's card) — don't override it manually."],
            ["5", "From the ribbon / actions, select **Make Order** (sometimes Convert to Order — Valider en commande in French UI)."],
            ["6", "Confirm the conversion when prompted. Business Central opens the new Sales Order automatically."],
            ["7", "On the resulting Sales Order, confirm Sell-to Customer, the line for LAB-I001, and Quantity 5 all carried over unchanged."]
          ] } },
        { h: "Expected result", p: "A Sales Order exists for LAB-C001 with one line for LAB-I001, Quantity 5, Unit Price 100 — and the originating quote no longer appears in the open Sales Quotes list." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Sales Orders list shows a new order for LAB-C001"],
            ["The order's line shows LAB-I001, Quantity 5, Unit Price 100"],
            ["Sales Quotes list no longer shows the original quote"],
            ["Order Status (top of the card) shows Open, not yet released"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["\"Make Order\" action is missing from the ribbon", "You may be viewing the quote in a simplified/read-only view — open it from the Sales Quotes list directly rather than a related-records link."],
            ["Unit Price shows 0 or blank on the line", "LAB-I001's Unit Price wasn't saved in lab 03 — go back and confirm it, then re-add the line."],
            ["Customer or item can't be found by typing LAB-C001 / LAB-I001", "Confirm labs 01 and 03 actually saved — reopen the Customers / Items list filtered on LAB-* to check."]
          ] } }
      ],
      why: "A quote and an order are separate document types with separate posting behavior (a quote never posts; an order does, eventually). Converting one into the other, deliberately, is what shows that BC treats them as a lifecycle rather than two unrelated screens.",
      check: { q: "After Make Order runs, where did the original sales quote go?", a: "It's consumed by the conversion — Business Central doesn't keep both a quote and an order for the same sale. The quote no longer appears in the open Sales Quotes list once the order exists." }
    },
    {
      id: "lab-06-ship-invoice", group: "o2c", n: "06", title: "Ship and invoice",
      dur: "30 min", difficulty: "Intermediate",
      summary: "Release the sales order from lab 05, post the shipment, then post the sales invoice — the two postings that actually move inventory and hit the G/L.",
      concepts: [
        { h: "Goal", p: "Post the shipment and the invoice for lab 05's sales order, and confirm both a G/L entry and an item ledger entry exist afterward." },
        { h: "Prerequisites", p: "Lab 05 completed (an open, unreleased Sales Order exists for LAB-C001)." },
        { h: "Sample data", p: "None new — continues the sales order from lab 05.",
          table: { headers: ["Field", "Value"], rows: [["Document", "The Sales Order created in lab 05"]] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "Open the Sales Order from lab 05 (**Tell Me → Sales Orders**, filter on LAB-C001)."],
            ["2", "From the ribbon, select **Release** (this exposes the order to shipping/warehouse processing)."],
            ["3", "Select **Post** (Valider in French UI). Choose **Ship** in the posting dialog, not Ship and Invoice, so you post the two steps separately."],
            ["4", "Confirm the posting succeeds — a message should confirm the shipment posted, and the order remains open (invoice still pending)."],
            ["5", "With the order still open, select **Post** again, this time choosing **Invoice**."],
            ["6", "Confirm the posting succeeds. The Sales Order should now disappear from the open list (fully posted)."],
            ["7", "**Tell Me → Posted Sales Invoices**, find the new invoice for LAB-C001, and open it."]
          ] } },
        { h: "Expected result", p: "A Posted Sales Shipment and a Posted Sales Invoice both exist for LAB-C001, and LAB-I001's on-hand quantity has decreased by 5." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Posted Sales Shipments shows one new entry for LAB-C001"],
            ["Posted Sales Invoices shows one new entry for LAB-C001, Amount 500 (5 × 100) before VAT"],
            ["LAB-I001's Item card, Inventory field, dropped by 5 from before lab 06"],
            ["From the Posted Sales Invoice, Navigate (Ctrl+Alt+F9) shows both a G/L Entry and an Item Ledger Entry"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["\"G/L account ... does not exist\" or \"has not been set up\" on posting", "Go back to lab 04 — a posting group used by LAB-C001 or LAB-I001 has a gap. Fix the underlying setup, don't try to force the post."],
            ["\"There is nothing to post\"", "The order may already be shipped or invoiced from a previous attempt — check Posted Sales Shipments / Invoices before re-running the step."],
            ["Item's on-hand quantity didn't change after shipping", "You may have posted the invoice-only step by mistake — confirm both postings happened, in order."]
          ] } }
      ],
      why: "This is the lab where every posting-group decision from labs 01–04 gets tested for real. If anything in that chain was wrong, this is where it surfaces — as a posting error, not a vague one.",
      check: { q: "Why post Ship and Invoice as two separate steps in this lab instead of one combined 'Ship and Invoice' posting?", a: "So you can see and verify each posting's effect independently — the shipment is what moves inventory and creates the item ledger entry, the invoice is what creates the G/L receivable and revenue entries. Combining them in real use is fine; separating them here makes the O2C mechanics visible." }
    },
    {
      id: "lab-07-customer-payment", group: "o2c", n: "07", title: "Customer payment",
      dur: "20 min", difficulty: "Starter",
      summary: "Record and post a customer payment against lab 06's invoice using a payment journal, and confirm the invoice's ledger entry closes.",
      concepts: [
        { h: "Goal", p: "Post a payment from LAB-C001 that fully applies to and closes lab 06's sales invoice." },
        { h: "Prerequisites", p: "Lab 06 completed (a posted, open sales invoice exists for LAB-C001)." },
        { h: "Sample data", p: "",
          table: { headers: ["Field", "Value"], rows: [
            ["Journal", "Payment Journals (a GENERAL or CASH batch — whichever your sandbox has)"],
            ["Account Type", "Customer"],
            ["Account No.", "LAB-C001"],
            ["Amount", "Match the invoice total exactly"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Payment Journals**."],
            ["2", "Select an existing batch (or create one) and open it."],
            ["3", "Add a new line: Posting Date today, Document Type `Payment`, Account Type `Customer`, Account No. `LAB-C001`."],
            ["4", "Enter the Amount matching lab 06's invoice total exactly (check the sign convention your journal uses)."],
            ["5", "Use **Apply Entries** on the line to open the customer's open ledger entries."],
            ["6", "Select lab 06's invoice, confirm the applied amount matches, and close the Apply Entries screen."],
            ["7", "Select **Post** (Valider). Confirm the journal line posts successfully."]
          ] } },
        { h: "Expected result", p: "LAB-C001 no longer shows lab 06's invoice as an open entry — it's fully applied and closed by the payment." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Customer Ledger Entries for LAB-C001 shows the invoice with Remaining Amount = 0"],
            ["The same view shows a new Payment entry, also fully applied"],
            ["LAB-C001's Customer card Balance field reflects the payment (back to 0, if this was the only open transaction)"],
            ["Payment Journal is empty again after posting (line consumed)"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["Invoice still shows a Remaining Amount after posting", "The applied amount didn't match the full invoice total — reopen Customer Ledger Entries, use Apply Entries again, and post a second small payment line to close it out."],
            ["\"Bal. Account No. must have a value\" on posting", "Your journal batch needs a balancing account (a bank account, typically) — check the batch's Bal. Account Type / No. setup."],
            ["Can't find the invoice under Apply Entries", "Confirm you selected Account No. LAB-C001 exactly — a typo shows a different (or empty) set of open entries."]
          ] } }
      ],
      why: "This is the step that closes the O2C loop — without it, LAB-C001 shows a permanently open, overdue invoice, which is exactly the kind of loose end that makes a sandbox confusing to reuse later.",
      check: { q: "What does 'Apply Entries' actually do, mechanically, when you post the payment?", a: "It links the payment's ledger entry to the invoice's ledger entry so both are marked closed once the applied amounts net to zero — it's what turns 'a payment exists' and 'an invoice exists' into 'this invoice is paid.'" }
    },
    {
      id: "lab-08-purchase-order", group: "p2p", n: "08", title: "Purchase order — LAB-V001 / LAB-I001",
      dur: "20 min", difficulty: "Starter",
      summary: "Create a purchase order to LAB-V001 for a quantity of LAB-I001 large enough to meaningfully increase stock.",
      concepts: [
        { h: "Goal", p: "Produce a purchase order to LAB-V001 for 20 units of LAB-I001, ready to receive in lab 09." },
        { h: "Prerequisites", p: "Labs 02, 03, and 04 completed." },
        { h: "Sample data", p: "",
          table: { headers: ["Field", "Value"], rows: [
            ["Buy-from Vendor No.", "LAB-V001"],
            ["Item No.", "LAB-I001"],
            ["Quantity", "20"],
            ["Direct Unit Cost", "50 (should auto-fill from LAB-I001's card)"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Purchase Orders**, then select **New**."],
            ["2", "Set Buy-from Vendor No. to `LAB-V001`. Confirm Name auto-fills."],
            ["3", "On the Lines FastTab, add a line: Type `Item`, No. `LAB-I001`, Quantity `20`."],
            ["4", "Confirm Direct Unit Cost shows 50 from LAB-I001's card."],
            ["5", "From the ribbon, select **Release**."],
            ["6", "Save / leave the order open — receiving happens in lab 09."]
          ] } },
        { h: "Expected result", p: "A released Purchase Order exists for LAB-V001, one line for LAB-I001, Quantity 20, not yet received or invoiced." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Purchase Orders list shows the new order for LAB-V001"],
            ["Status shows Released"],
            ["Line shows LAB-I001, Quantity 20, Direct Unit Cost 50"],
            ["LAB-I001's on-hand quantity is unchanged so far (nothing posted yet)"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["Direct Unit Cost shows 0", "LAB-I001's Unit Cost wasn't saved in lab 03 — verify the item card, then re-enter the line."],
            ["Release fails with a posting-group error", "Return to lab 04 — a gap exists in Vendor Posting Groups or General Posting Setup for LAB-V001's group."]
          ] } }
      ],
      why: "P2P is the mirror of O2C — same posting-group discipline, same release-before-processing pattern, opposite direction. This lab exists to make that symmetry obvious, not to teach a new mechanic.",
      check: { q: "Why release the purchase order in this lab even though nothing posts yet?", a: "Release is what exposes the order to receiving — the same mechanical reason a sales order gets released before warehouse processing in lab 06. An unreleased purchase order is still just a draft as far as receiving is concerned." }
    },
    {
      id: "lab-09-receive-invoice", group: "p2p", n: "09", title: "Receive and invoice",
      dur: "25 min", difficulty: "Intermediate",
      summary: "Post the receipt and the purchase invoice for lab 08's order, and watch LAB-I001's on-hand quantity increase for the first time in this series.",
      concepts: [
        { h: "Goal", p: "Post the receipt and invoice for lab 08's purchase order, increasing LAB-I001's on-hand quantity by 20." },
        { h: "Prerequisites", p: "Lab 08 completed (a released, open purchase order exists)." },
        { h: "Sample data", p: "None new — continues lab 08's purchase order.",
          table: { headers: ["Field", "Value"], rows: [["Document", "The Purchase Order from lab 08"]] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "Open the Purchase Order from lab 08."],
            ["2", "Select **Post** (Valider). Choose **Receive** in the posting dialog."],
            ["3", "Confirm the posting succeeds — a Posted Purchase Receipt is created, the order remains open (invoice pending)."],
            ["4", "Note LAB-I001's on-hand quantity — open the Item card and confirm it increased by 20."],
            ["5", "Back on the still-open Purchase Order, select **Post** again, choosing **Invoice**."],
            ["6", "Confirm the posting succeeds. The Purchase Order should disappear from the open list."]
          ] } },
        { h: "Expected result", p: "A Posted Purchase Receipt and a Posted Purchase Invoice both exist for LAB-V001, and LAB-I001's on-hand quantity is 20 higher than before lab 09." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Posted Purchase Receipts shows a new entry for LAB-V001"],
            ["Posted Purchase Invoices shows a new entry for LAB-V001, Amount 1000 (20 × 50) before VAT"],
            ["LAB-I001's Item card Inventory field increased by 20 versus its value before this lab"],
            ["From the Posted Purchase Invoice, Navigate (Ctrl+Alt+F9) shows both a G/L Entry and an Item Ledger Entry"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["Inventory didn't increase after receiving", "Confirm the receipt actually posted (check Posted Purchase Receipts) rather than the invoice-only step being run by mistake."],
            ["\"G/L account ... has not been set up\" on invoice posting", "Same posting-group gap pattern as earlier labs — recheck lab 04's findings for LAB-V001's group specifically."]
          ] } }
      ],
      why: "Every lab up to this point has been setup or draft documents. This is the first posting that actually creates stock — it's worth watching the quantity move, not just trusting that it did.",
      check: { q: "At what point in this lab did LAB-I001's on-hand quantity actually increase — receiving or invoicing?", a: "Receiving. The purchase invoice affects cost and the payable to the vendor; it's the receipt that moves physical (and system) inventory. This mirrors lab 06, where the shipment — not the invoice — is what moved inventory out." }
    },
    {
      id: "lab-10-vendor-payment", group: "p2p", n: "10", title: "Vendor payment",
      dur: "20 min", difficulty: "Starter",
      summary: "Record and post a payment to LAB-V001 against lab 09's invoice, closing the P2P loop the same way lab 07 closed O2C.",
      concepts: [
        { h: "Goal", p: "Post a payment to LAB-V001 that fully applies to and closes lab 09's purchase invoice." },
        { h: "Prerequisites", p: "Lab 09 completed. Lab 07 recommended first — this lab assumes the payment-journal mechanic is already familiar." },
        { h: "Sample data", p: "",
          table: { headers: ["Field", "Value"], rows: [
            ["Journal", "Payment Journals"],
            ["Account Type", "Vendor"],
            ["Account No.", "LAB-V001"],
            ["Amount", "Match lab 09's invoice total exactly"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Payment Journals**."],
            ["2", "Open the same batch used in lab 07 (or another available one)."],
            ["3", "Add a new line: Posting Date today, Document Type `Payment`, Account Type `Vendor`, Account No. `LAB-V001`."],
            ["4", "Enter the Amount matching lab 09's invoice total, respecting the vendor-line sign convention (often opposite the customer case in lab 07)."],
            ["5", "Use **Apply Entries** to select lab 09's purchase invoice, confirm the amount matches."],
            ["6", "Select **Post** (Valider)."]
          ] } },
        { h: "Expected result", p: "LAB-V001 no longer shows lab 09's invoice as an open entry." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Vendor Ledger Entries for LAB-V001 shows the invoice with Remaining Amount = 0"],
            ["A new Payment entry appears, also fully applied"],
            ["LAB-V001's Vendor card Balance field returns to 0 (if this was the only open transaction)"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["Invoice still shows a Remaining Amount", "Same fix as lab 07 — reapply the leftover balance and post a second line if needed."],
            ["Sign of the Amount looks backwards versus lab 07", "Expected — customer and vendor lines in the same journal often use opposite signs by convention. Trust Apply Entries' preview over guessing the sign yourself."]
          ] } }
      ],
      why: "Same mechanic as lab 07, opposite direction — the repetition is intentional. If the customer-payment pattern from lab 07 didn't fully land, this is the second, structurally identical chance to see it.",
      check: { q: "Structurally, how does this lab differ from lab 07?", a: "It doesn't — same payment-journal mechanic, same Apply Entries step, same posting action, just Account Type Vendor instead of Customer. P2P and O2C settle the same way in Business Central; only the direction of money changes." }
    },
    {
      id: "lab-11-stock-overview", group: "inventory", n: "11", title: "Stock overview",
      dur: "20 min", difficulty: "Starter",
      summary: "A read-only lab: trace LAB-I001's current on-hand quantity back through its item ledger entries and value entries from labs 06 and 09.",
      concepts: [
        { h: "Goal", p: "Read LAB-I001's current on-hand quantity and reconcile it against its item ledger entries: -5 from lab 06, +20 from lab 09." },
        { h: "Prerequisites", p: "Labs 06 and 09 completed." },
        { h: "Sample data", p: "None created — read-only lab.",
          table: { headers: ["Item", "Expected net movement"], rows: [["LAB-I001", "-5 (lab 06 shipment) + 20 (lab 09 receipt) = +15 net"]] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Items**, open LAB-I001."],
            ["2", "Note the Inventory field value on the card."],
            ["3", "From the item card's related actions, open **Item Ledger Entries** (or **Tell Me → Item Ledger Entries** filtered on Item No. LAB-I001)."],
            ["4", "Confirm two entries exist: a negative-quantity Sale entry (from lab 06) and a positive-quantity Purchase entry (from lab 09)."],
            ["5", "Sum the Quantity column — it should equal the on-hand figure from step 2."],
            ["6", "From either ledger entry, open **Value Entries** (related action) to see the cost side: Cost Amount (Actual) for each entry."]
          ] } },
        { h: "Expected result", p: "LAB-I001 shows on-hand quantity of 15 (assuming no other labs touched it), and the item ledger entries sum to exactly that." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Item Ledger Entries for LAB-I001 shows exactly two entries (one Sale, one Purchase) at this point"],
            ["Quantities are -5 and +20 respectively"],
            ["The sum matches the Item card's Inventory field"],
            ["Value Entries show a Cost Amount (Actual) on both — nothing is uncosted"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["On-hand quantity doesn't match the ledger sum", "A posting from lab 06 or 09 may not have completed — recheck Posted Sales Shipments and Posted Purchase Receipts for LAB-I001."],
            ["More than two ledger entries exist", "You may have re-run lab 06 or 09 rather than proceeding — not harmful, just recalculate the expected total from however many entries actually exist."]
          ] } }
      ],
      why: "By this point LAB-I001 has both a shipment (out, lab 06) and a receipt (in, lab 09) behind it. This lab is where those two postings stop being abstract and become two rows you can actually point at.",
      check: { q: "Which BC concept explains why the on-hand quantity always equals the sum of item ledger entries, with no separate 'current stock' number stored anywhere?", a: "Item Ledger Entry is the permanent, append-only transaction record — on-hand quantity is always derived by summing it, not stored independently. That's why FlowFields and SumIndexFields exist: to make that summing fast without ever risking it drifting out of sync." }
    },
    {
      id: "lab-12-adjustment", group: "inventory", n: "12", title: "Positive/negative adjustment",
      dur: "20 min", difficulty: "Intermediate",
      summary: "Post a positive and a negative item journal adjustment against LAB-I001, each with a reason code, and verify both in the ledger.",
      concepts: [
        { h: "Goal", p: "Post one positive and one negative adjustment against LAB-I001 through an item journal, each with a reason, and confirm both in Item Ledger Entries." },
        { h: "Prerequisites", p: "Lab 11 completed (so you know LAB-I001's current on-hand quantity before adjusting it)." },
        { h: "Sample data", p: "",
          table: { headers: ["Field", "Value"], rows: [
            ["Journal", "Item Journals (a default or PHYS. INVT. batch)"],
            ["Item No.", "LAB-I001"],
            ["Entry Type", "Positive Adjmt. (line 1), Negative Adjmt. (line 2)"],
            ["Quantity", "10 (positive line), 3 (negative line)"],
            ["Reason Code", "Any existing code, e.g. a count-adjustment or damage reason if your sandbox has one"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Item Journals**."],
            ["2", "Open an existing batch."],
            ["3", "Add line 1: Item No. `LAB-I001`, Entry Type `Positive Adjmt.`, Quantity `10`. Set a Reason Code if available."],
            ["4", "Add line 2: Item No. `LAB-I001`, Entry Type `Negative Adjmt.`, Quantity `3`, same or different Reason Code."],
            ["5", "Select **Post** (Valider). Confirm both lines post without error."],
            ["6", "Open LAB-I001's Item card and confirm the on-hand quantity moved by net +7 versus lab 11's figure."]
          ] } },
        { h: "Expected result", p: "LAB-I001's on-hand quantity is 7 units higher than it was after lab 11, and two new item ledger entries exist with Entry Type Positive Adjmt. and Negative Adjmt." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Item Ledger Entries for LAB-I001 shows a new +10 entry and a new -3 entry"],
            ["Both entries show the reason code you set, if any"],
            ["On-hand quantity increased by exactly 7 net versus before this lab"],
            ["Value Entries show a Cost Amount on both new entries"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["Negative Adjmt. line fails with an insufficient-quantity-style error", "Shouldn't occur here since LAB-I001 has 15+ units on hand from earlier labs — confirm you're adjusting LAB-I001 and not a different item."],
            ["Reason Code field rejects your entry", "Reason codes are optional on most setups — leave it blank if none exists in your sandbox."]
          ] } }
      ],
      why: "Every real BC implementation eventually needs to correct stock outside a normal sale or purchase — a damaged unit, a physical count discrepancy. This is the one lab in the series that isn't O2C or P2P at all.",
      check: { q: "Why does a Positive Adjmt. entry still get a Cost Amount, even though nothing was purchased?", a: "Because inventory value has to reflect reality even when the source is a correction, not a purchase — a positive adjustment is costed at the item's costing-method-determined cost so the G/L stays accurate, not just the quantity." }
    },
    {
      id: "lab-13-gl-dimensions", group: "finance", n: "13", title: "G/L and dimensions glance",
      dur: "20 min", difficulty: "Starter",
      summary: "Use Navigate to trace this series' postings back to their G/L entries, and, if dimensions are configured, see them carried onto those entries.",
      concepts: [
        { h: "Goal", p: "Find the G/L entries created by this series' postings using Navigate, and note any dimensions attached to them." },
        { h: "Prerequisites", p: "Labs 06 and 09 completed (at minimum one sales and one purchase posting exist to trace)." },
        { h: "Sample data", p: "None created — read-only lab.",
          table: { headers: ["Source document", "What to trace"], rows: [["Lab 06's Posted Sales Invoice", "Its G/L Entries"], ["Lab 09's Posted Purchase Invoice", "Its G/L Entries"]] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "Open lab 06's Posted Sales Invoice (**Tell Me → Posted Sales Invoices**, filter LAB-C001)."],
            ["2", "From the ribbon, select **Navigate** (or press Ctrl+Alt+F9)."],
            ["3", "In the Navigate window, note the count next to G/L Entry, then select it to view the actual entries."],
            ["4", "If any line shows a Dimension value (Department, Project, etc.), note which — not every CRONUS sandbox has dimensions configured on these accounts by default."],
            ["5", "Repeat steps 1–4 for lab 09's Posted Purchase Invoice."],
            ["6", "Optionally, **Tell Me → General Ledger Entries** and filter Document No. to browse the same entries directly, without Navigate."]
          ] } },
        { h: "Expected result", p: "Navigate from both posted invoices surfaces their G/L Entries, and each shows balanced debits and credits." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Navigate from the sales invoice shows a G/L Entry count of 2 or more, balanced to zero"],
            ["Navigate from the purchase invoice shows the same"],
            ["General Ledger Entries filtered on either Document No. shows the same rows Navigate found"],
            ["If dimensions exist on the accounts touched, they appear on the G/L Entry lines"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["Navigate shows 0 for G/L Entry", "The document may not actually be posted — confirm you opened it from Posted Sales/Purchase Invoices, not the original (now-consumed) order."],
            ["No dimensions appear anywhere", "Expected if your sandbox doesn't have default dimensions configured — a sandbox-setup fact, not a lab failure. Note it and move on."]
          ] } }
      ],
      why: "Every lab so far has posted from the operational side (sales, purchasing, inventory). This is the one lab that looks at the same activity from Finance's side of the fence — the view a controller actually works from.",
      check: { q: "What does Navigate actually do, mechanically, when you run it from a posted invoice?", a: "It searches every ledger table (G/L, Customer/Vendor, Item, Value Entry, and more) for entries sharing that document's posting date and document number, and lists the counts — a cross-ledger trace, not a single lookup." }
    },
    {
      id: "lab-14-bank-recon", group: "finance", n: "14", title: "Bank reconciliation intro",
      dur: "25 min", difficulty: "Intermediate",
      summary: "Reconcile a bank account using lab 07's or lab 10's payment as the one line to match — a first, simple pass at Bank Acc. Reconciliation.",
      concepts: [
        { h: "Goal", p: "Reconcile one bank account statement line against lab 07's (or lab 10's) posted payment, and close the reconciliation." },
        { h: "Prerequisites", p: "Lab 07 or lab 10 completed, AND a bank account already configured in the sandbox with G/L integration. If neither exists, skip this lab." },
        { h: "Sample data", p: "",
          table: { headers: ["Field", "Value"], rows: [
            ["Bank Account", "Whichever existing bank account your payment journal posted against in lab 07/10"],
            ["Statement Line", "One manually entered line matching that payment's amount and date"]
          ] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Bank Account Reconciliations**."],
            ["2", "Create a new reconciliation for the bank account used by lab 07 or lab 10's payment."],
            ["3", "On the Statement Lines FastTab, add one manual line: Statement Date today, Statement Amount matching the payment exactly."],
            ["4", "Use **Match Automatically** if available, or manually apply the line against the corresponding Bank Account Ledger Entry."],
            ["5", "Confirm the Difference field shows 0 once matched."],
            ["6", "Select **Post** to close the reconciliation, or leave it open for review — note whichever you did."]
          ] } },
        { h: "Expected result", p: "The reconciliation's one statement line matches lab 07/10's payment exactly, with a Difference of 0." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Statement line and bank ledger entry show the same amount and date"],
            ["Difference field reads 0 before posting"],
            ["After posting, the reconciliation no longer appears in the open/unposted list"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["No bank account exists, or the payment journal wasn't linked to one", "Skip this lab — note it rather than forcing a bank account setup that's outside this series' scope. It's explicitly optional for exactly this reason."],
            ["Match Automatically doesn't find the entry", "Match manually instead — select the statement line and the bank ledger entry and apply them directly."]
          ] } }
      ],
      why: "This lab only works if a bank account is already set up as the balancing account behind labs 07/10's payments. If your sandbox doesn't have one, the lab tells you to skip it rather than forcing a fake setup step.",
      check: { q: "Why is this lab explicitly optional, unlike labs 01–13?", a: "Because it depends on a bank account already being configured with G/L integration — something this series deliberately doesn't set up itself, since bank setup varies enormously by sandbox. Skipping cleanly is the correct outcome if that setup isn't there." }
    },
    {
      id: "lab-15-month-end", group: "finance", n: "15", title: "Month-end mini checklist",
      dur: "30 min", difficulty: "Intermediate",
      summary: "Walk this series' own activity through a lightweight month-end sequence: open documents, journals posted, inventory cost adjusted, trial balance glanced at, and — sandbox only — a posting period locked.",
      concepts: [
        { h: "Goal", p: "Confirm no LAB-* documents remain open, run the inventory cost adjustment, glance at a trial balance, and — sandbox only — lock a posting period as practice." },
        { h: "Prerequisites", p: "Labs 05 through 12 completed (so there's real activity to check)." },
        { h: "Sample data", p: "None new — this lab audits and closes out prior labs' activity.",
          table: { headers: ["Check", "Expected state"], rows: [["Sales/Purchase Orders filtered LAB-*", "None open — all posted in labs 06 and 09"], ["Payment Journals", "Empty (lines consumed by posting in labs 07/10)"]] } },
        { h: "Steps", p: "",
          table: { headers: ["#", "Action"], rows: [
            ["1", "**Tell Me → Sales Orders** and **Purchase Orders**, filter both on LAB-*. Confirm neither list shows an open document."],
            ["2", "**Tell Me → Payment Journals**. Confirm no unposted lines remain from labs 07 or 10."],
            ["3", "**Tell Me → Adjust Cost - Item Entries**. Run it (filtered to LAB-I001 if the option exists) to bring inventory valuation current after labs 09 and 12's postings."],
            ["4", "**Tell Me → Trial Balance**. Glance at the accounts touched by this series (Receivables, Payables, Inventory, Sales, COGS) — confirm none look obviously wrong."],
            ["5", "Sandbox only — do not do this in a shared or production-adjacent environment: **Tell Me → Accounting Periods**. Note the current open period, and as practice only, consider setting Allow Posting From on a past period to demonstrate a lock — then immediately revert it."]
          ] } },
        { h: "Expected result", p: "No open LAB-* sales/purchase documents or journal lines remain, the cost adjustment runs without error, and the trial balance shows activity consistent with this series' postings." },
        { h: "Verify", p: "",
          table: { headers: ["Verify"], rows: [
            ["Sales Orders and Purchase Orders filtered LAB-* both show zero open documents"],
            ["Payment Journals show zero unposted lines"],
            ["Adjust Cost - Item Entries completes without an error message"],
            ["Trial Balance shows non-zero, plausible activity on Receivables, Payables, Inventory, Sales, and COGS accounts"],
            ["If you practiced the Accounting Periods step, it was reverted before finishing this lab"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["An open Sales/Purchase Order for LAB-* still exists", "Go back and finish posting it (lab 06 or lab 09) before continuing."],
            ["Adjust Cost - Item Entries errors out", "Usually a sign an item's cost data is inconsistent — re-check LAB-I001's ledger and value entries from lab 11 before re-running."],
            ["You accidentally left a posting period locked", "Reopen Accounting Periods and set Allow Posting From back to an early date immediately — a locked sandbox period blocks every later lab in this series."]
          ] } }
      ],
      why: "Every step in this checklist exists because skipping it in the wrong order, in a real close, produces a specific and traceable problem later. Running it here, on a small and fully understood dataset, is what makes the sequence memorable instead of abstract.",
      check: { q: "Why does this checklist run 'Adjust Cost - Item Entries' before 'glance at the trial balance,' not after?", a: "Because the trial balance reads whatever inventory valuation is currently posted to the G/L — running the cost adjustment first is what makes the numbers on the trial balance actually current." }
    },
    {
      id: "lab-16-capstone", group: "capstone", n: "16", title: "Capstone: full O2C + P2P flow",
      dur: "40 min", difficulty: "Intermediate",
      summary: "One script, start to finish: a new mini customer and item, a full sales cycle, a full purchase cycle, and a verification pass against a written definition of done.",
      concepts: [
        { h: "Goal", p: "Independently run a complete O2C cycle and a complete P2P cycle end to end, using either lab 16's own fresh records or the existing LAB-* set, and verify the result against a written checklist rather than step-by-step guidance." },
        { h: "Prerequisites", p: "All of labs 01–15 completed. This lab intentionally gives less hand-holding than earlier ones." },
        { h: "Sample data", p: "Reuse LAB-C001 / LAB-I001, or create fresh capstone-only records if you want a clean ledger history to inspect.",
          table: { headers: ["Field", "Value"], rows: [
            ["Customer", "LAB-C001 (reuse) or new LAB-C002, same pattern as lab 01"],
            ["Vendor", "LAB-V001 (reuse)"],
            ["Item", "LAB-I001 (reuse) or new LAB-I002, same pattern as lab 03"],
            ["Sales quantity", "8 units"],
            ["Purchase quantity", "15 units"]
          ] } },
        { h: "Steps", p: "This lab is scored against Expected result and the checklist below, not a numbered walkthrough — apply what labs 01–15 already taught.",
          table: { headers: ["Stage", "What to do"], rows: [
            ["1. Master data", "Confirm or create the customer, vendor, and item — verify posting groups the way lab 04 taught, don't just assume."],
            ["2. Sales cycle", "Quote → order → release → ship → invoice → payment, fully closed (labs 05–07's pattern)."],
            ["3. Purchase cycle", "Order → release → receive → invoice → payment, fully closed (labs 08–10's pattern)."],
            ["4. Verify", "Check stock movement (lab 11's pattern) and trace at least one document with Navigate (lab 13's pattern)."]
          ] } },
        { h: "Expected result", p: "Both cycles are fully posted and settled — no open sales or purchase documents, no open payment journal lines, and the item's on-hand quantity reflects both the sale (down) and the purchase (up) correctly." },
        { h: "Verify", p: "This is the capstone's definition of done — every item should be true before you consider the lab finished.",
          table: { headers: ["Definition of done"], rows: [
            ["Customer, vendor, and item all exist with populated posting groups (no blanks)"],
            ["A sales invoice is posted and fully paid — Customer Ledger Entries show 0 remaining"],
            ["A purchase invoice is posted and fully paid — Vendor Ledger Entries show 0 remaining"],
            ["The item's on-hand quantity reflects -8 (sale) and +15 (purchase) correctly, net +7"],
            ["Navigate from at least one posted invoice shows balanced G/L entries"],
            ["No open Sales Orders, Purchase Orders, or Payment Journal lines remain for this lab's records"]
          ] } },
        { h: "If something fails", p: "",
          table: { headers: ["Error / symptom", "Fix"], rows: [
            ["Unsure which lab's instructions to go back to for a specific error", "Match the symptom, not the lab number — a posting-group error always traces back to lab 04's pattern regardless of which stage you're in here."],
            ["Lost track of what's open vs. closed", "Filter every relevant list (Sales Orders, Purchase Orders, Payment Journals, Customer/Vendor Ledger Entries) on LAB-* and read the Status/Remaining Amount columns directly."]
          ] } }
      ],
      why: "Labs 01–15 taught each piece in isolation, on a schedule that let you stop and check after every single step. This lab is the one that asks you to run the whole thing with only the definition of done to check yourself against — which is a much closer simulation of how the work actually happens.",
      check: { q: "This lab gives you a checklist instead of numbered steps. What's the actual skill being tested?", a: "Whether the O2C and P2P sequences from labs 05–10 have become a mental model rather than a script to follow line by line — the checklist tests the outcome, deliberately leaving the exact order and clicks up to you, the same way a real client engagement would." }
    }
  ]
},

/* ---------------- SCN: INDUSTRY SCENARIOS ---------------- */
{
  code: "SCN", track: "business", accent: "magenta", noVideo: true,
  title: "Industry Scenarios",
  tagline: "End-to-end Business Central cases for retail/distribution, professional services, and light manufacturing — process, clicks, and financial impact.",
  audience: "Functional consultants who already know basic BC navigation (or completed the Sandbox Labs LAB series)",
  desc: "End-to-end Business Central cases for retail/distribution, professional services, and light manufacturing — process, clicks, and financial impact.",
  groups: [
    { key: "intro", label: "Intro" },
    { key: "retail", label: "Retail" },
    { key: "services", label: "Services" },
    { key: "manufacturing", label: "Manufacturing" },
    { key: "capstone", label: "Capstone" }
  ],
  lessons: [
    {
      id: "scn-00-intro", group: "intro", n: "00", title: "How to use Industry Scenarios",
      dur: "15 min",
      summary: "What a scenario is (versus a lab), how to read a posting impact table, and the recommended order through the series.",
      concepts: [
        { h: "Business context", p: "This lesson has no company behind it — it's the orientation for the five that do. Read it once before SCN-01." },
        { h: "Scope", p: "In: how this series is structured and how to use it. Out: any BC mechanics — those live in Sandbox Labs (LAB series), which this series assumes you already know or can reference alongside." },
        { h: "Scenarios vs. Sandbox Labs — the actual difference", p: "Sandbox Labs teaches clicks: exact fields, exact values, a script you follow to produce a known result. Industry Scenarios teaches judgment: a business story, a design choice at each fork (which document path, which module), and what that choice does to inventory and the ledgers. A lab tells you what to click. A scenario tells you why a consultant would choose one valid path over another, and what a client should be told to expect financially.",
          table: { headers: ["", "Sandbox Labs (LAB)", "Industry Scenarios (SCN)"], rows: [
            ["Unit of content", "One document type or posting mechanic", "One end-to-end business story, several document types"],
            ["Goal", "Prove you can execute the steps correctly", "Prove you can explain the process and its financial impact to a client"],
            ["Contains", "Numbered click-by-click steps", "Business context, scope, roles, a process map, posting impact tables"],
            ["Best used", "Solo, in a sandbox, right before or after a client call", "In a workshop, while shadowing, or prepping a scoping conversation"]
          ] } },
        { h: "How to read a posting impact table", p: "Every scenario stage gets one row in a posting impact table, with a column per ledger type (ILE, VE, CLE, VLE, G/L Entry). A filled cell means that stage's posting creates an entry there; a dash means it doesn't. Reading a whole table left to right, top to bottom, tells the full financial story of a process without opening a single account — that's the point of the format, and it's worth treating as the centerpiece of each scenario, not a footnote.",
          table: { headers: ["Code", "Full name", "One-line definition"], rows: [
            ["ILE", "Item Ledger Entry", "The permanent record of a quantity movement — every unit in or out of inventory creates one."],
            ["VE", "Value Entry", "The cost side of the same movement — what that quantity was worth, linked 1:1 to its ILE."],
            ["CLE", "Customer Ledger Entry", "A posted transaction against a customer — invoice, credit memo, or payment; what they owe or are owed."],
            ["VLE", "Vendor Ledger Entry", "The payables mirror of CLE — a posted transaction against a vendor."],
            ["G/L Entry", "General Ledger Entry", "The financial posting itself — a debit and credit pair to real accounts, always in balance."]
          ] } },
        { h: "Recommended order", p: "SCN-01 (Retail) first — it's the most universally recognizable business story and introduces the posting-impact table format at its simplest. SCN-02 (Services) and SCN-03 (Manufacturing) can be read in either order after that; they don't depend on each other. SCN-04 (Recurring services) is explicitly optional and pairs naturally right after SCN-02. Finish with SCN-05, the capstone — it deliberately mixes stock, service, and a kit build into one story, and reads much faster once 01–03 are familiar." }
      ],
      why: "Scenarios and labs look similar on the page — both have numbered steps — but they're built for different moments. Using a scenario like a lab (or vice versa) wastes the format's actual value.",
      check: { q: "A learner treats a scenario's Walkthrough section like a lab script and gets frustrated that field-by-field values aren't given. What's the actual mismatch?", a: "Scenarios are written for judgment and financial-impact literacy, not click-perfect execution — the Walkthrough shows where to click and what design choice was made, not exact sample values for every field. For that level of precision, the Sandbox Labs series is the right format." }
    },
    {
      id: "scn-01-retail", group: "retail", n: "01", title: "Retail & distribution (multi-location lite)",
      dur: "40 min",
      summary: "A two-location distributor: sell, replenish, transfer stock between warehouses, and process a return — with the posting impact of every stage laid out.",
      concepts: [
        { h: "Business context", p: "A mid-size distributor sells stocked items to business customers from two warehouse locations. Their pain: stock visibility across locations is unclear, and nobody can say with confidence what a return actually does to inventory value versus the G/L. Success metric for this engagement: a manager can look at one screen and know what's available where, and finance trusts that a posted return reverses the original sale correctly — not just the invoice." },
        { h: "Scope", p: "In: Sales (quote through invoice, and a return), Purchasing (replenishment), Inventory (two-location transfer), core posting groups. Out: warehouse pick/put-away workflows beyond a basic transfer order, serial/lot tracking, and multi-currency — all real distributor concerns, all out of scope for this scenario specifically." },
        { h: "Roles", p: "Sales Order Processor handles the customer-facing documents. Purchasing Agent handles replenishment. Warehouse staff post the transfer between locations. Accountant reviews the posting impact at close — the same four roles this series will keep reusing with different titles per scenario." },
        { h: "Master data", p: "Reuse LAB-C001 (customer) and LAB-I001 (item) from Sandbox Labs if completed, or define fresh SCN-* records.",
          table: { headers: ["Record", "Role in this scenario"], rows: [
            ["SCN-C001 (or LAB-C001)", "The distributor's customer"],
            ["SCN-V001 (or LAB-V001)", "The replenishment vendor"],
            ["SCN-I001 (or LAB-I001)", "The stocked item, tracked at both locations"],
            ["Two existing locations", "Whichever two your sandbox already has configured, e.g. EAST / WEST — this scenario doesn't create new locations, it uses two that exist"]
          ] } },
        { h: "Process map", p: "Six stages, in the order a real cycle runs.",
          table: { headers: ["#", "Stage"], rows: [
            ["1", "Replenish: purchase order to the vendor, received into Location A"],
            ["2", "Transfer: move a portion of stock from Location A to Location B"],
            ["3", "Sell: sales order for the customer, shipped from whichever location has stock"],
            ["4", "Invoice: post the sales invoice"],
            ["5", "Settle: customer payment and vendor payment"],
            ["6", "Return: the customer sends part of the order back"]
          ] } },
        { h: "Walkthrough — where to click", p: "Design choice for this scenario: shipments and invoices are posted separately (not combined), and the return uses a **Sales Return Order**, not a credit memo typed from scratch — that's the one consistent path this lesson uses throughout, since a Return Order links back to the original shipment and correctly reverses inventory, where a bare credit memo only reverses the money.",
          table: { headers: ["Stage", "Where to click"], rows: [
            ["Replenish", "**Tell Me → Purchase Orders** → New → Buy-from Vendor, item line with Location Code set to Location A → Release → Post (Receive, then Invoice)"],
            ["Transfer", "**Tell Me → Transfer Orders** → New → Transfer-from Location A, Transfer-to Location B, item line and quantity → Post (Ship, then Receive — a transfer order posts both legs, sometimes in one step depending on Direct Transfer setup)"],
            ["Sell", "**Tell Me → Sales Orders** → New → Sell-to Customer, item line with Location Code set to wherever stock actually sits after the transfer → Release"],
            ["Invoice", "Post the order: **Post → Ship**, then separately **Post → Invoice**"],
            ["Settle", "**Tell Me → Payment Journals** for both the customer receipt and the vendor payment, each with Apply Entries against the open invoice"],
            ["Return", "From the posted sales invoice or the customer card, start a **Sales Return Order**, copy the original line's item and quantity, Post — this both receives the returned stock and posts a credit"]
          ] } },
        { h: "Posting impact by stage", p: "Every stage's effect across the five ledger types.",
          table: { headers: ["Stage", "ILE", "VE", "CLE", "VLE", "G/L Entry"], rows: [
            ["Purchase receipt", "Yes (+qty)", "Yes (+cost)", "—", "—", "Yes (Inventory ↑, GRNI/Payables accrual)"],
            ["Purchase invoice", "—", "—", "—", "Yes (open)", "Yes (Payables, GRNI clears)"],
            ["Transfer (ship + receive)", "Yes (−qty at A, +qty at B)", "Yes (cost moves, no P&L impact)", "—", "—", "Usually none — an in-transit account may post, but there's no revenue or expense event"],
            ["Sales shipment", "Yes (−qty)", "Yes (COGS recognized)", "—", "—", "Yes (Inventory ↓, COGS ↑)"],
            ["Sales invoice", "—", "—", "Yes (open)", "—", "Yes (Receivables, Sales revenue, VAT)"],
            ["Customer payment", "—", "—", "Yes (closes)", "—", "Yes (Bank/Cash, Receivables clears)"],
            ["Vendor payment", "—", "—", "—", "Yes (closes)", "Yes (Payables clears, Bank/Cash)"],
            ["Sales return", "Yes (+qty, reversing the shipment)", "Yes (reversing COGS)", "Yes (credit, reduces balance)", "—", "Yes (Inventory ↑, COGS ↓, Receivables ↓, Sales ↓)"]
          ] } },
        { h: "Consultant checkpoints", p: "Validate with the client: does the item's Location Code default match where sales actually ship from, or does every order require a manual override (a sign the item card's default is wrong for how the business runs)? Confirm the transfer's in-transit handling matches their expectation — some clients assume a transfer posts instantly, others expect a ship/receive gap that mirrors real truck transit time. And walk the return path with them explicitly: a Sales Return Order that both restocks and credits is very different from a credit-memo-only process that a bookkeeper might reach for instead, and the two produce different inventory truth." },
        { h: "Pitfalls", p: "Wrong Location Code on a sales line is the single most common distributor issue — it either fails to find stock that's actually sitting at the other location, or silently ships from the wrong warehouse if both have some quantity. Negative inventory is allowed by default in BC and will happily let a shipment post against stock that isn't really there — treat a negative on-hand quantity as a data problem to investigate, not a feature to rely on. And Costing Method locks after SCN-I001's first transaction (same rule as the Sandbox Labs item lab) — decide FIFO vs. Average for a distributor's fast-moving stock before the first purchase receipt in this scenario, not after." },
        { h: "Sandbox practice", p: "Every stage in this scenario maps directly to Sandbox Labs: replenish → lab 08–09, transfer → not covered in LAB (a gap worth flagging to a learner), sell/invoice → labs 05–07, return → a new mechanic this scenario introduces that LAB doesn't cover. Practicing the sales and purchase cycles in LAB first makes this scenario's Walkthrough much faster to follow." }
      ],
      why: "This is the scenario every other one in the series gets compared to — stocked items, a customer, a vendor, two locations. Once the posting-impact pattern is clear here, Services and Manufacturing are variations on it, not new concepts.",
      check: { q: "Why does this scenario standardize on a Sales Return Order instead of a manually typed credit memo?", a: "A Sales Return Order links back to the original shipment and correctly reverses both the inventory (ILE/VE) and the financial (CLE/G-L) sides of the sale together. A credit memo typed from scratch only reverses the money — inventory has to be corrected separately, which is exactly the kind of gap that leaves stock records wrong even after the customer's account looks right." }
    },
    {
      id: "scn-02-services", group: "services", n: "02", title: "Professional services (Jobs-light)",
      dur: "40 min",
      summary: "A consulting firm bills for time against a project budget, using BC's Jobs module — planning, usage, and invoicing straight from the job, not a plain sales order.",
      concepts: [
        { h: "Business context", p: "A small consulting firm sells billable time against fixed-scope engagements. Their pain: nobody can say, mid-project, whether a job is running over budget until the final invoice is a surprise. Success metric: budget versus actual usage is visible on the job itself, at any point, before billing happens." },
        { h: "Scope", p: "In: Jobs (job, job task, planning lines), Resources, job usage posting, job-based sales invoicing. Out: multi-currency projects, job WIP method comparison in depth (one short paragraph only), and Time Sheet approval workflows (noted as an alternative, not walked through)." },
        { h: "Roles", p: "Project Manager owns the job and its budget. Consultant logs time against it. Finance turns posted usage into a client invoice — the same three-role split as the FLOW series' Jobs lesson, applied here as a full worked example instead of an overview." },
        { h: "Master data", p: "",
          table: { headers: ["Record", "Role in this scenario"], rows: [
            ["SCN-C002", "The consulting client"],
            ["SCN-R001", "A billable consultant, set up as a Resource (Type: Person), with an hourly Unit Cost and Unit Price"],
            ["A Job Posting Group", "An existing group already on the sandbox — this scenario reuses one, it doesn't create it (same discipline as Sandbox Labs' posting-groups lab)"]
          ] } },
        { h: "Process map", p: "Five stages.",
          table: { headers: ["#", "Stage"], rows: [
            ["1", "Create the job and its budget (job task, planning lines)"],
            ["2", "Log time against the job (design choice: Job Journal, not Time Sheets)"],
            ["3", "Post usage"],
            ["4", "Compare budget to actual before billing"],
            ["5", "Create and post the job sales invoice"]
          ] } },
        { h: "Walkthrough — where to click", p: "Design choice for this scenario: time is captured through the **Job Journal** directly, not Time Sheets. Time Sheets add an approval workflow and a separate weekly-entry page that's genuinely useful for larger teams, but it's an extra layer of setup this scenario deliberately skips to keep the usage-to-invoice line clear. Note the alternative exists; don't be surprised to see it in a real client's tenant.",
          table: { headers: ["Stage", "Where to click"], rows: [
            ["Create job + budget", "**Tell Me → Jobs** → New → set Bill-to Customer → add a Job Task → **Tell Me → Job Planning Lines** on that task, add a Budget line for the resource with planned quantity (hours)"],
            ["Log time", "**Tell Me → Job Journals** → new line: Job No., Job Task No., Type `Resource`, No. = SCN-R001, Quantity = hours worked"],
            ["Post usage", "**Post** the job journal line — this is the moment usage becomes real, not billable yet on its own"],
            ["Compare budget vs. actual", "Open the Job card, **Job Task Lines** — Usage (Total Cost/Price) columns sit next to the Budget columns for direct comparison, before anything is invoiced"],
            ["Create job invoice", "From the Job card, **Create Sales Invoice** action (pulls unbilled, posted usage onto a real sales invoice) → review lines → Post"]
          ] } },
        { h: "WIP, in one paragraph", p: "Work in Progress accounting decides when a job's revenue is recognized relative to when costs are incurred — it doesn't change what gets invoiced, only how the financials read before that invoice posts. This scenario doesn't require picking a WIP method to complete the walkthrough; it's flagged here so a consultant knows the concept exists and that a real engagement will need a deliberate choice (Cost Value, Cost of Sales, Percentage of Completion, or Sales Value) rather than whatever the environment defaults to." },
        { h: "Posting impact by stage", p: "",
          table: { headers: ["Stage", "Job Ledger", "Resource/Item", "CLE", "G/L Entry"], rows: [
            ["Job planning lines (budget)", "No posting — budget only", "—", "—", "—"],
            ["Job journal posting (usage)", "Yes — Job Ledger Entry created", "Resource usage recorded (no ILE/VE — resources aren't inventory)", "—", "Yes (WIP or cost recognition, per WIP method)"],
            ["Job sales invoice", "Job Ledger Entry marked billed", "—", "Yes (open)", "Yes (Receivables, Job/Sales revenue, VAT)"],
            ["Customer payment", "—", "—", "Yes (closes)", "Yes (Bank/Cash, Receivables clears)"]
          ] } },
        { h: "Consultant checkpoints", p: "Confirm with the client whether every resource that logs time actually has a Job Posting Group and a sensible Unit Cost/Unit Price on its resource card — a missing one blocks usage posting the same way a missing Customer Posting Group blocks a sales invoice. Ask explicitly whether billing should happen automatically once usage posts, or wait for a project-manager review — Create Sales Invoice is a manual, deliberate action in this walkthrough for exactly that reason, not a background job." },
        { h: "Pitfalls", p: "Billing before usage is posted is the most common mistake — Create Sales Invoice only pulls what's already posted through the Job Journal, so an unposted timesheet or journal line is simply invisible to it, not billed as zero. A missing Job Posting Group produces a posting error that looks identical in shape to the customer/vendor posting-group gaps from Sandbox Labs — same diagnosis, different setup page. And mixing plain Sales Order billing with Job billing on the same engagement, without a deliberate design decision, produces a client relationship where some work is tracked against budget and some silently isn't — pick one path per engagement and say so out loud to the client." },
        { h: "Sandbox practice", p: "Sandbox Labs doesn't currently cover Jobs — this scenario's Walkthrough is the first hands-on exposure to the module in this Academy. Treat the Walkthrough itself as the practice script, since there's no dedicated LAB lesson to pair it with yet." }
      ],
      why: "Services businesses don't move inventory, so the posting-impact story changes shape entirely — this scenario is where a consultant learns to read Jobs the way SCN-01 taught reading Sales and Purchasing.",
      check: { q: "A project manager asks why a consultant's Monday hours aren't showing on the client's invoice draft yet, even though the consultant says they logged them. What's the most likely explanation?", a: "The Job Journal line was entered but not posted — Create Sales Invoice only pulls usage that's already been posted as a Job Ledger Entry. Entered-but-unposted time is invisible to invoicing, not billed at zero; the fix is posting the journal, not investigating the invoice." }
    },
    {
      id: "scn-03-manufacturing", group: "manufacturing", n: "03", title: "Light manufacturing / assembly",
      dur: "40 min",
      summary: "Assemble a finished good from components using standard Assembly Management, then sell it — with the Premium-only Production Order path called out as an alternative, not the default.",
      concepts: [
        { h: "Business context", p: "A distributor also sells a bundled kit — a finished item built from several components they already stock separately. Their pain: they've been manually adjusting inventory to fake a 'kit' sale, which leaves component stock wrong and gives finance no real cost rollup for the kit. Success metric: selling the kit is one clean transaction that correctly consumes components and costs the finished good accurately." },
        { h: "Scope", p: "In: Assembly BOM, Assembly Order, component consumption, finished-good output, and a short sales tail. Out: routing/work centers, capacity planning, and multi-level production — all genuinely Manufacturing-module territory, marked Premium below, not walked through here." },
        { h: "Roles", p: "Inventory/Production Planner builds and maintains the Assembly BOM. Warehouse staff post the assembly order. Sales Order Processor sells the finished kit exactly like any other stocked item once it exists — this is the scenario's real point: to a salesperson, a kit looks identical to any other item after assembly." },
        { h: "Master data", p: "",
          table: { headers: ["Record", "Role in this scenario"], rows: [
            ["SCN-I002", "The finished kit item — Type: Inventory, Replenishment System: Assembly"],
            ["SCN-I003, SCN-I004", "Component items — ordinary stocked items, already on hand"],
            ["SCN-C001 (or LAB-C001)", "The customer buying the finished kit"]
          ] } },
        { h: "Process map", p: "Four stages.",
          table: { headers: ["#", "Stage"], rows: [
            ["1", "Define the Assembly BOM on SCN-I002"],
            ["2", "Create and post an Assembly Order (consume components, produce the kit)"],
            ["3", "Confirm the finished good's on-hand quantity and rolled-up cost"],
            ["4", "Sell SCN-I002 — a short, ordinary O2C tail"]
          ] } },
        { h: "Walkthrough — where to click", p: "Design choice for this scenario: **Assembly**, not Production Orders — Assembly is available on Essentials, has no routing/work-center overhead, and fits a kit-style build exactly. If a client's actual need involves multi-step production with labor routing and capacity planning, that's a genuine Manufacturing-module (Premium) conversation — flagged, not walked through, below.",
          table: { headers: ["Stage", "Where to click"], rows: [
            ["Define BOM", "Open SCN-I002's Item card → **Tell Me → Assembly BOM** (or the BOM action on the item card) → add component lines: SCN-I003 and SCN-I004, each with the quantity needed per one finished kit"],
            ["Create assembly order", "**Tell Me → Assembly Orders** → New → Item No. SCN-I002, Quantity to build → the BOM's components populate automatically as order lines"],
            ["Post the order", "**Post** — this consumes the component quantities and outputs the finished quantity of SCN-I002 in a single posting"],
            ["Confirm cost rollup", "Open SCN-I002's Item card, check Unit Cost — it should reflect the rolled-up cost of the components consumed, not a manually typed number"],
            ["Sell the kit", "Ordinary Sales Order → Release → Post (Ship, then Invoice) — SCN-I002 behaves like any other stocked item from here"]
          ] } },
        { h: "Premium alternative — Production Orders", p: "This path requires a Premium license. If the actual business need is multi-step production — a routing across work centers, labor and machine time, capacity constraints — that's the Manufacturing module: a Production BOM (richer than an Assembly BOM), a Routing, and a Production Order (Planned → Firm Planned → Released → posted consumption and output). The mechanics rhyme with Assembly (components consumed, a finished good output, cost rolled up) but the setup is substantially heavier. Confirm licensing before proposing this path to a client — it's a common scoping mistake to assume Production Orders are available because 'the client is a manufacturer.'" },
        { h: "Posting impact by stage", p: "",
          table: { headers: ["Stage", "ILE", "VE", "CLE", "G/L Entry"], rows: [
            ["Assembly order posting", "Yes — negative ILEs for each component, positive ILE for the finished good", "Yes — component cost consumed, finished-good cost capitalized", "—", "Usually none — inventory value moves from components to finished good, no P&L event"],
            ["Sales shipment (kit)", "Yes (−qty)", "Yes (COGS recognized, using the rolled-up cost)", "—", "Yes (Inventory ↓, COGS ↑)"],
            ["Sales invoice (kit)", "—", "—", "Yes (open)", "Yes (Receivables, Sales revenue, VAT)"]
          ] } },
        { h: "Consultant checkpoints", p: "Confirm the Assembly BOM is genuinely active/certified before relying on it in a demo or a go-live — an inactive BOM won't populate an assembly order's component lines, and the failure mode looks like 'the feature doesn't work' rather than 'a status flag is wrong.' Check that every component's Unit of Measure on the BOM line matches how that component is actually stocked — a UoM mismatch silently changes how much is consumed per kit. And validate component stock is genuinely on hand before posting the assembly order in front of a client; Assembly, like Sales, allows negative inventory by default." },
        { h: "Pitfalls", p: "Posting an assembly order without components actually in stock is the single most common demo failure — it succeeds (negative inventory is allowed) but produces numbers nobody can explain afterward. A BOM that isn't marked active/certified is the second most common — double-check its status before troubleshooting anything else. And confusing Assembly BOM with Production BOM in a client conversation is an easy, embarrassing slip — they're genuinely different objects with different capabilities; naming the one actually in scope, out loud, avoids a licensing surprise later." },
        { h: "Sandbox practice", p: "Sandbox Labs doesn't currently include an Assembly lab — this scenario's Walkthrough is the first hands-on Assembly exposure in this Academy, same gap as SCN-02's Jobs section. The sales tail at the end reuses exactly the O2C mechanics from LAB labs 05–07." }
      ],
      why: "Most 'manufacturing' conversations with a mid-market client are actually assembly conversations — kitting, light configuration, build-to-order. Reaching for full Production Orders by default over-scopes the license and the implementation; this scenario is the discipline of trying Assembly first.",
      check: { q: "A client says they need Production Orders because they're a manufacturer. Before agreeing, what should a consultant check first?", a: "Whether the actual need is multi-step production with routing, work centers, and capacity planning (genuinely Production Orders, Premium-licensed) or a simpler kit/bundle build (Assembly, available on Essentials, no routing overhead). \"We're a manufacturer\" doesn't by itself determine which module fits — the process complexity does, and assuming Production Orders by default risks proposing a Premium license the client may not actually need." }
    },
    {
      id: "scn-04-recurring", group: "services", n: "04", title: "Recurring services (optional, advanced)",
      dur: "30 min",
      summary: "A maintenance-contract-style business bills the same amount periodically, using standard sales documents and Copy Document — with an honest caveat about what BC's standard toolset doesn't do.",
      concepts: [
        { h: "Business context", p: "A business sells an ongoing maintenance contract billed the same amount every month. Their pain: they've been manually retyping the same invoice every period and worry about errors. Success metric: a repeatable, low-effort way to reproduce last period's invoice without retyping it — with realistic expectations set about what's automated and what isn't." },
        { h: "Scope", p: "In: a template Sales Invoice reused via Copy Document, and Recurring General Journals as the finance-side alternative for pure G/L recognition entries. Out: Service Contracts (a real, heavier Service Management feature that could fit this story better but is intentionally out of scope here to stay light), and any true subscription billing automation — standard BC doesn't have one." },
        { h: "Roles", p: "Accounts Receivable Clerk reproduces and sends the periodic invoice. Accountant reviews recognition if a Recurring Journal is also in use." },
        { h: "Master data", p: "",
          table: { headers: ["Record", "Role in this scenario"], rows: [
            ["SCN-C003", "The maintenance-contract customer"],
            ["A service-type Item or a G/L account sales line", "What actually appears on the recurring invoice — either works; this scenario uses a service-type Item for a cleaner posting story"]
          ] } },
        { h: "Process map", p: "Three stages, repeated every billing period.",
          table: { headers: ["#", "Stage"], rows: [
            ["1", "Post the first period's invoice normally, as a template"],
            ["2", "Each following period: **Copy Document** the prior invoice onto a new one, adjust the date, post"],
            ["3", "(Alternative / supplement) Post a Recurring General Journal for pure G/L-level recognition entries, if revenue needs spreading across periods separate from the billed invoice"]
          ] } },
        { h: "Walkthrough — where to click", p: "Design choice for this scenario: **Copy Document**, run manually each period, is the standard-BC path — there is no native 'repeat this invoice automatically' feature. Say that plainly to a client asking for subscription billing; the honest answer is a lighter manual step, not a hidden automation switch.",
          table: { headers: ["Stage", "Where to click"], rows: [
            ["First invoice", "**Tell Me → Sales Invoices** → New → build it once, normally → Post"],
            ["Next period", "New Sales Invoice → **Copy Document** action → select the prior posted invoice as the source → adjust Posting Date/Due Date → Post"],
            ["Recurring Journal (if used)", "**Tell Me → General Journals**, using a batch with Recurring Method set (Fixed or Variable), each line auto-reversing or repeating per its recurring frequency"]
          ] } },
        { h: "The honest caveat", p: "Business Central's standard recurring tools are not a revenue-recognition suite. Copy Document reproduces a document; it doesn't spread revenue across periods, track a contract's remaining term, or auto-adjust for a mid-contract price change. Recurring General Journals repeat or reverse a G/L entry on schedule, but that's a finance-side journal mechanic, not a customer-facing billing one. For genuine subscription billing with term tracking and proration, the honest scope conversation is Service Contracts (Service Management module) or a third-party subscription-billing add-on — not a creative use of what's covered here." },
        { h: "Posting impact by stage", p: "",
          table: { headers: ["Stage", "CLE", "G/L Entry"], rows: [
            ["Each period's posted invoice (via Copy Document)", "Yes (open, same as any invoice)", "Yes (Receivables, Sales revenue, VAT)"],
            ["Recurring Journal line posting (if used)", "—", "Yes — whatever accounts the journal line targets, repeating or reversing per its schedule"]
          ] } },
        { h: "Consultant checkpoints", p: "Confirm with the client whether 'recurring' actually means 'the same amount, reproduced manually each period' (this scenario's scope) or 'automated subscription billing with proration and term tracking' (a different, larger conversation) — the two get described with the same word by clients constantly, and scoping the wrong one is expensive to discover late." },
        { h: "Pitfalls", p: "Assuming Copy Document is a scheduled automation — it isn't; someone has to run it each period. Forgetting to update the Posting Date/Due Date on the copied invoice, which silently backdates or misdates a real financial document. And setting client expectations around 'recurring billing' without first clarifying which of the two meanings above they actually need." }
      ],
      why: "This is flagged optional deliberately: it's a real, common ask, but the honest answer involves telling a client what Business Central doesn't do out of the box, which is a harder and more valuable conversation than another walkthrough.",
      check: { q: "A client asks for 'automatic subscription billing.' What does standard Business Central actually offer toward that, and what doesn't it do?", a: "It offers Copy Document (manually reproduce a prior invoice each period) and Recurring General Journals (repeat/reverse a G/L entry on schedule) — both require a person to act each period and neither tracks contract terms, prorates, or spreads revenue automatically. True automated subscription billing is outside standard BC's scope; Service Contracts or a third-party add-on are the honest next conversation." }
    },
    {
      id: "scn-05-capstone", group: "capstone", n: "05", title: "Capstone: devices, installation, and a special kit",
      dur: "45 min",
      summary: "One mixed story for a trainer room: a company sells devices and an installation service, purchases devices, builds one special kit, and closes on four questions about where everything actually went.",
      concepts: [
        { h: "Business context", p: "A company sells physical devices (stocked items) and charges separately for installation (a billable service). They also occasionally need to build a special bundled kit for a specific customer request. Their pain, in one sentence: 'we can tell you what we sold, but not confidently what it cost us, what the customer still owes, or what we owe our supplier — all at the same time.' This scenario exists to make a room answer that sentence correctly." },
        { h: "Scope", p: "In: one sales order mixing an item line and a service/resource line, one purchase order for devices, one assembly order for the special kit, and a closing reconciliation across customer, vendor, and inventory. Out: nothing new mechanically — every piece was already covered in SCN-01 through SCN-03; this scenario's entire value is combining them, not teaching a new mechanic." },
        { h: "Roles", p: "Sales Order Processor builds the mixed order. Purchasing Agent handles the device purchase. Warehouse/Planner builds the special kit. A workshop facilitator runs the closing questions with the whole room." },
        { h: "Master data", p: "Reuses records from SCN-01 through SCN-03 deliberately — this scenario is a combination exercise, not a fresh data-entry one.",
          table: { headers: ["Record", "Reused from"], rows: [
            ["SCN-C001", "SCN-01"],
            ["SCN-V001", "SCN-01"],
            ["SCN-I001 (device, stocked)", "SCN-01"],
            ["SCN-R001 or a new installation resource", "SCN-02's pattern, retitled for installation rather than consulting"],
            ["SCN-I002 (special kit) + SCN-I003/I004 (components)", "SCN-03"]
          ] } },
        { h: "Process map", p: "Four stages plus a close.",
          table: { headers: ["#", "Stage"], rows: [
            ["1", "Purchase devices (replenish SCN-I001)"],
            ["2", "Build the special kit (assembly order for SCN-I002)"],
            ["3", "Sell: one sales order with two lines — the device (Type Item) and installation (Type Resource) — released, shipped, invoiced"],
            ["4", "Settle: customer payment, vendor payment"],
            ["5", "Close: the four closing questions, answered from the system, not memory"]
          ] } },
        { h: "Walkthrough — where to click", p: "This walkthrough is intentionally terse — every individual action was already detailed in SCN-01–03. The teaching moment here is the sequencing and the mixed sales order, not re-explaining any single click.",
          table: { headers: ["Stage", "Where to click"], rows: [
            ["Purchase devices", "Purchase Order → SCN-V001, item line SCN-I001 → Release → Post (Receive, then Invoice) — same as SCN-01"],
            ["Build the kit", "Assembly Order → SCN-I002, using the BOM from SCN-03 → Post"],
            ["Mixed sale", "Sales Order → SCN-C001 → line 1: Type `Item`, No. SCN-I001; line 2: Type `Resource`, No. the installation resource, Quantity = hours → Release → Post (Ship, then Invoice)"],
            ["Settle", "Payment Journals for both customer and vendor, Apply Entries, Post"]
          ] } },
        { h: "Posting impact — the mixed sale, specifically", p: "The one genuinely new thing this scenario shows: a single sales invoice with two lines that post completely differently underneath.",
          table: { headers: ["Line", "ILE / VE", "CLE", "G/L Entry"], rows: [
            ["Device line (Type Item)", "Yes — inventory decreases, COGS recognized", "Rolled into the one invoice's CLE", "Inventory ↓, COGS ↑, Sales (goods) ↑"],
            ["Installation line (Type Resource)", "No — resources don't touch inventory", "Rolled into the same invoice's CLE", "Sales (service) ↑ only — no COGS, no inventory movement"]
          ] } },
        { h: "Closing questions — the facilitator's actual test", p: "Run these out loud at the end, and expect the room to answer from the live system, not from memory of the steps.",
          table: { headers: ["Question", "Where to find the answer"], rows: [
            ["Where did stock actually move?", "SCN-I001's Item Ledger Entries (purchase in, sale out) and SCN-I002/I003/I004's (assembly consumption and output)"],
            ["What does the customer still owe?", "Customer Ledger Entries for SCN-C001 — Remaining Amount after the payment applied"],
            ["What do we still owe the vendor?", "Vendor Ledger Entries for SCN-V001 — same check, payables side"],
            ["Which G/L account families moved, and by how much?", "Navigate from the posted sales invoice — Inventory, COGS, Sales (goods), Sales (service), Receivables, VAT, all in one trace"]
          ] } },
        { h: "Consultant checkpoints", p: "This scenario's real checkpoint is whether the room can answer the four closing questions unaided — if they can't, that's a signal to revisit SCN-01 (inventory/AR) or SCN-03 (assembly) before moving on, not to re-run this capstone immediately." },
        { h: "Pitfalls", p: "Treating the installation line like it needs a Location Code or triggers a shipment the way the device line does — it doesn't; Type Resource lines skip inventory entirely, and a learner who expects symmetry between the two lines will get confused looking for an ILE that was never going to exist. Building the kit after trying to sell it, instead of before, is an easy sequencing slip in a live workshop — SCN-I002 has to exist in stock (via the assembly order) before a sales order can ship it." },
        { h: "Facilitator timeline (60–90 min workshop)", p: "A suggested pacing for running this as a live session, not a solo read.",
          table: { headers: ["Time", "Activity"], rows: [
            ["0–10 min", "Read the business context aloud; confirm everyone has the master data (reused from SCN-01–03) ready in their sandbox"],
            ["10–20 min", "Purchase devices + build the kit (stages 1–2), each participant working independently"],
            ["20–40 min", "The mixed sales order (stage 3) — pause after the line entry, before posting, to ask the room to predict the posting impact before revealing the table"],
            ["40–50 min", "Settle both sides (stage 4)"],
            ["50–75 min", "The four closing questions, worked live, with participants finding the answers themselves rather than being told"],
            ["75–90 min", "Debrief: what surprised people, which pitfall someone actually hit, and — if time allows — connect back to SCN-02 or SCN-04 for whichever module the room's real clients need most"]
          ] } }
      ],
      why: "Every scenario before this one kept one story clean — pure retail, pure services, pure assembly. Real engagements mix all three in a single client. This is the one built to be run out loud, in a room, with the four closing questions as the actual test.",
      check: { q: "In the mixed sales order, why doesn't the installation (Resource) line create an Item Ledger Entry the way the device (Item) line does?", a: "Because resources aren't inventory — a Resource-type line represents billable time or usage, not a stocked quantity, so it has nothing for an Item Ledger Entry to track. It still posts to the G/L (service revenue) and rolls into the same invoice's Customer Ledger Entry, but the inventory side of the posting story simply doesn't apply to it." }
    }
  ]
}

];


/* ============================================================
   TALAN ACADEMY — CURRICULUM DATA (Part B)
   Developer track
   ============================================================ */

const CURRICULUM_B = [

/* ---------------- AL ACADEMY ---------------- */
{
  code: "AL", track: "developer", accent: "teal",
  title: "AL Academy",
  tagline: "From a blank VS Code window to a shipped, monitored extension.",
  audience: "AL developers, technical consultants, new technical joiners",
  desc: "The full technical curriculum. Core lessons are sequential; bonus lessons can be read in any order once the core is done.",
  groups: [
    { key: "core", label: "Core curriculum" },
    { key: "methods", label: "AL methods" },
    { key: "bonus", label: "Bonus deep-dives" },
    { key: "workflow", label: "Team workflow" }
  ],
  lessons: [
    /* ---- CORE ---- */
    {
      id: "al-01", group: "core", n: "01", title: "Starting an AL project", dur: "6 min read",
      summary: "The mental model first: what an extension is, then the tooling that produces one.",
      concepts: [
        { h: "The extension model", p: "Business Central is the platform. Your extension runs on top of it. AL is the language you write it in. Critically, an extension never modifies the base application — this constraint is the reason upgrades stay safe." },
        { h: "Three pieces of tooling", p: "VS Code, the AL Language extension, and a sandbox environment. Nothing else is required to start." },
        { h: "AL: Go!", p: "The command palette scaffolds a complete project — app.json, launch.json, and a HelloWorld.al — in one step." },
        { h: "app.json is the identity card", p: "Name, publisher, version and dependencies. It declares who your extension is and what it needs in order to run." },
        { h: "launch.json is the address", p: "Server, tenant and environment type. It tells VS Code where to publish. Confusing the two files is the most common early mistake." }
      ],
      why: "Developers who learn the tooling without the model produce extensions that work but violate the upgrade-safety principle. Understanding why you never touch base code shapes every decision afterwards.",
      check: { q: "What is the practical difference between app.json and launch.json?", a: "app.json describes the extension itself and ships with it. launch.json is local developer configuration describing where to deploy — it is about your machine, not the product." },
      code: "// app.json (excerpt)\n{\n  \"id\": \"a1b2c3d4-...\",\n  \"name\": \"Loyalty Points\",\n  \"publisher\": \"Talan\",\n  \"version\": \"1.0.0.0\",\n  \"dependencies\": []\n}"
    },
    {
      id: "al-02", group: "core", n: "02", title: "AL objects overview", dur: "5 min read",
      summary: "Four object types, four roles — and how a single example flows through all of them.",
      concepts: [
        { h: "Tables define the data", p: "The shape of what you store: fields, types, keys. Everything else reads from or writes to a table." },
        { h: "Pages give data a face", p: "What the user actually sees and interacts with. A page has a source table; it presents that data, it does not own it." },
        { h: "Codeunits hold the logic", p: "Business rules and calculations, kept out of both the table and the page so they can be reused and tested independently." },
        { h: "Reports produce output", p: "Data leaving the system in a readable form — printed, emailed or filed." }
      ],
      why: "The separation is not bureaucracy. Logic in a codeunit can be called from a page, a report, a job queue and a test. Logic embedded in a page can only be called from that page.",
      check: { q: "Where should a total-calculation routine live, and why?", a: "In a codeunit. Any page or report that needs the total calls it, and it can be unit-tested without instantiating a page." }
    },
    {
      id: "al-03", group: "core", n: "03", title: "Tables & fields", dur: "7 min read",
      summary: "Field anatomy, data types as constraints, and why keys are a performance decision.",
      concepts: [
        { h: "Anatomy of a field", p: "Every field has an ID, a name and a data type. The ID is permanent — renaming is safe, renumbering is not." },
        { h: "Types are constraints", p: "Code auto-uppercases and is length-bounded. Decimal rejects text. Boolean is binary. Choosing the right type prevents bad data at entry rather than catching it in validation." },
        { h: "Keys make lookups fast", p: "Without a key, finding a record means scanning every row. With a primary key, retrieval is direct. At a few hundred records this is invisible; at a few million it is the difference between usable and unusable." },
        { h: "Field properties enforce rules", p: "NotBlank, MinValue, MaxValue and similar properties put business rules in the data layer, where they apply regardless of which page or process is writing." }
      ],
      why: "Table design is the decision you can least easily revisit. Fields can be added cheaply; changing a type or key on a table holding production data is a migration.",
      check: { q: "Why is Code[20] often preferred over Text[20] for identifiers?", a: "Code auto-uppercases and trims, which makes matching predictable. 'ABC' and 'abc' will not become two different customers." },
      code: "table 50100 \"Loyalty Entry\"\n{\n    fields\n    {\n        field(1; \"Entry No.\"; Integer) { }\n        field(2; \"Customer No.\"; Code[20])\n        {\n            NotBlank = true;\n        }\n        field(3; Points; Decimal)\n        {\n            MinValue = 0;\n        }\n    }\n    keys\n    {\n        key(PK; \"Entry No.\") { Clustered = true; }\n    }\n}"
    },
    {
      id: "al-04", group: "core", n: "04", title: "Pages", dur: "6 min read",
      summary: "List pages, card pages, actions and layout — the same data presented for two different jobs.",
      concepts: [
        { h: "List pages: many at a glance", p: "PageType = List with a repeater control. Built for scanning and comparing across records." },
        { h: "Card pages: one in detail", p: "PageType = Card with grouped fields. Built for reading and editing a single record thoroughly." },
        { h: "They work together", p: "Clicking a row on a list drills into the card for that record. Users move between breadth and depth constantly; both page types exist to support that movement." },
        { h: "Actions do things", p: "An action with an OnAction trigger turns a page from something you read into something you use — usually by calling a codeunit." },
        { h: "Layout elements", p: "Groups organise fields; FactBoxes show related information alongside without cluttering the main form." }
      ],
      why: "Page design determines whether users find the system efficient or exhausting. The technical capability is easy; the judgement about what belongs on which page is the skill.",
      check: { q: "Why should an action's logic live in a codeunit rather than in the OnAction trigger?", a: "So it can be reused from other pages, called from a job queue, and tested. The trigger should call, not implement." },
      code: "pageextension 50101 \"Customer Card Ext\" extends \"Customer Card\"\n{\n    layout\n    {\n        addafter(Name)\n        {\n            field(\"Loyalty Points\"; Rec.\"Loyalty Points\")\n            {\n                ApplicationArea = All;\n            }\n        }\n    }\n}"
    },
    {
      id: "al-05", group: "core", n: "05", title: "Codeunits", dur: "7 min read",
      summary: "Procedures, parameters and event subscribers — the middle layer between data and interface.",
      concepts: [
        { h: "Anatomy of a procedure", p: "A name, parameters in, and optionally a return value out. The clearer that contract, the easier the procedure is to reuse and test." },
        { h: "Pages call, codeunits compute", p: "The page collects input and displays results; the codeunit does the work. This keeps the calculation available to every other caller." },
        { h: "Event subscribers", p: "The EventSubscriber attribute lets your code react to something happening in the base application — a field validated, a document posted — without modifying the code that raised the event." },
        { h: "Why separation pays", p: "One event, many subscribers, all working independently. Multiple extensions can react to the same base event without knowing about each other." }
      ],
      why: "Event subscribers are the mechanism that makes 'extend, never modify' practical. Without them, customisation would require touching base code, and upgrades would break every time.",
      check: { q: "Two extensions subscribe to the same base event. What happens?", a: "Both run. Neither modified the base code, so neither conflicts with the other — this is precisely the design intent of the event model." },
      code: "[EventSubscriber(ObjectType::Table, Database::\"Sales Line\",\n  'OnAfterValidateEvent', 'Quantity', false, false)]\nlocal procedure OnAfterValidateQuantity(var Rec: Record \"Sales Line\")\nbegin\n    if Rec.Quantity <> 0 then begin\n        Rec.\"Line Amount\" := Rec.Quantity * Rec.\"Unit Price\";\n        Rec.Modify();\n    end;\nend;"
    },
    {
      id: "al-06", group: "core", n: "06", title: "Reports", dur: "6 min read",
      summary: "Dataset and layout — the two halves of every report, and the filter layer between them.",
      concepts: [
        { h: "The dataset", p: "Dataitems and columns define which records and which fields make it into the report. This is the data question, answered before any formatting." },
        { h: "The request page", p: "Where the user chooses filters before running — date ranges, customer selections. Good request page design prevents users from running reports they did not want." },
        { h: "The layout", p: "RDLC or Word layout turns rows into a formatted document — headers, alignment, totals. The same dataset can drive multiple layouts." },
        { h: "Output formats", p: "One report, multiple destinations: PDF, Excel, Word. The dataset does not change; only the rendering does." }
      ],
      why: "Separating dataset from layout means a formatting change never risks the data logic, and a data change does not require redesigning the document.",
      check: { q: "A user wants the same report in a summary and a detailed version. What is the efficient approach?", a: "One dataset, two layouts — provided the detailed version needs no additional fields. Duplicating the report duplicates the maintenance." }
    },
    {
      id: "al-07", group: "core", n: "07", title: "Publishing & deploying an extension", dur: "6 min read",
      summary: "Compile, version, publish to sandbox, then through validation to production.",
      concepts: [
        { h: "The package", p: "Every object you have built compiles into a single .app file. The compiler validates before it will produce one." },
        { h: "Versioning", p: "The four-part version in app.json must increment for each release. Traceability depends on it, and so does the upgrade mechanism." },
        { h: "Sandbox first", p: "Publish and test in a sandbox environment before anything reaches production. This is not optional discipline; it is where you find the problems that unit tests do not." },
        { h: "Validation for production and AppSource", p: "Code quality, performance and compliance checks apply before an extension reaches a production tenant or the marketplace." }
      ],
      why: "The deployment pipeline is the last place a mistake is cheap. Everything caught in sandbox is a fraction of the cost of the same problem found in production.",
      check: { q: "Why does the version number matter beyond record-keeping?", a: "Because upgrade codeunits are triggered by version transitions. An unchanged version means the upgrade logic will not run." }
    },

    /* ---- METHODS ---- */
    {
      id: "al-m1", group: "methods", n: "M1", title: "Records & filtering methods", dur: "7 min read",
      summary: "The methods you will use in almost every procedure — create, find, change, filter, validate.",
      concepts: [
        { h: "Creating and changing", p: "Init() prepares a record with defaults, Insert() writes it, Modify() updates an existing one, Delete() removes it. Get() retrieves a single record by primary key." },
        { h: "Looping", p: "FindSet() retrieves a set for iteration; FindFirst() and FindLast() jump to one end; Next() steps through. Use FindSet() when you intend to loop — it is optimised for it." },
        { h: "Filtering", p: "SetRange() filters by an exact value or range. SetFilter() handles more complex expressions including wildcards. Reset() clears filters — forgetting it is a classic source of a routine silently operating on the wrong subset." },
        { h: "Validating", p: "Validate() assigns a value and runs the field's validation logic. TestField() checks a field contains a value and errors if not. Assigning directly with := skips validation entirely, which is occasionally what you want and usually not." }
      ],
      why: "The difference between Rec.Quantity := 5 and Rec.Validate(Quantity, 5) is whether all the dependent business logic fires. Choosing wrongly produces records that look correct and behave incorrectly.",
      check: { q: "Why is a missing Reset() dangerous rather than merely untidy?", a: "Filters persist on the record variable. The next operation inherits them silently, so a routine can process a subset while appearing to process everything." },
      code: "Customer.Reset();\nCustomer.SetRange(\"Country/Region Code\", 'TN');\nCustomer.SetFilter(Name, 'A*');\nif Customer.FindSet() then\n    repeat\n        Customer.Validate(\"Payment Terms Code\", 'NET30');\n        Customer.Modify(true);\n    until Customer.Next() = 0;"
    },
    {
      id: "al-m2", group: "methods", n: "M2", title: "String & date methods", dur: "5 min read",
      summary: "Shaping text and time into the format the rest of the system expects.",
      concepts: [
        { h: "String handling", p: "StrLen() measures, CopyStr() extracts a portion, UpperCase() and LowerCase() normalise case. Normalising before comparison prevents a whole class of matching bugs." },
        { h: "Format and Evaluate", p: "Format() converts a value to text for display. Evaluate() goes the other way, parsing text into a typed value — and it returns a boolean you should check rather than assume." },
        { h: "Dates", p: "Today() returns the current date, CurrentDateTime() the full timestamp. CalcDate() computes a date from a formula: '+1M' for a month ahead, '-7D' for a week back." },
        { h: "Date formulas are readable", p: "CalcDate('+1M', Today()) expresses intent more clearly than manual arithmetic, and it handles month-length edge cases correctly." }
      ],
      why: "Inconsistent formatting is the quiet cause of reports that disagree and matches that fail. Normalising at the boundary is cheaper than debugging downstream.",
      check: { q: "Why should you check the return value of Evaluate()?", a: "Because it returns false on failure rather than raising an error. Ignoring it means invalid input silently produces a zero or blank value." },
      code: "if not Evaluate(MyDate, TxtDate) then\n    Error('Invalid date: %1', TxtDate);\n\nDueDate := CalcDate('+30D', Today());\nCustName := UpperCase(Customer.Name);"
    },
    {
      id: "al-m3", group: "methods", n: "M3", title: "Dialog & utility methods", dur: "5 min read",
      summary: "Talking to the user, and the small helpers that make an extension feel finished.",
      concepts: [
        { h: "Message, Error, Confirm", p: "Message() informs and execution continues. Error() stops execution and rolls back. Confirm() asks a yes/no question and returns the answer. Choosing the wrong one produces either silent failure or an interrupted process." },
        { h: "Error is transactional", p: "Error() does not merely display text — it aborts the transaction. This is why validation belongs in Error() rather than Message() followed by an exit." },
        { h: "Utilities", p: "Round() applies rounding precision, Random() generates a value, Clear() empties a variable, Sleep() pauses execution in milliseconds." },
        { h: "Sleep sparingly", p: "Sleep() blocks. It has legitimate uses in testing and pacing external calls, and almost none in normal business logic." }
      ],
      why: "User feedback is where an extension either feels considered or feels unfinished. Clear messages that say what happened and what to do next are the cheapest quality improvement available.",
      check: { q: "When should validation use Error() rather than Message()?", a: "Always, when the condition should prevent the operation. Message() lets the process continue, which means the invalid state is still committed." },
      code: "if Rec.Quantity <= 0 then\n    Error('Quantity must be greater than zero.');\n\nif Confirm('Delete this record?', false) then\n    Rec.Delete(true);\n\nAmount := Round(Amount, 0.01);"
    },

    /* ---- BONUS ---- */
    {
      id: "al-b01", group: "bonus", n: "B01", title: "Role Centers", dur: "5 min read",
      summary: "Why every user sees a different home screen, and how that screen is built.",
      concepts: [
        { h: "A Role Center is a page type", p: "PageType = RoleCenter. It is built from the same components as any other page, arranged around what one role needs first." },
        { h: "Areas", p: "area(RoleCenter) holds tiles and KPIs, area(Processing) holds quick actions, area(Embedded) holds charts and widgets." },
        { h: "Profiles switch the whole workspace", p: "Changing the assigned profile re-tunes tiles, actions and navigation for that role. A sales user and a warehouse user share a system and share almost no screen." }
      ],
      why: "Role Centers are the difference between a system that feels tailored and one that feels generic. They cost little to configure and materially change adoption.",
      check: { q: "Why is the Role Center a usability feature rather than a cosmetic one?", a: "Because it determines what a user sees first, every day. Reducing what they have to navigate past is the single largest lever on daily efficiency." }
    },
    {
      id: "al-b02", group: "bonus", n: "B02", title: "Permission sets", dur: "5 min read",
      summary: "RIMD access control, and how permission sets compose.",
      concepts: [
        { h: "RIMD", p: "Read, Insert, Modify, Delete — four independent rights per object. A user can often read a table they must not modify, and the model expresses that directly." },
        { h: "Permission set objects", p: "Defined in AL as a PermissionSet object with an explicit Permissions list, which means access control is versioned with your code rather than configured ad hoc." },
        { h: "Composition", p: "IncludedPermissionSets lets a set build on an existing one. You rarely start from zero, and inheriting keeps sets maintainable as the base application changes." }
      ],
      why: "Defining permissions in code means they ship, deploy and version with the extension — and are reviewable in a pull request rather than discovered in production.",
      check: { q: "Why is defining permission sets in AL preferable to configuring them in the UI?", a: "Because they become part of the deployable artefact: versioned, reviewable, and identical across every environment." },
      code: "permissionset 50100 \"Loyalty Read\"\n{\n    Assignable = true;\n    IncludedPermissionSets = \"D365 BASIC\";\n    Permissions =\n        tabledata \"Loyalty Entry\" = R;\n}"
    },
    {
      id: "al-b03", group: "bonus", n: "B03", title: "Enums", dur: "4 min read",
      summary: "Fixed, safe choices instead of free text — and how they stay extensible.",
      concepts: [
        { h: "The problem", p: "A free-text status field accumulates typos and variants. 'Completed', 'completed' and 'compleeted' become three distinct values in reporting." },
        { h: "Enum definition", p: "Each value has a number and a name. The number is stored; the name is what code refers to. Renaming is safe, renumbering is not." },
        { h: "Extensible enums", p: "With extensible = true, another extension can add values without modifying yours — the same extend-never-modify principle applied to a value list." }
      ],
      why: "Enums move a whole category of data-quality problems from runtime to compile time. Invalid values become impossible rather than merely discouraged.",
      check: { q: "What breaks if you renumber an existing enum value?", a: "Stored data. Records hold the number, so changing it silently reassigns every existing record to a different meaning." },
      code: "enum 50100 \"Order Status\"\n{\n    Extensible = true;\n    value(0; New) { Caption = 'New'; }\n    value(1; \"In Progress\") { Caption = 'In Progress'; }\n    value(2; Completed) { Caption = 'Completed'; }\n}"
    },
    {
      id: "al-b04", group: "bonus", n: "B04", title: "Interfaces", dur: "6 min read",
      summary: "The plug-and-socket pattern that keeps logic swappable.",
      concepts: [
        { h: "The problem interfaces solve", p: "A growing chain of if/else branches for each variant — each new shipping method, payment type or calculation rule adds another branch to the same procedure." },
        { h: "An interface defines shape, not behaviour", p: "It declares procedure signatures with no implementation. Any codeunit that implements it must provide those procedures." },
        { h: "Implementations vary independently", p: "Standard and express shipping each implement the same interface with different logic. The calling code does not change when a new one is added." }
      ],
      why: "Interfaces are how you make an extension extensible by others. A partner can add a new implementation without touching — or even reading — your calling code.",
      check: { q: "How does an interface differ from an event subscriber as an extension mechanism?", a: "An event lets others react after something happens. An interface lets others substitute how something is done. Reaction versus replacement." },
      code: "interface \"Shipping Method\"\n{\n    procedure CalculateCost(Weight: Decimal): Decimal;\n}\n\ncodeunit 50110 \"Express Shipping\" implements \"Shipping Method\"\n{\n    procedure CalculateCost(Weight: Decimal): Decimal\n    begin\n        exit(Weight * 4.5 + 15);\n    end;\n}"
    },
    {
      id: "al-b05", group: "bonus", n: "B05", title: "Testing in AL", dur: "6 min read",
      summary: "Arrange, act, assert — automated tests that catch problems before users do.",
      concepts: [
        { h: "Test codeunits", p: "A codeunit with Subtype = Test, containing procedures marked with the [Test] attribute. Each one is a self-contained scenario." },
        { h: "Arrange, act, assert", p: "Set up the data, run the operation, then check the outcome. Every well-written test follows this shape, and reading it should be obvious." },
        { h: "Assertions", p: "The Assert codeunit provides AreEqual, AreNotEqual, IsTrue and similar. A test with no assertion passes regardless of behaviour, which is worse than no test." },
        { h: "Tests enable upgrades", p: "The value is not only catching today's bug. It is being able to change code in twelve months and know within seconds whether anything broke." }
      ],
      why: "Untested code is a guess about behaviour. The cost of tests is paid once; the cost of not having them is paid at every future change.",
      check: { q: "Why does a test without an assertion count as a liability?", a: "It passes unconditionally, so it reports confidence it has not earned — and it will keep passing after the code it covers breaks." },
      code: "[Test]\nprocedure TestLoyaltyPointsCalculation()\nvar\n    Calc: Codeunit \"Loyalty Calc\";\n    Result: Decimal;\nbegin\n    // Arrange\n    // Act\n    Result := Calc.PointsFor(100);\n    // Assert\n    Assert.AreEqual(10, Result, 'Expected 10 points per 100 spent');\nend;"
    },
    {
      id: "al-b06", group: "bonus", n: "B06", title: "APIs & web services", dur: "6 min read",
      summary: "Opening a controlled door for external systems to read and write Business Central data.",
      concepts: [
        { h: "API pages", p: "PageType = API. The APIPublisher, APIGroup, EntityName and EntitySetName properties together construct the URL external systems will call." },
        { h: "Standard verbs", p: "GET reads, POST creates, PATCH updates, DELETE removes. The same page definition supports all of them, governed by permissions." },
        { h: "Controlled exposure", p: "You choose which fields are exposed. An API page is a deliberate contract, not a database connection." }
      ],
      why: "APIs are what turn Business Central from a destination into a component of a wider system — websites, mobile apps and partner platforms all working from the same live data.",
      check: { q: "Why expose an API page rather than granting direct database access?", a: "Because the API is a versioned contract with controlled fields and enforced business logic. Direct access bypasses validation and couples the external system to your internal schema." }
    },
    {
      id: "al-b07", group: "bonus", n: "B07", title: "Extension upgrades & versioning", dur: "6 min read",
      summary: "Carrying live data forward when a new version installs.",
      concepts: [
        { h: "The upgrade problem", p: "An extension already running holds live data. A new version that changes structure has to bring that data with it." },
        { h: "Upgrade codeunits", p: "A codeunit with Subtype = Upgrade and OnUpgradePerCompany or OnUpgradePerRecord triggers runs automatically, once, at install time." },
        { h: "Version semantics", p: "The four parts — major, minor, build, revision — communicate the nature of the change. Major signals something a consumer needs to pay attention to." },
        { h: "Breaking changes", p: "Adding a field is safe. Removing or retyping a field that other extensions depend on is not. Obsolete markings exist to deprecate gracefully rather than break abruptly." }
      ],
      why: "A good upgrade is invisible to users. Achieving that requires deciding what happens to existing data before you ship the change, not after someone reports it.",
      check: { q: "Why mark a field Obsolete rather than deleting it?", a: "Because dependent extensions compile against it. Obsolete gives them a deprecation window with a warning instead of a sudden failure." }
    },
    {
      id: "al-b08", group: "bonus", n: "B08", title: "Queries", dur: "5 min read",
      summary: "Joining and summarising multiple tables into one result set.",
      concepts: [
        { h: "Joining without manual code", p: "Nested dataitems define the relationship between tables. The platform handles the join, which is both less code and faster than looping." },
        { h: "Aggregation", p: "Column methods — Sum, Count, Average, Min, Max — compute totals in the query rather than in an AL loop over every record." },
        { h: "Where queries fit", p: "Queries commonly feed reports, API pages and Power BI datasets. When you find yourself writing nested FindSet loops to produce a total, a query is usually the better answer." }
      ],
      why: "A query pushes the work to the database, which is built for it. The same aggregation done in AL loops is slower and scales worse.",
      check: { q: "When should you prefer a query to nested FindSet loops?", a: "Whenever you are joining tables to produce aggregates. The database performs the aggregation once instead of AL iterating every row." }
    },
    {
      id: "al-b09", group: "bonus", n: "B09", title: "XMLports", dur: "5 min read",
      summary: "Structured import and export, replacing manual re-entry.",
      concepts: [
        { h: "Field mapping", p: "textelement and tableelement definitions map external file structure onto Business Central fields explicitly." },
        { h: "Both directions", p: "The same object handles import and export. Direction is a runtime choice, not a separate object." },
        { h: "Typical uses", p: "Vendor price lists in, customer or transaction data out to a partner system. Anywhere a recurring file exchange exists." }
      ],
      why: "Manual re-entry of external data is both slow and the most reliable source of transcription errors. XMLports make the exchange repeatable and auditable.",
      check: { q: "Why is an XMLport preferable to a one-off import script?", a: "Because it is a versioned object in the extension, re-runnable, and it validates through the same field logic as any other write." }
    },
    {
      id: "al-b10", group: "bonus", n: "B10", title: "Extension dependencies", dur: "5 min read",
      summary: "How every extension builds safely on the layer beneath it.",
      concepts: [
        { h: "The layer stack", p: "System Application, then Base Application, then your extension, then possibly others on top of yours. Each layer depends downward, never upward." },
        { h: "Declaring dependencies", p: "The dependencies array in app.json lists id, name, publisher and minimum version for anything your extension requires." },
        { h: "Version compatibility", p: "If the installed dependency is older than the declared minimum, installation fails rather than producing runtime errors later." }
      ],
      why: "Dependencies are what let a whole ecosystem of extensions coexist. Because nothing modifies the layer below it, updates flow upward without breaking what sits above.",
      check: { q: "Why does declaring a minimum version matter more than declaring the dependency itself?", a: "Because the dependency will usually be present. The version is what guarantees the specific objects and events you compiled against actually exist." }
    },
    {
      id: "al-b11", group: "bonus", n: "B11", title: "AL debugging", dur: "5 min read",
      summary: "Breakpoints, stepping and watch variables — a real debugging session.",
      concepts: [
        { h: "Breakpoints", p: "A breakpoint pauses execution at a chosen line so you can inspect state at that exact moment rather than inferring it afterwards." },
        { h: "Stepping", p: "Step Over runs the next line, Step Into enters a called procedure, Step Out returns to the caller. Choosing correctly is how you narrow a problem quickly." },
        { h: "Watching variables", p: "The watch panel shows values updating as execution proceeds. The step where a value first becomes wrong is where the bug is." }
      ],
      why: "Debugging replaces guessing with observation. Developers who add Message() statements to trace behaviour are doing debugging slowly and with side effects.",
      check: { q: "What is the debugging advantage over inserting Message() calls?", a: "No code change, no risk of shipping the trace, full state visibility rather than only the values you thought to print, and you can change what you inspect without restarting." }
    },
    {
      id: "al-b12", group: "bonus", n: "B12", title: "Telemetry & performance", dur: "6 min read",
      summary: "Monitoring an extension after go-live — the work that starts when deployment ends.",
      concepts: [
        { h: "Application Insights", p: "Business Central emits telemetry signals that can be collected and queried — errors, slow operations, feature usage." },
        { h: "Finding bottlenecks", p: "Long-running operations surface in telemetry with the context needed to trace back to a specific procedure or query." },
        { h: "Closing the loop", p: "Fix, redeploy, measure again. Without the second measurement you have a change, not an improvement." }
      ],
      why: "Performance problems in production are rarely reproducible on demand. Telemetry is how you find them without waiting for a user to describe a slow afternoon.",
      check: { q: "Why is 'fix and move on' insufficient for a performance issue?", a: "Because the fix is a hypothesis. Re-measuring is what turns it into a verified improvement — and occasionally reveals the bottleneck was elsewhere." }
    },
    {
      id: "al-b13", group: "bonus", n: "B13", title: "ControlAddIns", dur: "5 min read",
      summary: "Embedding custom HTML, CSS and JavaScript controls that talk both ways with AL.",
      concepts: [
        { h: "When standard controls run out", p: "Signature capture, interactive maps, specialised charts — things the standard page controls do not offer." },
        { h: "Definition", p: "A controladdin object references Scripts, StyleSheets and a StartupScript. Your web assets are packaged inside the extension." },
        { h: "Two-way communication", p: "AL calls into JavaScript through defined procedures; JavaScript raises events back into AL through EventTrigger procedures. Both directions are explicit." }
      ],
      why: "ControlAddIns extend the interface without leaving the platform — the control still lives inside Business Central, with its data and its security model.",
      check: { q: "What is the maintenance consideration with ControlAddIns?", a: "You now own web code inside a Business Central extension: browser compatibility, library updates and security are your responsibility rather than the platform's." }
    },
    {
      id: "al-b14", group: "bonus", n: "B14", title: "Table & page extensions", dur: "5 min read",
      summary: "Extend, never modify — adding fields alongside base objects rather than inside them.",
      concepts: [
        { h: "You cannot edit base objects", p: "Microsoft's tables and pages are not editable. This is a feature: it is what makes their updates safe to apply." },
        { h: "tableextension", p: "Adds fields to an existing table. They are appended, stored separately, and belong to your extension." },
        { h: "pageextension", p: "Adds fields and actions to an existing page, positioned precisely with addafter, addbefore, addfirst or addlast." }
      ],
      why: "This is the single most-used pattern in real Business Central development. Most client customisation is a table extension plus a page extension plus an event subscriber.",
      check: { q: "What happens to your added fields when Microsoft updates the base table?", a: "Nothing. They live in your extension, keyed to the base record, so the base update applies cleanly and your fields persist." },
      code: "tableextension 50100 \"Customer Ext\" extends Customer\n{\n    fields\n    {\n        field(50100; \"Loyalty Points\"; Integer)\n        {\n            Caption = 'Loyalty Points';\n            MinValue = 0;\n        }\n    }\n}"
    },
    {
      id: "al-b15", group: "bonus", n: "B15", title: "FlowFields & FlowFilters", dur: "6 min read",
      summary: "Calculated values that are always correct because they are never stored.",
      concepts: [
        { h: "The stored-total problem", p: "A stored balance must be updated everywhere it could change. Miss one path and it drifts out of sync — silently, and usually for months." },
        { h: "FlowFields", p: "FieldClass = FlowField with a CalcFormula. The value is computed on demand from related records, so it cannot drift." },
        { h: "CalcFields", p: "FlowFields are not populated automatically when a record is read. CalcFields() must be called — a frequent source of 'the value is zero' confusion." },
        { h: "FlowFilters", p: "A FlowFilter narrows the FlowField calculation at runtime — a date range, a dimension — without changing the formula itself." }
      ],
      why: "FlowFields eliminate an entire category of data-integrity bug. The trade-off is computation cost on read, which matters on large datasets and is worth knowing before you use them everywhere.",
      check: { q: "A FlowField shows zero even though related records exist. What is the likely cause?", a: "CalcFields() was not called. FlowFields are not calculated on a plain Get or FindSet." },
      code: "field(50101; Balance; Decimal)\n{\n    FieldClass = FlowField;\n    CalcFormula = Sum(\"Loyalty Entry\".Points\n                  WHERE(\"Customer No.\" = FIELD(\"No.\")));\n    Editable = false;\n}"
    },
    {
      id: "al-b16", group: "bonus", n: "B16", title: "Job Queue entries", dur: "5 min read",
      summary: "Scheduling codeunits to run automatically, monitored and reliable.",
      concepts: [
        { h: "Scheduled execution", p: "A Job Queue entry runs a codeunit or report on a defined recurrence — daily, weekly, on specific weekdays, at a set time." },
        { h: "Status monitoring", p: "Entries report Ready, In Process, Success or Error, with the error message retained. Unmonitored job queues are how a nightly process silently stops running for a month." },
        { h: "Typical uses", p: "Nightly data syncs, recurring report distribution, automated reminders, periodic reconciliation routines." }
      ],
      why: "Background scheduling is where automation stops depending on a person remembering. The discipline that matters is monitoring — a failed job that nobody sees is worse than a manual process.",
      check: { q: "What operational practice should always accompany a job queue entry?", a: "A monitoring or alerting path for the Error status. Otherwise the failure mode is silent and the discovery is accidental." }
    },

    /* ---- WORKFLOW ---- */
    {
      id: "al-w1", group: "workflow", n: "W1", title: "From ticket to branch", dur: "5 min read",
      summary: "How a change starts — reading the work item before opening the editor.",
      concepts: [
        { h: "Start with the ticket", p: "Title, description and acceptance criteria define what 'done' means. Reading them properly is faster than discovering the requirement during code review." },
        { h: "Branch naming", p: "A convention like feature/1234-add-loyalty-points encodes type, ticket number and intent. Anyone scanning the branch list knows what each one is." },
        { h: "Link branch to work item", p: "Azure DevOps links the branch back to the ticket, which gives you traceability from requirement to commit without maintaining it manually." },
        { h: "One branch, one purpose", p: "Scoped branches are easier to review, easier to test and possible to revert. A do-everything branch is none of those." }
      ],
      why: "Most review friction originates before any code is written — in an unclear ticket or an over-scoped branch. Fixing it here is far cheaper than fixing it in the pull request.",
      check: { q: "Why is a narrowly scoped branch easier to revert?", a: "Because reverting it removes exactly one change. A branch containing three unrelated fixes cannot be partially undone without further work." }
    },
    {
      id: "al-w2", group: "workflow", n: "W2", title: "Developing & committing", dur: "6 min read",
      summary: "Object ID discipline, meaningful commits, and staying in sync with main.",
      concepts: [
        { h: "Object ID ranges", p: "Each team or extension has an assigned range. Straying outside it produces collisions that are painful to resolve once objects exist in multiple environments." },
        { h: "Commit messages", p: "'fixes' tells a future reader nothing. 'Add loyalty points calculation to Customer table' explains the change without opening the diff." },
        { h: "One idea per commit", p: "Small commits are reviewable, testable and revertible individually. A single commit containing three changes is effectively unreviewable." },
        { h: "Sync regularly", p: "Pull or rebase from main frequently. A branch that drifts for two weeks produces a merge conflict proportional to the drift." }
      ],
      why: "Commit history is documentation that writes itself, if you let it. The effort is small and paid entirely by whoever investigates a regression in six months — often you.",
      check: { q: "Why does infrequent syncing with main create disproportionate work?", a: "Conflicts compound. Resolving one day of divergence is mechanical; resolving three weeks of it requires understanding changes you were not involved in." }
    },
    {
      id: "al-w3", group: "workflow", n: "W3", title: "Pull requests & code review", dur: "6 min read",
      summary: "The checkpoint before main — automated checks, human review, and merge.",
      concepts: [
        { h: "A good PR description", p: "What changed, why, and what a reviewer should look at. The linked work item supplies the requirement; the description supplies the reasoning." },
        { h: "Automated checks first", p: "Build and automated tests run before a human reviews. Reviewer time is expensive; let the pipeline catch what it can." },
        { h: "Review etiquette", p: "Ask questions and suggest alternatives rather than issuing verdicts. 'Would SetRange work better here?' invites a conversation; 'this is wrong' invites defensiveness." },
        { h: "Merge on green", p: "Approvals plus passing checks. Merging past a failing pipeline is how a broken main branch becomes normal." }
      ],
      why: "Code review is the highest-value knowledge-transfer mechanism a team has. Its function is not only catching defects — it is spreading understanding of the codebase.",
      check: { q: "Why does the tone of review comments materially affect code quality?", a: "Because defensive authors defend rather than reconsider. Curious framing produces changed code; adversarial framing produces justified code." }
    }
  ]
},

/* ---------------- GIT ESSENTIALS ---------------- */
{
  code: "GIT", track: "developer", accent: "teal",
  title: "Git Essentials",
  tagline: "Version control fundamentals — useful well beyond Business Central.",
  audience: "Any developer, any new technical joiner",
  desc: "Tool-agnostic foundations. Useful for AL developers and equally for anyone else at Talan touching a repository.",
  lessons: [
    {
      id: "git-01", n: "01", title: "What is Git?", dur: "5 min read",
      summary: "The mental model: three areas locally, and one shared copy remotely.",
      concepts: [
        { h: "The problem it replaces", p: "project_final, project_final_v2, project_final_REALLY_final. Version control replaces filename conventions with a real history." },
        { h: "Three local areas", p: "Working directory (where you edit), staging area (what you have marked for the next commit), and repository (the permanent recorded history). git add moves between the first two; git commit between the second and third." },
        { h: "Local and remote", p: "Your full history lives on your machine. push sends commits to the shared remote; pull brings others' commits down. Git is distributed — the remote is a convention, not a requirement." },
        { h: "Nothing is lost", p: "Committed work is recoverable even after it appears deleted. This is the property that makes Git safe to experiment in." }
      ],
      why: "Most Git confusion comes from not knowing which of the three areas a command affects. Once the model is clear, the commands stop feeling arbitrary.",
      check: { q: "What is the difference between a file being modified and being staged?", a: "Modified means changed in the working directory. Staged means marked for inclusion in the next commit. A modified but unstaged file will not be committed." },
      code: "git status              # what is modified, what is staged\ngit add file.al         # working dir -> staging\ngit commit -m \"...\"     # staging -> repository\ngit push                # local repo -> remote"
    },
    {
      id: "git-02", n: "02", title: "Branching & merging", dur: "5 min read",
      summary: "Isolating work safely, then bringing it back together.",
      concepts: [
        { h: "A branch is a moving pointer", p: "Not a copy of the project. Branching is cheap precisely because nothing is duplicated — which is why creating one per task is normal practice." },
        { h: "Isolation", p: "Work on a branch does not affect main until merged. Several people can work in parallel without stepping on each other." },
        { h: "Merging", p: "Combines a branch's commits into another. When the same lines changed on both sides, Git asks you to decide — that is a conflict, not an error." }
      ],
      why: "Branching is what makes parallel work possible without coordination overhead. It is the foundation the pull request workflow is built on.",
      check: { q: "Why is creating a branch inexpensive in Git?", a: "Because a branch is a pointer to a commit, not a copy of the files. Creating one is effectively instant regardless of project size." },
      code: "git checkout -b feature/1234-loyalty\n# ...work, commit...\ngit checkout main\ngit merge feature/1234-loyalty"
    },
    {
      id: "git-03", n: "03", title: "Commits & history", dur: "5 min read",
      summary: "Log, diff and blame — reading a project's memory.",
      concepts: [
        { h: "log", p: "The sequence of commits, with author, date and message. This is why message quality matters — log is the interface to it." },
        { h: "diff", p: "What actually changed, line by line, between any two points in history." },
        { h: "blame", p: "Which commit last touched each line. Despite the name, its usual purpose is finding the context and reasoning behind a line, not assigning fault." }
      ],
      why: "History is only as useful as it is readable. Disciplined commits turn these three commands into a genuine investigative tool.",
      check: { q: "What makes git blame useful beyond finding who wrote something?", a: "It surfaces the commit, and therefore the message and linked work item, which explains why the line exists at all." },
      code: "git log --oneline --graph\ngit diff main..feature/1234\ngit blame src/LoyaltyCalc.al"
    },
    {
      id: "git-04", n: "04", title: "Resolving conflicts", dur: "5 min read",
      summary: "What a conflict actually is, and how to resolve one without panic.",
      concepts: [
        { h: "A conflict is a question", p: "Git found the same lines changed on both branches and cannot know which is correct. It is asking, not failing." },
        { h: "Conflict markers", p: "The <<<<<<<, ======= and >>>>>>> markers delimit the two versions. Resolution means editing the file to the correct final state and removing the markers entirely." },
        { h: "Prevention", p: "Frequent syncing and narrowly scoped branches reduce both frequency and size of conflicts. Most painful conflicts are the result of a long-lived branch." }
      ],
      why: "Conflicts are the most common reason developers avoid branching. Understanding them as a routine question rather than a failure removes that hesitation.",
      check: { q: "Why do long-lived branches produce worse conflicts?", a: "More divergence means more overlapping changes, and the resolver has to understand changes made by others over a longer period." }
    },
    {
      id: "git-05", n: "05", title: "Rebase, stash & cherry-pick", dur: "6 min read",
      summary: "Intermediate tools for a cleaner history — and when not to reach for them.",
      concepts: [
        { h: "rebase", p: "Replays your commits on top of another branch, producing a linear history instead of a merge commit. Never rebase a branch others have already pulled." },
        { h: "stash", p: "Temporarily shelves uncommitted changes so you can switch context, then restores them. Useful for the urgent interruption." },
        { h: "cherry-pick", p: "Applies a single commit from one branch onto another. Useful for hotfixes; a warning sign if it becomes routine, since it usually means branches are scoped wrongly." }
      ],
      why: "These are sharp tools. They make history cleaner when used deliberately and cause genuine confusion when used casually on shared branches.",
      check: { q: "Why is rebasing a shared branch discouraged?", a: "It rewrites commit history. Anyone who already pulled the old commits now has a divergent copy, and reconciling that is unpleasant for everyone involved." },
      code: "git stash\ngit checkout hotfix\ngit stash pop\n\ngit rebase main         # only on your own branch\ngit cherry-pick a1b2c3d"
    }
  ]
},

/* ---------------- ALCS: AL LANGUAGE CHEAT SHEET ---------------- */
{
  code: "ALCS", track: "developer", accent: "magenta", noVideo: true,
  title: "AL Language Cheat Sheet",
  tagline: "Look it up in ten seconds, not ten minutes.",
  audience: "AL developers who already know the objects and want the fact, not the tutorial",
  desc: "Fast lookup reference for AL syntax, methods and object snippets — for developers who already know the objects and want the fact, not the tutorial.",
  groups: [
    { key: "syntax", label: "Syntax" },
    { key: "methods", label: "Methods" },
    { key: "objects", label: "Objects" },
    { key: "tooling", label: "Tooling" }
  ],
  lessons: [
    {
      id: "alcs-01-syntax-basics", group: "syntax", n: "01", title: "Syntax basics: assignment, punctuation, arrays",
      dur: "10 min read",
      summary: "The handful of symbols that make AL read differently from a plain business-logic description: assignment, member access, grouping, indexing, scope, range, and arrays.",
      concepts: [
        { h: "Assignment is one symbol, not two", p: "AL writes assignment as `:=`, a colon immediately followed by an equal sign, treated as a single token. `Customer.\"Phone No.\" := '312-555-1212';` reads as 'assign the value on the right to the field on the left.' There is no bare `=` for assignment in AL — a lone `=` only ever appears inside a comparison or a filter expression, so if you see `:=` failing to compile, the first thing to check is a stray space or a missing colon." },
        { h: "The seven punctuation operators", p: "Beyond assignment, AL leans on a small fixed set of symbols: `.` for member access (`Customer.Name`), `()` for grouping and calls, `[]` for indexing into an array, `::` for scope (`Customer.Status::Open` picks a value off an enum or option), `..` for a range (used inside filters and `CalcDate`-style expressions), and `@` to mark a filter as case-insensitive. Reading unfamiliar AL usually comes down to recognizing which of these seven you're looking at." },
        { h: "Arrays: bounded but generous", p: "An AL array can have up to 10 dimensions and up to 1,000,000 total elements across a single variable. You declare one by adding the `array` keyword in front of the variable's type, e.g. `MyValues: array[10] of Decimal;`. In practice most AL arrays you'll meet are one-dimensional and small — used for things like a fixed set of period buckets — because a table with a key is almost always the better tool once the data needs to persist or grow." },
        { h: "Why this matters before the object types", p: "None of the twelve AL object types make sense until these symbols are second nature — a trigger body is just punctuation-heavy assignment and comparison wrapped in an object shell. Treat this lesson as the alphabet, not the grammar." }
      ],
      why: "Every AL error message that isn't a missing-object error is usually a punctuation or assignment mistake — a `.` where a `:=` was needed, or vice versa. Knowing the seven symbols cold turns a five-minute compile-error hunt into a two-second glance.",
      check: { q: "What is wrong with this line, and what does it actually do as written: `Customer.\"Phone No.\" = '312-555-1212';`?", a: "It uses `=` instead of `:=`. Inside a trigger body this is not a valid standalone statement — AL will reject it at compile time, because `=` produces a Boolean comparison result, not an assignment, and a bare comparison isn't a legal statement on its own." },
      code: "// Assignment: one symbol, ':='\nCustomer.\"Phone No.\" := '312-555-1212';\n\n// Punctuation in context\nCustomer.Name;                          // . member access\n(UnitPrice + Freight) * Quantity;       // () grouping\nDailyRates[3];                          // [] indexing\nif Customer.Status = Customer.Status::Open then; // :: scope\nCustomer.SetFilter(\"Posting Date\", '%1..%2', StartDate, EndDate); // .. range\nCustomer.SetFilter(Name, '@micro*');    // @ case-insensitive\n\n// Array declaration: up to 10 dimensions, 1,000,000 elements total\nvar\n    DailyRates: array[7] of Decimal;"
    },
    {
      id: "alcs-02-variables", group: "syntax", n: "02", title: "Variables: global, local, protected",
      dur: "8 min read",
      summary: "What each scope means and when a codeunit needs which one — kept deliberately brief, because the source material only names the three scopes without walking through examples.",
      concepts: [
        { h: "Global variables: declared once, visible everywhere in the object", p: "A global variable sits in the `var` section at the top of an object, outside any procedure. Every procedure and trigger in that object can read and write it directly, without it being passed as a parameter. This is the right choice for state that genuinely belongs to the object as a whole — a Record variable a codeunit's procedures all operate on, for example." },
        { h: "Local variables: scoped to one procedure", p: "A local variable is declared in the `var` section inside a specific procedure. It exists only for the duration of that procedure's execution and is invisible to every other procedure in the object, even ones defined right next to it. Reaching for a local variable by default, and promoting it to global only when more than one procedure genuinely needs it, keeps an object's state easy to reason about." },
        { h: "Protected variables: shared within the object, hidden from outside callers", p: "A `protected` variable is visible to the object that declares it and to code that extends or implements it, but not to unrelated external callers the way a `public` procedure's parameters would be. It sits between global (visible inside the object) and a private implementation detail exposed through a getter — useful when a base object wants to share state with what builds on it, but not with everyone." },
        { h: "Why this lesson stays short", p: "The source slide for this topic names the three scopes — global, local, protected — without further elaboration or examples. Rather than inventing detail the deck doesn't provide, this cheat sheet entry stays at the level the source actually supports: know the three names and what each buys you, and consult the AL object reference for the specific object type when you need worked examples." }
      ],
      why: "Defaulting everything to global is a common beginner habit that turns into a debugging headache the moment two procedures both quietly depend on the same shared state — scoping a variable correctly the first time avoids that entirely.",
      check: { q: "A codeunit has two unrelated procedures that each need their own temporary counter. Should that counter be global or local, and why?", a: "Local, declared inside each procedure. A global variable would be shared by both procedures, meaning one procedure's counter value could leak into or get clobbered by the other's — exactly the kind of coupling that scoping to local avoids." }
    },
    {
      id: "alcs-03-operators", group: "syntax", n: "03", title: "Operators quick reference",
      dur: "8 min read",
      summary: "Member, assignment, grouping, indexing, scope and range operators, plus the arithmetic/Boolean/relational categories the deck names but doesn't spell out symbol by symbol.",
      concepts: [
        { h: "The seven symbol operators, recapped", p: "The same seven symbols from the syntax-basics lesson are, formally, AL's operator set: `.` (member of), `:=` (assignment), `()` (grouping), `[]` (indexing), `::` (scope), `..` (range), and `@` (case-insensitive). If you already have those from Lesson 01, this entry doesn't add new symbols — it names them as operators rather than punctuation, because that's how the source material categorizes them." },
        { h: "Operator behavior depends on the data type involved", p: "The source deck frames its operator table as being 'grouped by category, depending on the data types we are using with a particular operator' — the same symbol can behave differently depending on what it's applied to. This is a real and important property of AL (and of most languages with operator overloading), even though the specific symbol-by-symbol arithmetic/Boolean/relational tables aren't included in what follows." },
        { h: "Arithmetic, Boolean and relational operators: named, not detailed here", p: "The deck dedicates a slide title to each of these three categories — arithmetic operators, Boolean operators, relational operators — but the slide content captured for this cheat sheet stops at the title; no symbol table was extracted for any of the three. Rather than guessing at a list, this entry flags the gap honestly: **[expand later]**, once the original slide deck's tables for these three categories can be reviewed directly." },
        { h: "What to do in the meantime", p: "For arithmetic, Boolean and relational operators specifically, Microsoft's own AL language reference documentation is the reliable source until this lesson is filled in — treat this cheat sheet entry as confirming that these three categories exist and are distinct in AL, not as the full symbol table for any of them." }
      ],
      why: "A cheat sheet that quietly guesses at symbols it never confirmed would be worse than useless — it would look authoritative while being wrong. Flagging the gap here means nobody trusts a fabricated relational-operator table that was never actually in the source.",
      check: { q: "Why does this lesson list the seven punctuation-style operators in detail but only name arithmetic, Boolean and relational operators without listing their symbols?", a: "Because the source material behind this cheat sheet captured a full table for the seven punctuation operators (member, assignment, grouping, indexing, scope, range, case-insensitive), but only slide titles — no symbol tables — for the arithmetic, Boolean and relational categories. The lesson reflects exactly what was confirmed rather than inventing the missing tables." }
    },
    {
      id: "alcs-04-message-dialog", group: "methods", n: "04", title: "Message & Dialog methods",
      dur: "8 min read",
      summary: "Message(), Error(), Confirm() — three ways to talk to the user, and the one that stops your code cold when it fires.",
      concepts: [
        { h: "Message(): tells the user something, then keeps going", p: "`Message('Operation completed');` pops a dialog the user has to dismiss, but once dismissed, execution resumes exactly where it left off. Use it for confirmation that something succeeded — never for anything that needs the user to make a decision, because Message() has no return value to act on." },
        { h: "Error(): stops execution and rolls back", p: "`Error('Invalid value');` immediately halts the current process, shows the message, and rolls back any uncommitted changes made since the last commit point. This is the method to reach for the instant a business rule is violated and the operation genuinely cannot continue — there's no 'resume after' with Error(), by design." },
        { h: "Confirm(): the only one of the three that branches", p: "`if Confirm('Delete record?') then` returns a Boolean — Yes maps to true, No maps to false — and your code decides what happens next in either branch. This is the method for anything destructive or irreversible where the user should get a chance to back out." },
        { h: "Picking the right one under pressure", p: "A fast way to choose: if the code can't sensibly continue, use Error(). If the user just needs to know something happened, use Message(). If the next step depends on what the user wants, use Confirm(). Reaching for Message() where Error() was needed is a common code-review flag — it lets a broken process silently continue instead of stopping it." }
      ],
      why: "Using Message() where Error() belongs is one of the more dangerous small mistakes in AL — it lets a process that should have stopped keep running with bad data, and nobody notices until the bad data shows up somewhere downstream.",
      check: { q: "A validation check finds that a required field is blank. Should the code use Message() or Error(), and what actually happens if you pick the wrong one?", a: "Error() — the process cannot correctly continue with a required field blank. Using Message() instead would show the same text to the user but let execution continue anyway, meaning the record could still be inserted or modified with the missing value." },
      code: "// Message(): informs, execution continues\nMessage('Operation completed');\n\n// Error(): stops execution, rolls back uncommitted changes\nif Quantity <= 0 then\n    Error('Quantity must be greater than zero.');\n\n// Confirm(): returns Boolean, code branches on the answer\nif Confirm('Delete record?') then\n    Customer.Delete()\nelse\n    exit;"
    },
    {
      id: "alcs-05-string-methods", group: "methods", n: "05", title: "String methods",
      dur: "10 min read",
      summary: "StrLen, CopyStr, UpperCase, LowerCase, Format, Evaluate — the everyday text-handling toolkit, and the one pair (Format/Evaluate) that moves values in and out of text form.",
      concepts: [
        { h: "Measuring and slicing: StrLen, CopyStr", p: "`StrLen(Name)` returns how many characters a string holds — useful before writing into a fixed-length field, so you don't truncate silently. `CopyStr(Text, 1, 5)` extracts a substring starting at position 1 for 5 characters; the two arguments after the source string are start position and length, in that order, and mixing them up is a common source of an off-by-a-chunk bug." },
        { h: "Case conversion: UpperCase, LowerCase", p: "`UpperCase(Name)` and `LowerCase(Email)` return a new string in the requested case without modifying the original variable — like most AL string methods, they're non-mutating functions, not in-place transformations, so the result has to be assigned somewhere to be kept." },
        { h: "Format(): turning any value into text", p: "`Format(Today)` converts a non-text value — a date, a decimal, a Boolean — into its text representation, using the type's default display format unless you tell it otherwise. This is the method behind almost every place a non-text field gets concatenated into a message or a log line." },
        { h: "Evaluate(): the reverse direction, and the one that can fail", p: "`Evaluate(MyDate, TxtDate)` parses a text value into a typed variable — here, into a Date. Unlike Format(), Evaluate() can fail if the text doesn't parse into the target type, so its Boolean return value (unused in the simple example, but present) is worth checking before trusting the result in anything that processes external or user-typed input." },
        { h: "Format() and Evaluate() are inverses", p: "Format() goes typed-value-to-text; Evaluate() goes text-to-typed-value. Any time you're moving a value across a boundary that only speaks text — a CSV import, a message string, a URL parameter — one of these two methods is almost always involved." }
      ],
      why: "CopyStr's argument order (start, then length — not start and end) is the single most common string-method mistake in AL code review; getting it backwards doesn't error, it just silently returns the wrong substring.",
      check: { q: "You need the first 3 characters of a Customer No. that might be up to 20 characters long. Which call gets you that, and what would `CopyStr(CustNo, 3, 1)` give you instead by comparison?", a: "`CopyStr(CustNo, 1, 3)` — start at position 1, take 3 characters. `CopyStr(CustNo, 3, 1)` starts at position 3 and takes only 1 character, which is a different substring entirely — a reminder that the two numeric arguments are start position and length, not two endpoints." },
      code: "// Measuring and slicing\nLen := StrLen(Name);\nFirstFive := CopyStr(Text, 1, 5);\n\n// Case conversion\nUpperName := UpperCase(Name);\nLowerEmail := LowerCase(Email);\n\n// Typed value to text\nTodayAsText := Format(Today);\n\n// Text to typed value — check the return value on real input\nif Evaluate(MyDate, TxtDate) then\n    // MyDate now holds the parsed date\nelse\n    Error('%1 is not a valid date.', TxtDate);"
    },
    {
      id: "alcs-06-date-time-methods", group: "methods", n: "06", title: "Date & Time methods",
      dur: "9 min read",
      summary: "Today, CurrentDateTime, CalcDate — the three ways AL reads the clock, plus the date formula syntax that makes CalcDate useful.",
      concepts: [
        { h: "Today(): the current date", p: "`WorkDate := Today();` returns today's date with no time component. In AL, `WorkDate` is itself a special notion — a configurable working date separate from the real calendar date, commonly used in testing so a whole scenario can be run as if it were any date without changing the system clock." },
        { h: "CurrentDateTime(): date and time together", p: "`DT := CurrentDateTime();` returns the current system date and time as a single DateTime value, at whatever precision the system clock provides. Use this over Today() whenever the time component actually matters — logging when something happened, not just on what day." },
        { h: "CalcDate(): a date, offset by a formula", p: "`CalcDate('+1M', Today);` takes a date formula and a starting date, and returns the date that results from applying the formula. It's the method behind almost every 'due date', 'next period', or 'X days from now' calculation in Business Central." },
        { h: "Date formula syntax, briefly", p: "A date formula combines a sign (`+` or `-`), a number, and a unit letter: `D` for day, `WD` for weekday, `M` for month, `Y` for year — so `'+1M'` means 'one month later' and `'-7D'` means 'seven days earlier.' `CM` (current month) and similar period shortcuts also appear in formulas used elsewhere in Business Central, such as payment terms." }
      ],
      why: "Hardcoding a date calculation by hand — adding 30 to a day number and hoping the month doesn't roll over — is a recurring source of off-by-a-few-days bugs. CalcDate() with a proper date formula handles month and year boundaries correctly every time.",
      check: { q: "A payment term needs to calculate a due date exactly one month after the posting date. What's the CalcDate() call, and why is it more reliable than manually adding 30 to the day?", a: "`CalcDate('+1M', PostingDate)`. Manually adding 30 days doesn't reliably land one calendar month later — months have different lengths — while the '+1M' formula tells BC to move forward by a calendar month regardless of how many days that month actually has." },
      code: "// Today's date, no time component\nWorkDate := Today();\n\n// Current date and time together\nDT := CurrentDateTime();\n\n// A date, offset by a formula: one month later\nDueDate := CalcDate('+1M', Today);\n\n// A date, offset backward: seven days earlier\nReminderDate := CalcDate('-7D', DueDate);"
    },
    {
      id: "alcs-07-math-utility-methods", group: "methods", n: "07", title: "Math & Utility methods",
      dur: "8 min read",
      summary: "Round, Random, Clear, Sleep — a small grab-bag of methods that don't fit anywhere else, but that show up constantly once you're writing real AL.",
      concepts: [
        { h: "Round(): rounding to a precision, not a decimal count", p: "`Round(Amount, 0.01)` rounds `Amount` to the nearest 0.01 — the second argument is a precision value, not a number of decimal places, which is a subtle but important distinction from rounding functions in some other languages. `Round(Amount, 1)` rounds to the nearest whole number; `Round(Amount, 5)` rounds to the nearest 5." },
        { h: "Random(): a bounded random integer", p: "`Random(100)` returns a random integer, typically used where test data or a non-deterministic tie-breaker is genuinely needed. It's uncommon in real business logic — most AL code should be deterministic — but shows up in demo data generation and some load-testing scenarios." },
        { h: "Clear(): resets a variable to its default", p: "`Clear(CustomerRec)` resets the variable to its type's default/blank state — for a Record variable, that means every field goes back to its default value, as if freshly declared. This is different from `Init()` on a Record, which only resets the fields, not the variable's other state; `Clear()` is the more general-purpose reset that works on any variable type." },
        { h: "Sleep(): pausing execution", p: "`Sleep(1000)` pauses execution for the given number of milliseconds — 1000 here means one second. Legitimate uses are rare in day-to-day AL (retry logic with backoff, deliberately staged demo scripts); reaching for Sleep() to 'fix' a race condition is usually masking a deeper ordering problem rather than solving it." }
      ],
      why: "The Round() precision argument is the one beginners get backwards most often — passing '2' expecting two decimal places when the method actually wants a precision value like 0.01 produces a wildly wrong rounded amount that's easy to miss in testing with round numbers.",
      check: { q: "You want an amount rounded to the nearest cent. What's the correct Round() call, and what would `Round(Amount, 2)` actually do instead?", a: "`Round(Amount, 0.01)` rounds to the nearest 0.01, i.e. the nearest cent. `Round(Amount, 2)` rounds to the nearest 2 — a completely different and much coarser result, since the second argument is a precision value, not a decimal-place count." },
      code: "// Round to the nearest cent (precision, not decimal-place count)\nRoundedAmount := Round(Amount, 0.01);\n\n// A random integer between 0 and 99\nDieRoll := Random(100);\n\n// Reset a Record variable to its blank state\nClear(CustomerRec);\n\n// Pause for one second\nSleep(1000);"
    },
    {
      id: "alcs-08-record-db-methods", group: "methods", n: "08", title: "Record & Database methods",
      dur: "12 min read",
      summary: "The full lifecycle of a record — create it, find it, change it, remove it — plus the housekeeping methods that sit around that lifecycle.",
      concepts: [
        { h: "The lifecycle: Init, Insert, Modify, Delete", p: "`Init()` resets a record variable to its default values before you start filling it in. `Insert()` writes a new record to the table. `Modify()` writes changes to a record you already have loaded. `Delete()` removes it. All four operate on the record variable currently held in memory — none of them re-reads from the database first, so the variable has to already reflect the record you mean to act on." },
        { h: "Finding records: Get, FindFirst, FindSet, FindLast, Next", p: "`Get()` retrieves one record by its primary key — `Customer.Get('C0001');` — and is the fastest lookup when you already know the key. `FindFirst()` and `FindLast()` return the first or last record matching the current filters. `FindSet()` is the one you loop with: `if Customer.FindSet() then repeat ... until Customer.Next() = 0;`. `Next()` advances the cursor and returns 0 once there are no more records, which is what ends the loop." },
        { h: "Aggregate and housekeeping: Count, IsEmpty, Commit", p: "`Count()` returns how many records match the current filter. `IsEmpty()` answers the yes/no version of the same question without materializing a count, and is cheaper when all you need is 'are there any rows at all.' `Commit()` permanently saves everything done so far in the current transaction — including work outside the current procedure." },
        { h: "Get() vs FindFirst(): pick by what you know", p: "Use `Get()` when you have the primary key value in hand — it goes straight to the row. Use `FindFirst()`/`FindSet()` when you only have a filter and need whichever record (or set of records) satisfies it. Reaching for `FindFirst()` when a `Get()` would do is a common performance smell in code review — it filters and scans instead of doing a direct key lookup." },
        { h: "Commit() is the one to be careful with", p: "Calling `Commit()` inside a larger process locks in every change made so far, even changes made by other codeunits earlier in the same call chain, and it breaks the ability to roll everything back on a later error. The deck's own examples treat it as a deliberate, standalone step (`Commit();` with nothing else on the line) rather than something to sprinkle inside a loop." }
      ],
      why: "Choosing the wrong method here doesn't just cost performance — Get() vs FindFirst() on a large table is the difference between a key lookup and a table scan, and a misplaced Commit() can silently make a later rollback only partial. This is the table every AL developer ends up needing multiple times a day, which is exactly why it belongs in a cheat sheet rather than a tutorial.",
      check: { q: "You need to loop through every open Sales Order for a customer and total their amounts. Which methods do you reach for, and why not Get()?", a: "FindSet() to enter the loop and Next() to advance through it, because you don't know the primary keys in advance — you only have a filter (customer + open status). Get() only works when you already know the exact primary key of the single record you want." },
      code: "// Lifecycle\nRentalContract.Init();\nRentalContract.\"No.\" := 'RC-0001';\nRentalContract.Insert();\n\nRentalContract.Get('RC-0001');\nRentalContract.Status := RentalContract.Status::Active;\nRentalContract.Modify();\n\nRentalContract.Delete();\n\n// Looping a filtered set\nCustomer.SetRange(\"Country/Region Code\", 'TN');\nif Customer.FindSet() then\n    repeat\n        // process Customer\n    until Customer.Next() = 0;\n\n// Housekeeping\nTotal := Customer.Count();\nif Customer.IsEmpty() then\n    exit;\nCommit();"
    },
    {
      id: "alcs-09-filtering-validation-methods", group: "methods", n: "09", title: "Filtering & Validation methods",
      dur: "10 min read",
      summary: "SetRange, SetFilter, Reset, Validate, TestField — how you narrow down which records you're working with, and how you keep bad data from ever reaching the database.",
      concepts: [
        { h: "SetRange(): the simple, common case", p: "`Customer.SetRange(\"Country\", 'TN');` filters the record variable down to rows matching a single value or a from/to range. It's the method to reach for first — clearer to read than SetFilter() and covers the majority of real filtering needs." },
        { h: "SetFilter(): when you need an expression", p: "`Customer.SetFilter(Name, 'A*');` applies BC's full filter-expression syntax — wildcards, ranges, OR conditions — to a field. Reach for this once a plain value or range (what SetRange handles) isn't expressive enough." },
        { h: "Reset(): clearing filters, not data", p: "`Customer.Reset();` removes every filter currently applied to the record variable, returning it to an unfiltered state so the next Find/Get operates over the whole table again. It does not touch any data — only the filter state on that variable." },
        { h: "Validate(): assignment plus business rules", p: "`Customer.Validate(Name, 'Kacem');` doesn't just set the field — it runs the same OnValidate trigger logic that fires when a user types into that field on a page. Assigning a field directly (`Customer.Name := 'Kacem';`) skips that trigger entirely, which is exactly why Validate() is the safer default any time a field has validation logic behind it." },
        { h: "TestField(): fail loudly if a field is blank", p: "`Customer.TestField(Name);` throws a standard, consistent error if the field is empty or zero — it's a one-line guard clause used constantly before posting or processing, instead of hand-writing `if Name = '' then Error(...)` every time." }
      ],
      why: "Assigning a field directly instead of calling Validate() is a bug that hides well — the record saves fine, the field looks correct, and only later does something downstream break because the OnValidate logic (which might set a related field, or block an invalid combination) never ran.",
      check: { q: "Why does `Customer.Name := 'Kacem';` behave differently from `Customer.Validate(Name, 'Kacem');`, even though both end up with the same field value?", a: "Direct assignment only changes the value in memory — it does not run the field's OnValidate trigger. Validate() runs that trigger, which is where any business logic tied to changing that field (recalculating a dependent field, enforcing a rule) actually lives. Skipping Validate() means that logic silently never executes." },
      code: "// SetRange: simple value or range match\nCustomer.SetRange(\"Country\", 'TN');\n\n// SetFilter: expression syntax\nCustomer.SetFilter(Name, 'A*');\n\n// Reset: clear filters, keep data untouched\nCustomer.Reset();\n\n// Validate: assignment that also runs OnValidate logic\nCustomer.Validate(Name, 'Kacem');\nCustomer.Modify();\n\n// TestField: fail loudly if blank\nCustomer.TestField(Name);"
    },
    {
      id: "alcs-10-object-types", group: "objects", n: "10", title: "AL object types quick reference",
      dur: "10 min read",
      summary: "All the object types Business Central compiles, grouped into Data, UI and Logic layers, in one recap table.",
      concepts: [
        { h: "Three layers, one architecture", p: "Every AL object sorts into one of three layers: a Data layer that stores and structures business data, a UI layer that presents and lets a user manipulate that data, and a Logic layer that implements business rules and everything else that isn't pure storage or pure screen. Knowing which layer an object belongs to answers 'where does this logic go' before you've even opened VS Code." },
        { h: "The full recap table", p: "See the code block for the complete 13-row table: which object type sits in which layer, and what it's actually for. This is the source material's own end-of-course recap, not a re-derivation — it's the table to skim when you're not sure which object type a new requirement calls for." },
        { h: "One inconsistency worth flagging honestly", p: "The source material's early framing (introducing the three layers) groups Profile and XMLport under the Logic layer, alongside Codeunit and Report. Its later, more complete recap table — the one reproduced here — places Profile and XMLport under UI instead, and adds Permission Set (Data) and Report Extension (Logic), which the early framing doesn't mention at all. This lesson follows the later, fuller recap table as the more authoritative version, since it's the one that actually accounts for all 13 object types." },
        { h: "Why the grouping is useful day to day", p: "When a new requirement comes in — 'we need to track X' — sorting it into Data/UI/Logic first narrows the object-type decision fast: if it's about storing something new, you're choosing between Table and Table Extension; if it's about how something looks or is entered, Page or Page Extension; if it's about a rule or a calculation, Codeunit, Report, or Query." }
      ],
      why: "A developer who reaches for a Codeunit to store data, or a Table to implement a calculation, has picked the wrong layer for the job — it usually still compiles, but it fights the platform's own conventions and confuses the next developer who opens the object.",
      check: { q: "Which layer does Permission Set belong to in the recap table, and why might that classification surprise someone new to AL?", a: "Data layer. It's a bit surprising because permission sets feel like a security or access-control concern rather than data storage — but the recap groups it with Data because a permission set declares access rights over data objects (tabledata entries) rather than implementing business logic itself." },
      code: "// AL object types — Data / UI / Logic recap\n// Object              | Layer | What you use it for\n// Table                | Data  | Stores structured business data, with keys and validation\n// Table extension       | Data  | Adds fields, keys and triggers to a standard table\n// Enum                  | Data  | A fixed list of allowed values, shown as a dropdown\n// Enum extension        | Data  | Adds values to an enum owned by someone else\n// Query                 | Data  | Read-only join and aggregation across several tables\n// Permission set         | Data  | Declares who may read, write and execute what\n// Page                  | UI    | The screen users see and edit their data on\n// Page extension         | UI    | Adds fields, groups and actions to a standard page\n// Profile                | UI    | Binds a role to its Role Center and its customizations\n// XMLport                | UI    | Imports and exports data as XML or as delimited text\n// Codeunit               | Logic | Reusable business logic, plus event publishers and subscribers\n// Report                 | Logic | Formatted output of data, for print, PDF or Excel\n// Report extension        | Logic | Adds columns and layouts to a standard report"
    },
    {
      id: "alcs-11-snippets", group: "objects", n: "11", title: "VS Code snippet cheat sheet",
      dur: "14 min read",
      summary: "Every object-scaffolding snippet the AL Language extension ships, in one lookup table, with the codeunit skeleton fully spelled out as a worked example.",
      concepts: [
        { h: "One snippet per object type", p: "Typing the snippet prefix and pressing Tab scaffolds a compilable skeleton of that object type: `ttable` for a table, `tenum` for an enum, `tpage` for a page, `tcodeunit` for a codeunit, `treport` for a report, `txmlport` for an XMLport, `tquery` for a query. Extension objects get their own prefixes — `ttableext`, `tpageext`, `tenumext` — and there's a dedicated Role Center starter, `tpagerolecenterwaldo`, from the community Waldo's snippet pack many AL setups include." },
        { h: "What each skeleton actually gives you", p: "A table snippet gives you `fields { }` and `keys { }` sections with an `Id` and name placeholder. A codeunit snippet gives you an empty `trigger OnRun()` and a `var` section — nothing else, because a codeunit's real content is whatever procedures you add. A report snippet is the most opinionated: it pre-fills `UsageCategory`, `ApplicationArea`, `DefaultLayout` and a `dataset`/`requestpage` shell, because a report without those properties won't show up anywhere a user could run it." },
        { h: "Object snippets not covered by this source material", p: "The decks this cheat sheet is drawn from do not show a dedicated interface-object snippet (`tinterface`) or list one explicitly — interfaces are covered functionally in the AL Academy series instead. If your VS Code AL Language extension version ships one, it isn't documented here; treat that gap as **[expand later]**." },
        { h: "The codeunit skeleton, worked in full", p: "`codeunit Id MyCodeunit { trigger OnRun() begin end; var myInt: Integer; }` is the entire scaffold `tcodeunit` produces. Everything useful — `CheckAvailability()`, `CalculateRentalPrice()`, and so on — gets added by hand afterward; the snippet only guarantees the object compiles empty so you have a stable starting point." }
      ],
      why: "Typing a full object skeleton from memory is slow and error-prone — a missing brace or semicolon in a hand-typed `report` block costs more debugging time than the two seconds it takes to type `treport` and Tab. Knowing which snippet exists for which object type removes the temptation to hand-roll boilerplate.",
      check: { q: "You're about to add fields to an existing standard table without touching the original object. Which snippet, and what does 'without touching the original' actually mean here?", a: "ttableext. It scaffolds a tableextension object with its own fields/keys/fieldgroups sections that layer on top of the target table — the original table object is never opened or modified, which is what keeps the change upgrade-safe." },
      code: "// tcodeunit — the full skeleton this snippet produces\ncodeunit Id MyCodeunit\n{\n    trigger OnRun()\n    begin\n    end;\n\n    var\n        myInt: Integer;\n}\n\n// Snippet quick reference\n// ttable            -> table\n// tenum             -> enum\n// tpage             -> page\n// ttableext         -> tableextension\n// tpageext          -> pageextension\n// tcodeunit         -> codeunit\n// treport           -> report\n// txmlport          -> xmlport\n// tquery            -> query\n// tenumext          -> enumextension\n// tpagerolecenterwaldo -> Role Center page starter"
    },
    {
      id: "alcs-12-app-launch-json", group: "tooling", n: "12", title: "app.json & launch.json field reference",
      dur: "12 min read",
      summary: "Every field in both files, what it controls, and why confusing the two is the most common beginner mistake.",
      concepts: [
        { h: "launch.json: how VS Code runs and debugs your project", p: "launch.json configures running and debugging of the AL project inside VS Code — its main role is connecting your VS Code session to a Business Central sandbox. Pressing F5 reads this file to know which server to publish to, which object to open, and what to do on error. Nothing in launch.json ships with the extension; it's purely a local development-session setting." },
        { h: "launch.json field reference", p: "`type` is usually `al`. `request` defines the action, usually `launch`. `name` is the display name of that launch configuration (you can have several). `server` and `serverInstance` point at the Business Central environment. `authentication` sets the login method (UserPassword or AAD). `startupObjectType` and `startupObjectId` control what opens automatically after publish — a Page, a RoleCenter, and so on. `breakOnError` decides whether an unhandled error stops execution in the debugger." },
        { h: "app.json: what the extension actually is", p: "app.json is the main configuration file of an AL extension — it defines the extension's identity: what it's called, who publishes it, what version it's at, and what it depends on. This file's contents get compiled into the .app file and travel with the extension wherever it's installed; unlike launch.json, it isn't local-only." },
        { h: "app.json field reference", p: "`id` is the extension's GUID. `name` and `publisher` identify it in any environment it's installed to. `version` tracks releases. `brief` and `description` are the short and long summaries shown in the extension listing. `platform` and `application` declare which Business Central platform/application versions this extension supports. `dependencies` lists other extensions it requires. `idRanges` reserves the block of object IDs this extension is allowed to use — the setting that prevents two extensions in the same environment from colliding on object numbers." },
        { h: "Why beginners mix them up", p: "Both files are JSON, both live at the project root, and both feel like 'settings.' But launch.json only affects how you personally debug against a sandbox right now — change it and nothing about the extension itself changes. app.json defines the extension itself — its identity, its dependencies, its reserved ID range — and mistakes there (a wrong idRanges value, a missing dependency) show up as compile errors or publish failures that have nothing to do with your debug session." }
      ],
      why: "A developer who edits launch.json trying to fix an object ID collision, or edits app.json trying to point their debug session at a different sandbox, is editing the wrong file — the two control genuinely different things, and confusing them wastes real troubleshooting time on a change that can't possibly fix the symptom.",
      check: { q: "You need to reserve object IDs 78600–78649 so no other extension in the environment collides with your rental project. Which file, and which field?", a: "app.json, the idRanges field. It's part of the extension's own identity and compiled behavior, not a debug-session setting — launch.json has no concept of object ID ranges at all." },
      code: "// launch.json (excerpt)\n{\n  \"version\": \"0.2.0\",\n  \"configurations\": [\n    {\n      \"type\": \"al\",\n      \"request\": \"launch\",\n      \"name\": \"Rental Sandbox\",\n      \"server\": \"https://businesscentral.dynamics.com\",\n      \"serverInstance\": \"BC\",\n      \"authentication\": \"AAD\",\n      \"startupObjectType\": \"Page\",\n      \"startupObjectId\": 78603,\n      \"breakOnError\": true\n    }\n  ]\n}\n\n// app.json (excerpt)\n{\n  \"id\": \"a1b2c3d4-0000-0000-0000-000000000000\",\n  \"name\": \"Rental Management\",\n  \"publisher\": \"Talan\",\n  \"version\": \"1.0.0.0\",\n  \"brief\": \"Rental equipment management extension\",\n  \"description\": \"Adds equipment rental tracking to Business Central.\",\n  \"platform\": \"24.0.0.0\",\n  \"application\": \"24.0.0.0\",\n  \"dependencies\": [],\n  \"idRanges\": [ { \"from\": 78600, \"to\": 78649 } ]\n}"
    },
    {
      id: "alcs-13-vscode-essentials", group: "tooling", n: "13", title: "VS Code essentials for AL",
      dur: "10 min read",
      summary: "Explorer, Source Control, Debugger, Problems, Output, Status bar, Command Palette — one line each, so you know where to look before you go hunting.",
      concepts: [
        { h: "Explorer, Source Control, Search", p: "The Explorer view is the default view when you open a project — it lists the project's files and lets you select one or more for editing. Source Control, once activated, automatically tracks and displays every change made to files in the workspace. Search lets you find text across the whole project rather than one file at a time." },
        { h: "The code editor, the Debugger, and Extensions", p: "The code editor itself is where you spend most of your time — it activates when you create or open a file. The built-in Debugger handles basic troubleshooting of your running code. Out of the box, VS Code doesn't understand AL syntax at all; the AL Language extension, installed from the Extensions view, is what turns on AL-aware editing, IntelliSense, and compilation." },
        { h: "Problems and Output: where compiler feedback lands", p: "With an extension like AL that has advanced editing features, VS Code flags code problems while you type, colorizing problem lines and categorizing each one as an error, a warning, or an info message — all of them collected in the Problems panel. The Output panel is where VS Code displays messages during and after a command runs, such as a publish or a symbol download." },
        { h: "The status bar, left to right", p: "The status bar reports, in order: Git branch info (if source control is enabled), the current count of errors and warnings, cursor position (line and column), indentation size and type, the file's encoding, its line terminator (CR/LF), the language mode of the current file (click it to change languages), a feedback button, and a notification icon for product updates. It's a lot of information packed into one thin strip, but every item is a one-glance answer to a question you'd otherwise dig for." },
        { h: "The Command Palette: the fastest way to do anything", p: "The Command Palette gives quick access to standard and extended commands, and it's one of the most important tools in VS Code. You can open it via F1 (the most-used method), the Ctrl+Shift+P keyboard shortcut, the View menu, or the gear/Manage icon. Almost every AL-specific action — AL: Go!, AL: Download symbols, AL: Publish — is run through it rather than through a dedicated button." }
      ],
      why: "A developer who doesn't know the status bar shows a live error/warning count wastes time opening the Problems panel just to check whether the file compiles clean — the same information is sitting one glance away the entire time they're typing.",
      check: { q: "You want to know, without opening any panel, whether your current file has any compile errors. Where do you look?", a: "The status bar — it shows a running count of errors and warnings for the current file at all times, updated live as you type, without needing to open the Problems panel." }
    }
  ]
},

/* ---------------- HANDS: HANDS-ON DEVELOPMENT (RENTAL MANAGEMENT) ---------------- */
{
  code: "HANDS", track: "developer", accent: "lime", noVideo: true, progressiveCode: true,
  title: "Hands-on Development: Rental Management",
  tagline: "One extension, twelve object types, built module by module until it ships.",
  audience: "AL developers building their first real extension, technical consultants moving into development",
  desc: "A project-based walkthrough that builds one real extension — table to capstone — teaching each AL object type by using it, not just describing it.",
  groups: [
    { key: "setup", label: "Project setup" },
    { key: "objects", label: "Table, Enum, Page" },
    { key: "extensions", label: "Extensions & Codeunit" },
    { key: "reporting", label: "Report, XMLPort, Query" },
    { key: "rolecenter", label: "Role Center & Security" },
    { key: "capstone", label: "Capstone" }
  ],
  lessons: [
    {
      id: "hands-01-setup", group: "setup", n: "01", title: "Project setup: the Rental Management project",
      dur: "15 min read",
      summary: "What you're building across this series, the three-layer architecture every object in it belongs to, and the naming/numbering conventions that keep it all coherent.",
      layers: [
        { label: "Data Layer", items: ["Table", "Enum", "Query"], detail: "Stores and structures business data" },
        { label: "UI Layer", items: ["Page", "Page Extension"], detail: "Presents and manipulates data" },
        { label: "Logic Layer", items: ["Codeunit", "Report", "XMLPort", "Profile", "Permission Set"], detail: "Implements business rules" }
      ],
      concepts: [
        { h: "What you're building", p: "One project, six modules, twelve AL object types: a Rental Management extension that lets a business rent out equipment, price the rental automatically, report on availability, and import its equipment catalogue from a CSV file. Every lesson in this series adds one object to that same project — nothing here is a throwaway example." },
        { h: "Three layers, one architecture", p: "The project sorts into a Data layer (Table, Enum, Query — stores and structures the business data), a UI layer (Page, Page Extension — presents and manipulates it), and a Logic layer (Codeunit, Report, XMLPort, Profile, Permission Set — implements the business rules and everything else that isn't pure storage or pure screen). Knowing which layer an object belongs to answers 'where does this logic go' before you've even opened VS Code." },
        { h: "Naming and numbering conventions", p: "Every object in this project carries a two-part name: 'Tal' — the short company/project prefix required by the file-naming convention — at the very front, followed by 'Rental...' identifying the feature, so a table reads `Tal Rental Equipment`. Every object ID also sits inside one reserved range (78601 through 78638 by the time the capstone is done). This isn't cosmetic: the project's own definition of done later requires that every object 'carries the project prefix and a Caption that reads well in the client,' and that it sits inside the assigned ID range. Decide the prefix and reserve the range before writing the first table.",
          table: {
            headers: ["Rule", "Applies to"],
            rows: [
              ["'Tal' + object name, e.g. \"Tal Rental Equipment\"", "The AL object's declared name (table, page, codeunit, everything)"],
              ["Business-readable, no prefix, e.g. 'Rental Equipment'", "The Caption users actually see"],
              ["Prefix_ObjectNameExcludingAffix_FullTypeName.al", "The file name for a full object (AppSource notation)"],
              ["Prefix_ObjectNameExcludingAffix_FullTypeNameExt.al", "The file name for an extension object (AppSource notation)"]
            ]
          } },
        { h: "How the modules build on each other", p: "Modules 1–3 add Table, Enum and Page — the data you can see. Modules 4–6 add Table/Page extensions and the Codeunit — logic layered onto both standard and your own objects. Modules 7–10 add Report, Query and XMLPort — getting data in and out. Modules 11–12 add the Role Center, Profile, Enum extension and Permission Set — making the whole thing usable and secure for a real user. The capstone reuses every object type from modules 1–5 to ship one end-to-end feature. Compile after each object, and test it in the client before moving to the next." }
      ],
      why: "A project that skips this step usually ends up with inconsistent captions, an ID range that collides with something else in the environment, and a permission set built too late to catch objects nobody remembered to grant access to. Deciding the prefix and ID range on day one is the cheapest insurance in the whole series.",
      check: { q: "Why does this project reserve one contiguous ID range (78601–78638) instead of letting each new object take the next free number in the environment?", a: "A reserved range keeps every object belonging to one extension identifiable as a block, avoids collisions with other extensions' objects, and is what app.json's idRanges setting is actually for — the compiler and the publishing pipeline both rely on it to catch a numbering conflict before it reaches a shared environment." },
      exercise: "Before writing any AL: create (or open) app.json for the rental project, set idRanges to cover 78600–78649, and write down — in a comment at the top of your workspace notes — the exact object-name prefix you'll use for every object ('Tal Rental ...'). You'll reuse both decisions in every lesson that follows; changing them later means renaming objects you've already built."
    },
    {
      id: "hands-02-table", group: "objects", n: "02", title: "Table: TalRentalEquipment (78601)",
      dur: "20 min read",
      summary: "The object every other layer of this project depends on: what it stores, which properties matter on day one, and which triggers you'll actually write code in.",
      concepts: [
        { h: "What it is", p: "A table is the primary database object: structured business data behind a unique primary key, with as many fields as the business needs. Every other AL object in this project ultimately reads from or writes to a table." },
        { h: "Why it matters", p: "Tables are the foundation everything else is built on — customers, items, transactions, and in this project, rental equipment. A page can't display data that doesn't live in a table first, and a codeunit has nothing to validate without one." },
        { h: "When to use it", p: "Create a table when you need persistent storage for business data that will be queried, updated, and reported on over time. If the data only exists for the duration of one process (a working buffer, an intermediate calculation), a temporary record or a different pattern is usually the better fit — but that's outside what this table is for." },
        { h: "Table properties worth setting deliberately", p: "A handful of properties decide how the table is identified, captioned, looked up, and scoped — worth setting deliberately rather than leaving at their defaults.",
          table: {
            headers: ["Property", "Description", "Options / Example"],
            rows: [
              ["Caption", "The string that identifies the table in the user interface.", "Example: 'Tal Rental Contract'"],
              ["DataCaptionFields", "Sets the fields that appear to the left of the caption on pages that display the content of this table.", "Example: \"No.\",\"Customer Name\""],
              ["DataPerCompany", "Sets a value that indicates whether the table data applies to all the companies in the database or only the current company.", "true = company-specific (default) ; false = shared across companies"],
              ["DrillDownPageID", "Sets the ID of the page to use as a drill-down.", "Example: \"Tal Rental Contract List\""],
              ["LookupPageID", "Sets the ID of the page to use as a lookup.", "Example: \"Customer List\""],
              ["LinkedObject", "Available for on-premise only; specifies a link to a SQL Server object.", "SQL object reference"],
              ["Permissions", "Sets whether an object has additional permissions required to perform operations on one or more tables.", "Example: tabledata Customer = rimd"],
              ["TableType", "Specifies the table type.", "Normal, CRM, ExternalSQL, Exchange, MicrosoftGraph"],
              ["ExternalName", "Appears when TableType is CRM or ExternalSQL; specifies the name of the original table in the external database.", "Example: 'dbo.Customers'"]
            ]
          } },
        { h: "Triggers you'll actually use", p: "Eight triggers cover a table's whole lifecycle — most of your business-rule code ends up living in one of these.",
          table: {
            headers: ["Table Trigger", "Description", "Example Use"],
            rows: [
              ["OnInsert()", "Runs automatically when a new record is inserted into the table.", "Initialize default values before saving a record"],
              ["OnModify()", "Runs automatically when an existing record is modified.", "Validate changes before updating data"],
              ["OnDelete()", "Runs automatically before a record is deleted.", "Prevent deletion if conditions are not met"],
              ["OnRename()", "Runs automatically when the primary key is renamed.", "Log or validate key changes"],
              ["OnValidate()", "Runs when a field value is validated or changed.", "Check business rules for a field"],
              ["OnLookup()", "Runs when a lookup is triggered for a field.", "Open a custom lookup page"],
              ["OnDrillDown()", "Runs when a drill-down action is triggered.", "Open related records or details"],
              ["OnAssistEdit()", "Runs when the AssistEdit button (...) is selected.", "Generate automatic document numbers"]
            ]
          } },
        { h: "In the rental project", p: "TalRentalEquipment (table 78601) stores No., Description, Equipment Type (the enum built in the next lesson), Daily Rental Price, Available (a status flag), and Last Maintenance Date, with a secondary key on Equipment Type." }
      ],
      why: "A weak primary key or a missing secondary key doesn't show up in testing with ten rows — it shows up as a slow equipment list once the table holds a few thousand rows and the rental-manager view filters by Equipment Type on every load. Getting the keys right at table-design time is far cheaper than adding an index after the page is already built and users are complaining.",
      check: { q: "Why does TalRentalEquipment need a secondary key on Equipment Type, given the primary key is already No.?", a: "The primary key (No.) is what makes each row unique, but it doesn't help BC find or sort records by Equipment Type efficiently. Any page or report that lists, filters, or groups equipment by type — which this project does repeatedly, in the list page and the availability report — benefits from a secondary key built on that field instead of scanning the whole table in primary-key order." },
      exercise: "Use the ttable snippet to scaffold table 78601 TalRentalEquipment. Add the fields named above with correct data types (No.: Code, Description: Text, Equipment Type: Enum \"Tal Equipment Type\", Daily Rental Price: Decimal, Available: Boolean, Last Maintenance Date: Date), set the primary key on No., add a secondary key on Equipment Type, and compile with zero errors and zero warnings before moving on.",
      code: "table 78601 \"Tal Rental Equipment\"\n{\n    Caption = 'Rental Equipment';\n    DataClassification = CustomerContent;\n\n    fields\n    {\n        field(1; \"No.\"; Code[20]) { Caption = 'No.'; }\n        field(2; Description; Text[100]) { Caption = 'Description'; }\n        field(3; \"Equipment Type\"; Enum \"Tal Equipment Type\") { Caption = 'Equipment Type'; }\n        field(4; \"Daily Rental Price\"; Decimal) { Caption = 'Daily Rental Price'; MinValue = 0; }\n        field(5; Available; Boolean) { Caption = 'Available'; }\n        field(6; \"Last Maintenance Date\"; Date) { Caption = 'Last Maintenance Date'; }\n    }\n\n    keys\n    {\n        key(PK; \"No.\") { Clustered = true; }\n        key(TypeKey; \"Equipment Type\") { }\n    }\n}"
    },
    {
      id: "hands-02-enum", group: "objects", n: "03", title: "Enum: TalEquipmentType (78602)",
      dur: "15 min read",
      summary: "A closed, dropdown-safe list of equipment categories, and why the table from the previous lesson can only ever hold one of four known values.",
      concepts: [
        { h: "What it is", p: "An enum (enumeration) is a restricted list of predefined constant values — a closed set the compiler and the database both understand, rather than open text a user could type anything into. Each value in the list gets both an internal numeric ID and a caption shown to the user, and a field typed as an enum can only ever hold one of the declared values." },
        { h: "Why it matters", p: "Enums buy type safety at the field level: a Text field for 'Equipment Type' lets someone type 'Projecter' with a typo, or 'projector' in lowercase, or leave it blank, and none of those mistakes surface until a report or filter silently misses the row. An enum field can't hold anything except the values you declared, and the client renders it as a dropdown, so the choice is made instead of typed." },
        { h: "When to use it", p: "Reach for an enum whenever a field's legitimate values form a fixed, known set: equipment types, statuses, payment methods, classifications. If the list of valid values is open-ended, user-editable, or grows with business data (customer names, item numbers), a table with a lookup relationship is the right tool instead — an enum is for closed lists, not master data." },
        { h: "Extensible, and why that flag matters more than it looks", p: "Marking an enum `Extensible = true` is what lets a different extension add its own values later without touching your object — the same non-destructive pattern table extensions use for fields. Leave an enum non-extensible only when you deliberately want to prevent anyone, including your own project later, from adding a fifth equipment type without editing this object directly." },
        { h: "Best practices", p: "Assign numeric values deliberately, not just in whatever order occurs to you first — the dropdown lists values by ID order, not declaration order, so plan the sequence to read well. Always set a `Caption` per value; the name is what your code refers to, the caption is what the user sees, and the two should not be assumed to be the same string." },
        { h: "In the rental project", p: "TalEquipmentType (enum 78602) declares four values: Projector (0), Laptop (1), Tablet (2), and Audio Kit (3). Table 78601's Equipment Type field, built in the previous lesson, is typed as `Enum \"Tal Equipment Type\"` — which is the only reason a rental manager sees a dropdown of exactly those four choices instead of a free-text box." }
      ],
      why: "A free-text 'Equipment Type' field looks fine in a demo with five rows typed by the person who built the table. It breaks quietly once three different people are entering equipment and each spells or capitalizes the category slightly differently — the availability report built later in this series groups by this field, and a typo splits one category into two silent buckets that don't sum right.",
      check: { q: "Table 78601 could have stored Equipment Type as a Text field with validation logic in OnValidate instead of an enum. What does the enum give you that hand-written validation doesn't?", a: "A closed set enforced by the compiler and rendered as a dropdown automatically — no OnValidate code has to run to reject a bad value, because an invalid value can't be assigned to an enum-typed field in the first place. Hand-written Text validation only catches what the validation code happens to check for; the enum makes invalid values structurally impossible." },
      exercise: "Use the tenum snippet to scaffold enum 78602 TalEquipmentType. Replace the three placeholder values with Projector (0), Laptop (1), Tablet (2), and Audio Kit (3), give each a Caption, leave Extensible = true, then go back to table 78601's Equipment Type field from the previous lesson and confirm it's typed as Enum \"Tal Equipment Type\" — compile both and open the table's page to see the dropdown.",
      code: "enum 78602 \"Tal Equipment Type\"\n{\n    Extensible = true;\n\n    value(0; Projector)\n    {\n        Caption = 'Projector';\n    }\n    value(1; Laptop)\n    {\n        Caption = 'Laptop';\n    }\n    value(2; Tablet)\n    {\n        Caption = 'Tablet';\n    }\n    value(3; \"Audio Kit\")\n    {\n        Caption = 'Audio Kit';\n    }\n}"
    },
    {
      id: "hands-02-page", group: "objects", n: "04", title: "Page: TalRentalEquipmentList, Card & FactBox (78603–78605)",
      dur: "22 min read",
      summary: "The three page types working together on the same table: a List for bulk viewing, a Card for detail editing, and a FactBox for related-data context.",
      concepts: [
        { h: "What it is", p: "A page is the user interface object that displays and allows editing of table data. Business Central defines several page types for this, but three cover almost every case: List (an overview of many records), Card (detail editing of one record), and FactBox (related data shown alongside another page)." },
        { h: "Why it matters", p: "Users interact through pages, never through tables directly. Good page design — the right controls bound to the right fields, sensible actions, sensible sorting — is what makes data entry fast instead of frustrating; bad page design doesn't break anything technically, it just makes every user slower." },
        { h: "When to use each type", p: "List page for bulk viewing and light editing across many records at once. Card page for detailed editing of a single record, field by field. FactBox for surfacing related information — related records, calculated context — next to whatever the user is currently looking at, without navigating away." },
        { h: "Page properties worth setting deliberately", p: "The properties that decide what a page's caption shows, whether users can insert or delete, and how it behaves as other extensions build on it.",
          table: {
            headers: ["Property", "Recommendation"],
            rows: [
              ["DataCaptionExpression", "Use if you want dynamic caption"],
              ["DataCaptionFields", "Good for lists (e.g. No., Name)"],
              ["DelayedInsert", "Good for List pages"],
              ["DeleteAllowed", "Set to false if you want to block delete"],
              ["Description", "For internal documentation"],
              ["Editable", "Controls if page is editable"],
              ["Extensible", "Usually true"],
              ["HelpLink", "Link to documentation"],
              ["InherentEntitlements", "For permission system"],
              ["InherentPermissions", "For permission system"],
              ["InsertAllowed", "Set to false to block insert"]
            ]
          } },
        { h: "Page triggers, the ones you'll hit first", p: "The full trigger set is large — this is the set you'll actually reach for day to day.",
          table: {
            headers: ["Trigger", "Description / When it is executed"],
            rows: [
              ["OnInit", "Called when the page is initialized, before it is displayed."],
              ["OnOpenPage", "Triggered when the page is opened (after OnInit)."],
              ["OnClosePage", "Triggered when the page is closed."],
              ["OnQueryClosePage", "Triggered before the page is closed. Can be used to confirm or cancel closing."],
              ["OnFindRecord", "Triggered when a record is found (e.g., during navigation)."],
              ["OnNextRecord", "Triggered when moving to the next record."],
              ["OnAfterGetCurrRecord", "Triggered after the current record is retrieved."],
              ["OnAfterGetRecord", "Triggered after each record is retrieved (e.g., in lists)."],
              ["OnNewRecord", "Triggered when a new record is being created."],
              ["OnInsertRecord", "Triggered when a record is inserted."],
              ["OnModifyRecord", "Triggered when a record is modified."],
              ["OnDeleteRecord", "Triggered when a record is deleted."],
              ["OnPageBackgroundTaskCompleted", "Triggered when a background task finishes successfully."],
              ["OnPageBackgroundTaskError", "Triggered when a background task fails with an error."]
            ]
          } },
        { h: "In the rental project", p: "TalRentalEquipmentList (78603) is the List page, TalRentalEquipmentCard (78604) is the Card page, and TalRentalEquipmentFactBox (78605) is the FactBox — together they give a full data-editing experience over the TalRentalEquipment table from the previous lesson." }
      ],
      why: "Binding a FactBox to the wrong context, or building a Card page with no clear source table relationship, doesn't fail at compile time — it fails at the moment a rental manager opens the equipment card expecting to see availability and maintenance history right there, and instead has to navigate away to find it. Page design decisions are invisible in code review and very visible in daily use.",
      check: { q: "Why does the rental project need three separate pages (List, Card, FactBox) instead of one page that does everything?", a: "Each page type is optimized for a different task: the List page is for scanning and bulk operations across many equipment records, the Card page is for focused single-record editing, and the FactBox surfaces related context without forcing navigation away from whatever page the user is already on. Collapsing them into one page would make all three tasks worse at once." },
      exercise: "Use the tpage snippet three times: build TalRentalEquipmentList as a List page with SourceTable \"Tal Rental Equipment\", build TalRentalEquipmentCard as a Card page on the same table, and add an action on the List page that opens the Card. Then build TalRentalEquipmentFactBox and place it on the Card page so maintenance date and availability are visible without opening another page.",
      code: "page 78603 \"Tal Rental Equipment List\"\n{\n    PageType = List;\n    SourceTable = \"Tal Rental Equipment\";\n    CardPageId = \"Tal Rental Equipment Card\";\n    UsageCategory = Lists;\n    ApplicationArea = All;\n\n    layout\n    {\n        area(Content)\n        {\n            repeater(General)\n            {\n                field(\"No.\"; Rec.\"No.\") { ApplicationArea = All; }\n                field(Description; Rec.Description) { ApplicationArea = All; }\n                field(\"Equipment Type\"; Rec.\"Equipment Type\") { ApplicationArea = All; }\n                field(Available; Rec.Available) { ApplicationArea = All; }\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-03-tableext", group: "extensions", n: "05", title: "Table Extension: TalItem.Rental & TalCustomer.Rental (78606)",
      dur: "18 min read",
      summary: "Attaching rental-specific data to the standard Item and Customer tables without ever opening either original object.",
      concepts: [
        { h: "What it is", p: "A table extension adds new fields — and a few other elements — to an existing table without replacing or modifying the original object. The base table (Item, Customer, or one of your own) stays exactly as Microsoft or the original author shipped it; your fields live in a separate object that layers on top." },
        { h: "Why it matters", p: "Standard Business Central tables like Item and Customer already carry everything the base application needs, and neither one has a 'rental' concept. A table extension is the only way to attach rental-specific data to those standard records without forking the base table — forking it would mean losing every future Microsoft update to Item or Customer the moment you touch the original object." },
        { h: "When to use it", p: "Use a table extension whenever the data you need to store belongs conceptually to a standard table — a Boolean flag on Item, a discount percentage on Customer — rather than a wholly new entity. If what you're storing doesn't already have a natural home on an existing table, a new table (like TalRentalEquipment itself) is the right object instead." },
        { h: "What you can — and cannot — extend", p: "Everything a table extension can add is additive by design — nothing here can touch or remove what's already on the base table.",
          table: {
            headers: ["Element", "What you can do", "Example"],
            rows: [
              ["fields", "Add new fields, using IDs from your own object range", "field(78620; \"Is Rental Equipment\"; Boolean)"],
              ["modify(field)", "Change a limited set of properties on a standard field", "modify(\"Unit Price\") { Caption = 'Daily Price'; }"],
              ["keys", "Add secondary keys, including ones built on your new fields", "key(RentalKey; \"Is Rental Equipment\")"],
              ["fieldgroups", "Push your fields into the DropDown or Brick display groups", "addlast(Brick; \"Is Rental Equipment\")"]
            ]
          } },
        { h: "Best practices", p: "Assign field IDs from your reserved range so two extensions adding fields to the same standard table can never collide. Give every added field a Caption users will actually understand in context — 'Is Rental Equipment' reads fine on a rental-focused card, but only because the field name says exactly what it does. Keep validation on the new field where it belongs — in the field's own OnValidate trigger inside the extension, not scattered into pages that happen to display it." },
        { h: "In the rental project", p: "TalItem.Rental (table extension 78606) adds an 'Is Rental Equipment' Boolean to the standard Item table, so any item can be flagged as rentable without a new table. TalCustomer.Rental adds 'Is Rental Customer' Boolean and 'Rental Discount %' Decimal to the standard Customer table — the discount field is what the capstone's pricing codeunit later reads to reduce a contract's total. The source material gives 78606 as the ID for the Item extension but doesn't state a separate ID for the Customer extension — reserve the next free number in your own range rather than guessing at one." }
      ],
      why: "Editing Item or Customer directly to add a rental flag would compile and work in the sandbox — right up until the next Business Central update ships a modified base Item table and the merge either fails outright or silently drops your change. A table extension survives every base-application update because it was never part of the base object to begin with.",
      check: { q: "Why can a table extension add a new field to Item but not change the data type of an existing standard field like 'Unit Price'?", a: "Because every other extension and every part of the base application already assumes Unit Price's declared type — changing it out from under them would silently break code nobody involved in this extension wrote or can see. Table extensions are additive by design; anything destructive to the original object is exactly what they're built to prevent." },
      exercise: "Use the ttableext snippet twice: build TalItem.Rental (table extension 78606, extends Item) adding an 'Is Rental Equipment' Boolean field at ID 78620, and build a TalCustomer.Rental extension (pick your own next free ID) extending Customer with 'Is Rental Customer' (Boolean) and 'Rental Discount %' (Decimal, MinValue 0, MaxValue 100). Compile both and confirm the new fields appear on the standard Item and Customer tables without the original objects showing as modified in source control.",
      code: "tableextension 78606 \"Tal Item Rental\" extends Item\n{\n    fields\n    {\n        field(78620; \"Is Rental Equipment\"; Boolean)\n        {\n            Caption = 'Is Rental Equipment';\n        }\n    }\n}"
    },
    {
      id: "hands-03-pageext", group: "extensions", n: "06", title: "Page Extension: TalItemCard & TalDocumentAttachmentDet (78607, 78625)",
      dur: "18 min read",
      summary: "Surfacing the fields from the previous lesson's table extensions on the standard Item Card, and adding one action to a standard attachment page.",
      concepts: [
        { h: "What it is", p: "A page extension modifies an existing page — adding fields, groups, actions, or FactBoxes — without replacing the original object. Like a table extension, it layers changes on top; the standard page it targets is never opened or edited directly." },
        { h: "Why it matters", p: "The fields added by TalItem.Rental and TalCustomer.Rental in the previous lesson are invisible to users until something puts them on a page. Editing the standard Item Card or Customer Card directly to show them would carry the same upgrade risk as editing the standard table — a page extension is the non-destructive way to surface new data on an existing screen." },
        { h: "When to use it", p: "Use a page extension whenever you need to expose new fields, add an action, or attach a FactBox to a page Microsoft or another team already owns — the Item Card, Customer Card, a Sales Order. If the screen doesn't exist yet at all, that's a new page (as built in Module 2), not an extension of one." },
        { h: "Layout modifiers", p: "One set of anchors controls where a page extension's changes land, and the same anchors work inside `actions { }` as well as `layout { }`.",
          table: {
            headers: ["Modifier", "What it does", "Example"],
            rows: [
              ["addfirst(anchor)", "Puts your controls first inside a group or an area", "addfirst(Content)"],
              ["addlast(anchor)", "Puts your controls last inside a group or an area", "addlast(General)"],
              ["addafter(control)", "Inserts your controls directly after an existing one", "addafter(\"Unit Price\")"],
              ["addbefore(control)", "Inserts your controls directly before an existing one", "addbefore(Description)"],
              ["movefirst / movelast", "Moves controls that already exist to the start or the end", "movelast(Content; Blocked)"],
              ["moveafter / movebefore", "Repositions an existing control next to another one", "moveafter(Description; \"No.\")"],
              ["modify(control)", "Changes properties of a control that is already there", "modify(Blocked) { Visible = false; }"],
              ["actions { }", "The same anchors apply to actions and promoted groups", "addlast(Processing) { action(Rent) { } }"]
            ]
          } },
        { h: "Best practices", p: "Wrap related added fields in their own group rather than scattering them loose into an existing one — it keeps your addition visually identifiable as a block on the card. Keep each extension focused on one page's worth of changes; a page extension that reaches into unrelated concerns is harder to review and harder to remove cleanly if the feature is ever retired." },
        { h: "In the rental project", p: "The TalItemCard extension (78607) adds a rental group containing the 'Is Rental Equipment' field plus a FactBox, onto the standard Item Card. TalDocumentAttachmentDet (78625) adds a 'View PDF' action onto the standard document attachment details page." }
      ],
      why: "A page extension that dumps a new field loose into an existing group, with no caption context and no visual grouping, technically works but reads as if Microsoft's own team put it there half-finished — the giveaway that undermines trust in the whole extension is almost always a page-extension detail, not a data-model one.",
      check: { q: "The rental team wants the new 'Is Rental Equipment' field to appear directly after the standard 'Type' field on the Item Card, not at the end of the group. Which anchor do you use?", a: "addafter(Type) — it inserts the new control directly after the named existing control, rather than addlast which would put it at the end of the group regardless of where Type happens to sit." },
      exercise: "Use the tpageext snippet to build the TalItemCard extension (78607, extends Item Card): add a group containing the 'Is Rental Equipment' field from the previous lesson, placed with addafter() next to a logical existing field, and attach a FactBox showing rental status. Then build a second, separate page extension on the Document Attachment Details page (78625) adding a 'View PDF' promoted action.",
      code: "pageextension 78607 \"Tal Item Card Rental\" extends \"Item Card\"\n{\n    layout\n    {\n        addafter(Type)\n        {\n            group(Rental)\n            {\n                Caption = 'Rental';\n                field(\"Is Rental Equipment\"; Rec.\"Is Rental Equipment\")\n                {\n                    ApplicationArea = All;\n                }\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-03-codeunit", group: "extensions", n: "07", title: "Codeunit: TalRentalManagement & TalRentalProcess (78609, 78618)",
      dur: "22 min read",
      summary: "Where the project's business rules actually live: individual building-block procedures in one codeunit, combined into a single workflow in another.",
      concepts: [
        { h: "What it is", p: "A codeunit is a reusable container for business-logic procedures — a library of functions implementing calculations, validations, and multi-step operations, with no user interface of its own. It's the object type almost everything else in a project ends up calling into." },
        { h: "Why it matters", p: "Logic that lives only inside a page's trigger code can only ever be reused by that page. The same pricing calculation, availability check, or validation rule is often needed from a page, a report, and another codeunit — writing it once in a codeunit and calling it from all three is the difference between one function to fix and three near-identical copies to keep in sync." },
        { h: "When to use it", p: "Reach for a codeunit for calculations, validations, or processes reused across more than one page or report, and for any workflow complex enough that it shouldn't live inline in a trigger. A single one-off calculation used in exactly one place doesn't necessarily need its own codeunit — but the moment a second caller shows up, it usually should move into one." },
        { h: "Codeunit properties worth setting deliberately", p: "Most codeunits never touch any of these beyond the default — but each one solves a specific, recognizable problem when you need it.",
          table: {
            headers: ["Property", "What it controls", "Values or example"],
            rows: [
              ["Subtype", "The special role the codeunit plays", "Normal (default), Test, TestRunner, Install, Upgrade"],
              ["SingleInstance", "Keeps one instance alive for the session, so globals persist", "true / false (default false)"],
              ["TableNo", "Binds a table so OnRun receives a record of that table", "TableNo = \"Tal Rental Equipment\";"],
              ["Access", "Who may call the codeunit from outside", "Public (default), Internal, Local"],
              ["Permissions", "Extra permissions the code needs in order to run", "tabledata \"Tal Rental Equipment\" = rimd"],
              ["EventSubscriberInstance", "Whether subscribers bind automatically or on demand", "Static (default), Manual"],
              ["InherentPermissions", "Permissions granted to the object itself, not to the user", "InherentPermissions = X;"]
            ]
          } },
        { h: "Triggers and events", p: "OnRun is the one true entry point; everything else here is a way for other code — including other apps — to plug into this codeunit without touching it.",
          table: {
            headers: ["Element", "When it runs", "Typical use"],
            rows: [
              ["trigger OnRun()", "When the codeunit is executed with Codeunit.Run()", "The entry point of a process"],
              ["[EventSubscriber]", "When the event it listens to is raised somewhere else", "React to OnAfterValidateEvent on a field"],
              ["[IntegrationEvent]", "Declares an event that other code can subscribe to", "OnBeforeCalculateRentalPrice"],
              ["[BusinessEvent]", "Declares a stable public event for other applications", "OnRentalContractPosted"],
              ["[InternalEvent]", "Declares an event only your own app may subscribe to", "Internal hooks kept during refactoring"],
              ["[TryFunction]", "Runs code that may fail without stopping the caller", "Try to parse a value from an imported file"],
              ["[NonDebuggable]", "Hides the body of the method from the debugger", "Handling of secrets and access tokens"],
              ["[Obsolete]", "Marks a method as deprecated before it is removed", "[Obsolete('Use CalculatePrice', '24.0')]"]
            ]
          } },
        { h: "Best practices", p: "Expose what other objects need to call as public procedures, and keep everything that's purely internal implementation as local — a smaller public surface is easier to keep stable across versions. Take parameters and return values explicitly rather than reading and writing global state where a function call would do, so the procedure's behavior is visible from its signature alone." },
        { h: "In the rental project", p: "TalRentalManagement (codeunit 78609) holds the individual building blocks — CheckAvailability(), CalculateRentalPrice(), MarkEquipmentUnavailable() — as procedures other objects can call independently. TalRentalProcess (codeunit 78618) combines them into one RentEquipment() workflow, calling TalRentalManagement's procedures in sequence rather than reimplementing any of their logic." }
      ],
      why: "Splitting TalRentalManagement and TalRentalProcess into two codeunits instead of one large one isn't a stylistic choice — it means CheckAvailability() and CalculateRentalPrice() stay independently callable from a page, a report, or a future feature that only needs the availability check and nothing else about the full rental workflow. Collapsing both into one codeunit would work today and quietly force every future caller to depend on the whole workflow just to reuse one piece of it.",
      check: { q: "TalRentalProcess's RentEquipment() calls TalRentalManagement's CheckAvailability() and CalculateRentalPrice() rather than reimplementing that logic itself. What would go wrong if RentEquipment() had its own separate copy of the availability check instead?", a: "The two copies would drift — a bug fix or a rule change made to CheckAvailability() in TalRentalManagement wouldn't automatically apply to RentEquipment()'s private copy, so the workflow codeunit could end up renting out equipment the standalone check would have correctly refused. Calling the shared procedure is what keeps both callers using the same rule." },
      exercise: "Use the tcodeunit snippet to scaffold codeunit 78609 TalRentalManagement with three public procedures: CheckAvailability(EquipmentNo: Code[20]): Boolean, CalculateRentalPrice(EquipmentNo: Code[20]; Days: Integer): Decimal, and MarkEquipmentUnavailable(EquipmentNo: Code[20]). Then scaffold codeunit 78618 TalRentalProcess with one public procedure, RentEquipment(), that calls all three TalRentalManagement procedures in sequence rather than duplicating their logic.",
      code: "codeunit 78609 \"Tal Rental Management\"\n{\n    procedure CheckAvailability(EquipmentNo: Code[20]): Boolean\n    var\n        TalRentalEquipment: Record \"Tal Rental Equipment\";\n    begin\n        if TalRentalEquipment.Get(EquipmentNo) then\n            exit(TalRentalEquipment.Available);\n        exit(false);\n    end;\n\n    procedure CalculateRentalPrice(EquipmentNo: Code[20]; Days: Integer): Decimal\n    var\n        TalRentalEquipment: Record \"Tal Rental Equipment\";\n    begin\n        TalRentalEquipment.Get(EquipmentNo);\n        exit(TalRentalEquipment.\"Daily Rental Price\" * Days);\n    end;\n\n    procedure MarkEquipmentUnavailable(EquipmentNo: Code[20])\n    var\n        TalRentalEquipment: Record \"Tal Rental Equipment\";\n    begin\n        TalRentalEquipment.Get(EquipmentNo);\n        TalRentalEquipment.Available := false;\n        TalRentalEquipment.Modify();\n    end;\n}"
    },
    {
      id: "hands-04-report", group: "reporting", n: "08", title: "Report: TalEquipmentAvailability (78610)",
      dur: "22 min read",
      summary: "Turning raw equipment rows into a formatted, groupable view of what's available by type — for a manager on screen and a customer on paper.",
      concepts: [
        { h: "What it is", p: "A report is a document object that summarizes business data for printing or export, with its own filtering, sorting, and formatted layout. Unlike a page, its job is presenting a snapshot of data as output, not letting a user edit records live." },
        { h: "Why it matters", p: "Reports are how raw table data becomes something a manager or a customer can actually act on — aggregated, sorted, formatted. Without a report object, 'how much equipment is available by type' means someone opening the equipment list page and counting rows by eye." },
        { h: "When to use it", p: "Use a report for management summaries, operational metrics, regulatory output, statements, or any data export — anything where the point is a formatted, often printable or exportable, view of aggregated or filtered data rather than an editable screen." },
        { h: "Report properties worth setting deliberately", p: "The properties that decide how the report gets found, what it looks like by default, and whether it produces output at all.",
          table: {
            headers: ["Property", "What it controls", "Values or example"],
            rows: [
              ["Caption", "The name users see in search and on the request page", "Caption = 'Equipment Availability';"],
              ["UsageCategory", "Where the report shows up in Tell Me", "ReportsAndAnalysis, Documents, Tasks, Lists, History"],
              ["ApplicationArea", "Which application areas can see the report", "ApplicationArea = All;"],
              ["DefaultLayout", "The layout used when the user selects nothing else", "RDLC, Word, Excel"],
              ["RDLCLayout / WordLayout", "The layout file shipped inside the extension", "'./Layouts/Availability.rdl'"],
              ["ProcessingOnly", "Runs the logic without producing a printed document", "true for data fixes and posting routines"],
              ["ShowPrintStatus", "Shows the progress dialog while the report runs", "true (default) / false"],
              ["Permissions", "Extra permissions needed to read the data", "tabledata \"Tal Rental Equipment\" = r;"]
            ]
          } },
        { h: "Report triggers", p: "Three levels — report-wide, per data item, and on the request page — cover the whole run from opening to the last row processed.",
          table: {
            headers: ["Trigger", "Level", "When it runs"],
            rows: [
              ["OnInitReport()", "Report", "Once, before anything else — set your defaults here"],
              ["OnPreReport()", "Report", "After the request page, before any data is read"],
              ["OnPostReport()", "Report", "After all data is processed — messages and cleanup"],
              ["OnPreDataItem()", "Data item", "Before the first record — the place to apply filters"],
              ["OnAfterGetRecord()", "Data item", "For every record read — calculate columns and totals"],
              ["OnPostDataItem()", "Data item", "After the last record of that data item is processed"],
              ["OnOpenPage()", "Request page", "When the request page opens — preset filters here"],
              ["OnQueryClosePage()", "Request page", "Before it closes — validate what the user typed"]
            ]
          } },
        { h: "Best practices", p: "Source the report's data from tables or, for anything that needs aggregation across records, from a query instead of hand-rolling the aggregation in AL. Add columns and expressions deliberately rather than dumping every field, apply sorting that matches how the report will actually be read, and format numbers and dates for the audience — a customer-facing report and an internal audit report don't need the same precision." },
        { h: "In the rental project", p: "TalEquipmentAvailability (report 78610) shows rental status by equipment type, formatted for both management review and customer communication — meaning its layout has to read cleanly whether it's opened inside BC or exported and handed to someone outside it." }
      ],
      why: "A report with ProcessingOnly left at its default (false) but no real layout behind it either fails confusingly or produces a blank document — the property exists precisely so a data-fix report and a printable report don't get confused with each other. Getting UsageCategory and ApplicationArea wrong doesn't break the report technically; it just makes it invisible to the users who need to find it in Tell Me.",
      check: { q: "TalEquipmentAvailability needs to group rows by Equipment Type and show each type's availability count. Which trigger is the right place to accumulate that count, and why not OnPostDataItem()?", a: "OnAfterGetRecord() — it runs once per record read, which is exactly when you'd increment a running counter for that record's type. OnPostDataItem() only runs once, after the entire data item has finished, so it's the right place to do something with a finished total, not to build one up record by record." },
      exercise: "Use the treport snippet to scaffold report 78610 TalEquipmentAvailability with UsageCategory = ReportsAndAnalysis, ApplicationArea = All, and a dataitem on Tal Rental Equipment. Add columns for No., Description, Equipment Type, and Available, sorted by Equipment Type, and set DefaultLayout to RDLC with a layout file that groups rows visually by type.",
      code: "report 78610 \"Tal Equipment Availability\"\n{\n    UsageCategory = ReportsAndAnalysis;\n    ApplicationArea = All;\n    DefaultLayout = RDLC;\n    RDLCLayout = './Layouts/TalEquipmentAvailability.rdl';\n\n    dataset\n    {\n        dataitem(Equipment; \"Tal Rental Equipment\")\n        {\n            RequestFilterFields = \"Equipment Type\", Available;\n\n            column(No_; \"No.\") { }\n            column(Description; Description) { }\n            column(EquipmentType; \"Equipment Type\") { }\n            column(IsAvailable; Available) { }\n\n            trigger OnAfterGetRecord()\n            begin\n                // per-row totals by Equipment Type accumulate here\n            end;\n        }\n    }\n\n    requestpage\n    {\n        layout { area(Content) { } }\n    }\n}"
    },
    {
      id: "hands-04-reportext", group: "reporting", n: "09", title: "Report Extension: TalCustomerList (78611)",
      dur: "16 min read",
      summary: "Adding two rental-specific columns to the standard Customer List report, instead of maintaining a second report that drifts from the original.",
      concepts: [
        { h: "What it is", p: "A report extension adds columns — and optionally request-page controls or an extra layout — to an existing standard report, the same non-destructive pattern table and page extensions use, applied to reports." },
        { h: "Why it matters", p: "Building a whole duplicate report just to add two rental-specific columns to the standard Customer List means maintaining two reports that drift apart over time, and users have to know which one to run. A report extension adds exactly the new columns and leaves everything else about the standard report — including future Microsoft improvements to it — intact." },
        { h: "When to use it", p: "Use a report extension when a standard report is 90% of what you need and the gap is a handful of additional columns or dimensions, not a fundamentally different report. If the shape of the output is genuinely different, a new report (as built in the previous lesson) is the better fit." },
        { h: "Structure", p: "A report extension needs a `dataset` section to hang new columns on — that's the one required piece. Inside it, `add(DataItemName) { column(...) { } }` attaches a new column to an existing data item in the target report by name. The `requestpage` section, for adding filters or controls to the request page, and the `rendering` section, for registering an additional layout, are both optional. Unlike table, page, and enum extensions, this deck doesn't name a dedicated VS Code snippet for report extensions — you build the object by typing `reportextension` by hand, using this structure as the template." },
        { h: "Best practices", p: "Use addlast() to append new columns to the dataset rather than trying to reposition existing ones — the goal is additive, not a redesign. Keep additions relevant to what the report already reports on, and test every rendering format the target report supports (Print, PDF, Excel) since a column that renders correctly in one format can still be misaligned in another." },
        { h: "In the rental project", p: "TalCustomerList (report extension 78611) adds a rental customer indicator and a discount percentage to the standard Customer List report's columns — both pulled from the TalCustomer.Rental table extension built earlier, so a manager running the standard, familiar Customer List report also sees which customers rent equipment and at what discount, without opening a second report." }
      ],
      why: "The rental discount percentage only became visible on a report because a table extension put the field on Customer and a report extension surfaced it — skip either half and the data exists but nobody running the standard Customer List ever sees it. Report extensions are the last mile that makes a table extension's new field actually useful outside a custom card.",
      check: { q: "TalCustomerList report extension adds a rental discount column. Where does that value actually come from — does the report extension calculate it?", a: "No — it comes from the 'Rental Discount %' field added to the standard Customer table by the TalCustomer.Rental table extension. The report extension only adds a column that reads that existing field; it doesn't calculate or store anything new itself." },
      exercise: "Build the reportextension object by hand (no dedicated snippet is named for this object type in the source material) to extend the standard Customer List report with two new columns: a Boolean for 'Is Rental Customer' and a Decimal for 'Rental Discount %', both sourced from the TalCustomer.Rental table extension. Run the standard report afterward and confirm both new columns appear without any other column changing.",
      code: "reportextension 78611 \"Tal Customer List Rental\" extends \"Customer - List\"\n{\n    dataset\n    {\n        add(Customer)\n        {\n            column(IsRentalCustomer; \"Is Rental Customer\") { }\n            column(RentalDiscountPct; \"Rental Discount %\") { }\n        }\n    }\n}"
    },
    {
      id: "hands-04-xmlport", group: "reporting", n: "10", title: "XMLPort: TalImportRentalEquipment (78613)",
      dur: "20 min read",
      summary: "Loading equipment from an external CSV into TalRentalEquipment, and rejecting bad rows instead of silently dropping them.",
      concepts: [
        { h: "What it is", p: "An XMLport is the import/export object that moves data between Business Central and an external system, in XML or in delimited-text formats like CSV. It defines both the shape of the file and the mapping between file fields and table fields." },
        { h: "Why it matters", p: "Almost no BC implementation starts with an empty database — equipment catalogues, price lists, customer lists usually already exist somewhere else, often as a spreadsheet. An XMLport is what turns 'a CSV a client emails us' into rows in a BC table without hand-entering them." },
        { h: "When to use it", p: "Use an XMLport to import catalogs, customer lists, or price data from an external file, or to export orders, invoices, or transactions out to another system. If the integration needs to run automatically on a schedule or react to an external trigger rather than a user manually running an import, the XMLport is usually wrapped by a codeunit or job queue entry that calls it — the XMLport itself is the format/mapping definition." },
        { h: "XMLPort properties worth setting deliberately", p: "The properties that shape how a file gets read or written — set these before you touch the schema.",
          table: {
            headers: ["Property", "What it controls", "Values or example"],
            rows: [
              ["Direction", "Whether the XMLport imports, exports, or does both", "Import, Export, Both (default)"],
              ["Format", "The file format that is handled", "Xml (default), VariableText, FixedText"],
              ["FieldSeparator", "What separates two fields in the text formats", "',' or ';' or '<TAB>'"],
              ["RecordSeparator", "What ends each record in the text formats", "'<NewLine>'"],
              ["FieldDelimiter", "What wraps each field value in the text formats", "'\"'"],
              ["TextEncoding", "The character encoding used for the text formats", "UTF8, UTF16, WINDOWS, MSDOS"],
              ["UseRequestPage", "Shows a request page before the XMLport runs", "true (default) / false"],
              ["FormatEvaluate", "How values are parsed on import and formatted on export", "Legacy (default), Xml"]
            ]
          } },
        { h: "XMLPort triggers", p: "Three levels of triggers — XMLport-wide, per table element, and per field — each firing at a different point in the read/write cycle.",
          table: {
            headers: ["Trigger", "Level", "When it runs"],
            rows: [
              ["OnInitXmlPort()", "XMLport", "Before anything else — set your defaults here"],
              ["OnPreXmlPort()", "XMLport", "After the request page, before data is processed"],
              ["OnPostXmlPort()", "XMLport", "After the whole file has been processed"],
              ["OnAfterInitRecord()", "Table element", "After a new record is initialised, before values land"],
              ["OnBeforeInsertRecord()", "Table element", "Before the insert — validate and default here"],
              ["OnAfterInsertRecord()", "Table element", "After the insert — related updates and logging"],
              ["OnAfterAssignField()", "Field element", "After a value has been assigned to a field (import)"],
              ["OnBeforePassVariable()", "Field element", "Before a value is written out to the file (export)"]
            ]
          } },
        { h: "Best practices", p: "Define the source table, choose the format deliberately rather than defaulting to Xml for what's actually a CSV file, add real validation rather than trusting the file, and handle bad rows by rejecting and reporting them instead of silently skipping or silently importing garbage. Document the expected file format somewhere a non-developer preparing the file can find it." },
        { h: "In the rental project", p: "TalImportRentalEquipment (XMLport 78613) reads CSV equipment data, validates the No. field and the price fields, and rejects rows with negative prices rather than loading them — the rejection has to happen in OnBeforeInsertRecord(), before the bad row ever reaches the TalRentalEquipment table." }
      ],
      why: "An import that silently skips a malformed row instead of reporting it looks like a successful import that quietly lost data — the person running it sees '47 rows processed' with no way to know three of the fifty in the source file never made it in. Validating and reporting failures explicitly in OnBeforeInsertRecord() is what turns 'the import ran' into 'the import can be trusted.'",
      check: { q: "A CSV row for equipment import has a negative Daily Rental Price. In which trigger should that row be rejected, and why not wait until after the insert?", a: "OnBeforeInsertRecord() — rejecting it there stops the bad row before it's ever written to the TalRentalEquipment table. Waiting until OnAfterInsertRecord() means the invalid row has already been inserted, so 'rejecting' it at that point means detecting and then deleting a row that should never have been saved in the first place — worse, and riskier if anything else reacts to the insert in between." },
      exercise: "Use the txmlport snippet to scaffold XMLport 78613 TalImportRentalEquipment with Direction = Import, Format = VariableText, and a table element on Tal Rental Equipment. Map No., Description, Equipment Type, and Daily Rental Price as field elements, and add an OnBeforeInsertRecord trigger that checks Daily Rental Price >= 0 and raises an error naming the row's No. if it isn't. Test with a ten-row CSV that includes at least one negative price.",
      code: "xmlport 78613 \"Tal Import Rental Equipment\"\n{\n    Direction = Import;\n    Format = VariableText;\n    FieldSeparator = ',';\n    UseRequestPage = false;\n\n    schema\n    {\n        textelement(TalRentalEquipmentList)\n        {\n            tableelement(Equipment; \"Tal Rental Equipment\")\n            {\n                fieldelement(No_; Equipment.\"No.\") { }\n                fieldelement(Description; Equipment.Description) { }\n                fieldelement(EquipmentType; Equipment.\"Equipment Type\") { }\n                fieldelement(DailyRentalPrice; Equipment.\"Daily Rental Price\") { }\n\n                trigger OnBeforeInsertRecord()\n                begin\n                    if Equipment.\"Daily Rental Price\" < 0 then\n                        Error('Row %1: Daily Rental Price cannot be negative.', Equipment.\"No.\");\n                end;\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-04-query", group: "reporting", n: "11", title: "Query: TalRentalEquipmentSummary (78612)",
      dur: "20 min read",
      summary: "A read-only, set-based aggregate over TalRentalEquipment — item count and average price per type — without a single hand-written accumulation loop.",
      concepts: [
        { h: "What it is", p: "A query is a read-only object combining one or more tables with grouping, filtering, and aggregate calculations — the AL equivalent of a SQL SELECT with GROUP BY, expressed as an object instead of hand-written joins." },
        { h: "Why it matters", p: "Aggregating data with hand-written AL — looping a filtered record set and accumulating totals yourself — works, but a query does the same aggregation as a single set-based operation and is usually both less code and faster, especially once the table involved has real volume." },
        { h: "When to use it", p: "Use a query for aggregated views, KPIs, analytics, or any read-only presentation of summarized data across one or more tables. If you need to write to the data, or you need a single un-aggregated record, a query is the wrong tool — reach for a normal Record variable instead." },
        { h: "Query properties worth setting deliberately", p: "Most of these only matter once the query is either sorted for a specific view or published as an API — the defaults are fine until then.",
          table: {
            headers: ["Property", "What it controls", "Values or example"],
            rows: [
              ["Caption", "The name users see when the query is surfaced", "Caption = 'Rental Equipment Summary';"],
              ["QueryType", "A normal query, or one published as an OData API", "Normal (default), API"],
              ["OrderBy", "Sorts the result set on the columns you choose", "OrderBy = descending(AveragePrice);"],
              ["TopNumberOfRows", "Returns only the first rows of the result set", "TopNumberOfRows = 10;"],
              ["DataAccessIntent", "Lets the query run against the read-only replica", "ReadOnly, ReadWrite"],
              ["Permissions", "Extra permissions needed to read the source data", "tabledata \"Tal Rental Equipment\" = r;"],
              ["APIPublisher, APIGroup, APIVersion", "Identify the endpoint when QueryType is API", "'talan', 'rental', 'v1.0'"]
            ]
          } },
        { h: "Elements and methods", p: "A query is built from data sources, columns, and — the part that makes it more than a plain list — the Method that turns a column into an aggregate.",
          table: {
            headers: ["Element or method", "What it does", "Example"],
            rows: [
              ["dataitem", "Declares a source table for the query", "dataitem(Equipment; \"Tal Rental Equipment\")"],
              ["column", "Exposes a field of that data item as a result column", "column(Type; \"Equipment Type\")"],
              ["filter", "Adds a filter that the caller can set at runtime", "filter(TypeFilter; \"Equipment Type\")"],
              ["DataItemLink", "Joins a child data item to its parent", "DataItemLink = \"No.\" = Equipment.\"No.\";"],
              ["SQLJoinType", "The kind of join used between linked data items", "InnerJoin, LeftOuterJoin, RightOuterJoin, CrossJoin"],
              ["Method", "Aggregates a column over the grouping", "Sum, Count, Average, Min, Max"],
              ["ColumnFilter", "Filters on the aggregated result, after grouping", "ColumnFilter = where(Count = filter(> 1));"],
              ["Open, Read, Close", "How AL code walks through the result set", "Q.Open(); while Q.Read() do ...; Q.Close();"]
            ]
          } },
        { h: "Best practices", p: "Define only the data sources you actually need — every dataitem you add is a join the query has to execute. Add filters to cut the result set down before it's aggregated rather than after, keep only the columns you want to group on as non-aggregate, and add the aggregate methods (SUM, COUNT, AVG, MIN, MAX) deliberately rather than defaulting every numeric column to Sum." },
        { h: "In the rental project", p: "TalRentalEquipmentSummary (query 78612) groups by Equipment Type, counts how many items fall into each type, and calculates the average rental price per type — a single read-only aggregate a page, a report, or an API caller can all read from without any of them re-implementing the grouping logic." }
      ],
      why: "Doing this same Equipment-Type grouping by looping TalRentalEquipment in AL and accumulating counts and running averages by hand would take real code, would have to be re-tested every time the table's shape changes, and would still be slower than the query engine doing the aggregation in one set-based pass. The query object exists specifically so this kind of summary doesn't need custom loop code at all.",
      check: { q: "TalRentalEquipmentSummary groups by Equipment Type and shows a count and an average price per type. Which column gets a Method, and which doesn't?", a: "Equipment Type has no Method — it's the plain column the results group by. The count and the average price columns each get a Method (Count and Average respectively), which is what turns them from per-row values into per-group aggregates." },
      exercise: "Use the tquery snippet to scaffold query 78612 TalRentalEquipmentSummary with a dataitem on Tal Rental Equipment. Add Equipment Type as a plain grouping column, a column with Method = Count for item count per type, and a column with Method = Average on Daily Rental Price. Open the query in AL with Q.Open()/Q.Read()/Q.Close() and print one line per equipment type to verify the grouping is correct.",
      code: "query 78612 \"Tal Rental Equipment Summary\"\n{\n    QueryType = Normal;\n    Caption = 'Rental Equipment Summary';\n\n    elements\n    {\n        dataitem(Equipment; \"Tal Rental Equipment\")\n        {\n            column(EquipmentType; \"Equipment Type\") { }\n\n            column(ItemCount; \"No.\")\n            {\n                Method = Count;\n            }\n            column(AveragePrice; \"Daily Rental Price\")\n            {\n                Method = Average;\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-05-rolecenter", group: "rolecenter", n: "12", title: "Role Center: Tal Rental Manager RC (78614)",
      dur: "18 min read",
      summary: "The dashboard a rental manager actually lands on — ten defined sections, and which one to use for which kind of information.",
      concepts: [
        { h: "What it is", p: "The Role Center is the main dashboard a user lands on when they sign in — a personalized workspace showing the data, activities, and navigation tailored to their specific role, rather than a generic start page every user sees regardless of job." },
        { h: "Why it matters", p: "Centralizing the essential information for one role in one place is what turns 'log in, then go find the five pages I need' into 'log in, and everything I need today is already on screen.' The Role Center is often the only screen a role-specific user opens all day." },
        { h: "When to use it", p: "Build a Role Center whenever a group of users shares a job — Tal Rental Manager, Warehouse Clerk — and needs a monitoring/navigation surface built around that job's KPIs and daily tasks, rather than the generic Business Manager or default role center every environment ships with." },
        { h: "Role Center sections", p: "A Role Center page is built from ten distinct sections, each with its own purpose — knowing which one a piece of information belongs in is most of the design work.",
          table: {
            headers: ["#", "Name", "Description"],
            rows: [
              ["1", "Navigation Menu Area", "Provides access to relevant entities via menus and sub-menus for the user role"],
              ["2", "Navigation Bar Area", "Displays quick links to frequently used pages and bookmarked entities"],
              ["3", "Action Area", "Contains links to execute key tasks (pages, reports, codeunits)"],
              ["4", "Headline Area", "Shows dynamic business information and insights"],
              ["5", "Wide Cue Area", "Displays key numerical indicators using wide-layout cues"],
              ["6", "Data Cue Area", "Visualizes aggregated business data (KPIs)"],
              ["7", "Action Cue Area", "Shows actionable tiles linked to business tasks"],
              ["8", "Chart Area", "Displays data using charts or Power BI reports"],
              ["9", "CardPart/ListPart Area", "Shows business data in card or list format"],
              ["10", "Control Add-in Area", "Displays custom HTML/JavaScript-based content"]
            ]
          } },
        { h: "Best practices", p: "Keep the Role Center simple and focused — show only the KPIs and actions that role actually needs day to day, not everything the underlying data could theoretically surface. Use cues and tiles for quick, at-a-glance insight rather than tables of numbers, and make sure the frequently used pages for that role are one click away." },
        { h: "In the rental project", p: "Tal Rental Manager RC (page 78614) is the Role Center, paired with the Tal Rental Manager profile from the next lesson, giving the rental team a dashboard tailored to managing rental operations, tracking activity, and reaching the equipment list, availability report, and rental workflow without navigating through generic BC menus first." }
      ],
      why: "A rental manager forced to use the default Business Manager Role Center sees KPIs and cues aimed at general business operations — none of them about equipment availability or active rentals — and has to navigate to find every rental-specific page manually, every single day. A purpose-built Role Center removes that daily navigation tax entirely.",
      check: { q: "The Tal Rental Manager RC needs to show how many equipment items are currently unavailable, as a single glanceable number. Which of the ten Role Center sections is that, specifically?", a: "The Data Cue Area — it's built for visualizing aggregated business data (KPIs) like a count, as opposed to the Wide Cue Area (numerical indicators in a wide layout) or the Action Cue Area (actionable tiles tied to a task rather than a pure metric)." },
      exercise: "Use the tpagerolecenterwaldo snippet to scaffold page 78614 Tal Rental Manager RC. Populate at minimum a Navigation Bar Area linking to the TalRentalEquipmentList and TalEquipmentAvailability report, and a Data Cue Area showing a count of equipment where Available = false. Leave the remaining sections empty for now — they get filled in as the project grows.",
      code: "page 78614 \"Tal Rental Manager RC\"\n{\n    PageType = RoleCenter;\n    Caption = 'Rental Manager';\n\n    layout\n    {\n        area(RoleCenter)\n        {\n            // Navigation Menu Area / Navigation Bar Area\n        }\n    }\n\n    actions\n    {\n        area(Sections)\n        {\n            group(RentalOperations)\n            {\n                Caption = 'Rental Operations';\n                action(EquipmentList)\n                {\n                    Caption = 'Rental Equipment';\n                    ApplicationArea = All;\n                    RunObject = page \"Tal Rental Equipment List\";\n                }\n                action(AvailabilityReport)\n                {\n                    Caption = 'Equipment Availability';\n                    ApplicationArea = All;\n                    RunObject = report \"Tal Equipment Availability\";\n                }\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-05-profile", group: "rolecenter", n: "13", title: "Profile: Tal Rental Manager",
      dur: "16 min read",
      summary: "The named object with no ID that binds a group of users to the Role Center built for them — and to a customized version of the equipment list.",
      concepts: [
        { h: "What it is", p: "A profile is the AL object that defines a user role: it names the role, points at a Role Center page, and carries whatever page customizations that role should see. Unlike almost every other AL object type, a profile has no object ID — it's identified by its name." },
        { h: "Why it matters", p: "One Business Central environment serves many different jobs. Without profiles, every user would land on the same generic start page regardless of whether they're in sales, warehouse, or — in this project — rental operations. The profile is what connects a group of users to the Role Center built specifically for them." },
        { h: "When to use it", p: "Create a profile whenever a group of users shares a job and needs its own Role Center, its own default filters, or simplified pages — Tal Rental Manager, Warehouse Clerk, any role distinct enough to deserve a tailored workspace rather than personalizing the default one by hand for each user." },
        { h: "Profile properties", p: "Notice the last row — a profile is the rare AL object identified purely by its declared name, not a number.",
          table: {
            headers: ["Property", "What it controls", "Values or example"],
            rows: [
              ["Caption", "The role name users pick in My Settings", "Caption = 'Rental Manager';"],
              ["ProfileDescription", "The longer text shown next to the role", "'Manages equipment rental operations'"],
              ["RoleCenter", "The Role Center page this role opens on", "RoleCenter = \"Tal Rental Manager RC\";"],
              ["Customizations", "The page customization objects applied to the role", "Customizations = TalRentalEquipmentListCust;"],
              ["Enabled", "Whether users are allowed to select this role", "true (default) / false"],
              ["Promoted", "Puts the role at the top of the role picker", "true / false"],
              ["No object ID", "A profile is identified by its name, not by a number", "profile TalRentalManager { ... }"]
            ]
          } },
        { h: "Structure", p: "A profile itself carries no logic and no ID — everything it changes on a page lives in a separate `pagecustomization` object, referenced by name under `Customizations`. The pagecustomization object names the page it customizes (`customizes \"Tal Rental Equipment List\"`) and, inside its own `layout` section, modifies existing controls — hiding a field with `modify(\"Last Maintenance Date\") { Visible = false; }`, for instance — the same modify-in-place pattern a page extension uses, but scoped to just this one role instead of applying to everyone." },
        { h: "Best practices", p: "Give the profile a clear Caption and ProfileDescription so an administrator assigning roles knows exactly what they're picking. Point RoleCenter at your own purpose-built page rather than reusing a generic one. Ship page customizations through the profile itself instead of asking every user on that role to personalize their own screen by hand — the profile-level customization is what every new hire on that role gets automatically, on day one." },
        { h: "In the rental project", p: "The Tal Rental Manager profile points RoleCenter at page 78614 'Tal Rental Manager RC,' and applies a pagecustomization that hides fields the rental team never uses on the day-to-day equipment list — Last Maintenance Date, for instance, which matters for planning but not for the daily rental workflow." }
      ],
      why: "Without the profile, page 78614 would compile and exist, but no user would ever land on it automatically — a Role Center page with nothing pointing a role at it is just an unreachable page. The profile is the one piece of wiring that turns a built dashboard into something a rental manager actually sees on login.",
      check: { q: "Why does a profile have no object ID, when almost every other AL object type — table, page, codeunit, even permission set — does?", a: "A profile is identified by its declared name rather than a number, because it isn't a data or logic container the way those objects are — it's a named binding between a role, a Role Center page, and a set of customizations. There's nothing else that would ever need to reference a profile by numeric ID the way code references a table or calls a codeunit." },
      exercise: "Define the Tal Rental Manager profile with RoleCenter = \"Tal Rental Manager RC\" (page 78614 from the previous lesson), a clear Caption and ProfileDescription, and Enabled = true. Then build one pagecustomization object targeting Tal Rental Equipment List that hides the Last Maintenance Date field, and reference it under the profile's Customizations. Sign in as a test user, select the Tal Rental Manager role in My Settings, and confirm both the Role Center and the hidden field take effect.",
      code: "profile \"Tal Rental Manager\"\n{\n    Caption = 'Rental Manager';\n    ProfileDescription = 'Manages equipment rental operations';\n    RoleCenter = \"Tal Rental Manager RC\";\n    Customizations = TalRentalEquipmentListCust;\n    Enabled = true;\n    Promoted = false;\n}\n\npagecustomization TalRentalEquipmentListCust customizes \"Tal Rental Equipment List\"\n{\n    layout\n    {\n        modify(\"Last Maintenance Date\")\n        {\n            Visible = false;\n        }\n    }\n}"
    },
    {
      id: "hands-05-enumext", group: "rolecenter", n: "14", title: "Enum Extension: TalEquipmentType — Camera & Projector Screen (78620, 78621)",
      dur: "15 min read",
      summary: "Adding two more equipment categories to a Microsoft-adjacent-style enum without ever opening enum 78602 from Module 2.",
      concepts: [
        { h: "What it is", p: "An enum extension adds new values to an enum that already exists, without touching the original object — the same non-destructive pattern a table extension applies to tables, applied to enums instead." },
        { h: "Why it matters", p: "The enum you need to extend is often owned by Microsoft, or by another team's extension entirely — you may not even be allowed to modify it directly. An enum extension adds your values while leaving the original object, and everyone else's ability to update it safely, completely intact." },
        { h: "When to use it", p: "Use an enum extension when a standard or third-party enum is missing an option your business genuinely needs — a category, a status, a type — rather than duplicating the whole enum with your values added in, which would fragment every field and every piece of logic already built around the original." },
        { h: "Rules to respect", p: "Six rules, and every one of them exists to keep two different extensions from ever colliding on the same enum.",
          table: {
            headers: ["Rule", "Why it matters", "What to do"],
            rows: [
              ["The target must be extensible", "An enum can only be extended if it says so", "enum 78602 TalEquipmentType { Extensible = true; }"],
              ["Value IDs come from your range", "Two apps adding the same ID cannot coexist", "value(78620; Camera)"],
              ["Values are added, never removed", "Removing one would break data already saved", "Mark the old value Obsolete on the original"],
              ["Names are code, captions are UI", "Users read the Caption, your code reads the name", "value(78620; Camera) { Caption = 'Camera'; }"],
              ["The dropdown follows the ID", "Values are listed by number, not by declaration order", "Plan the IDs so the list reads well"],
              ["One extension per enum per app", "You cannot declare the same enumextension twice", "Put all your new values in a single object"]
            ]
          } },
        { h: "Best practices", p: "Confirm Extensible = true on the target before starting — if it isn't set, extending that enum isn't an option at all, no matter how badly you need the extra value. Take every value ID from your reserved range, and set a Caption on every value you add, the same as you would on a value in an enum you own outright." },
        { h: "In the rental project", p: "An extension of TalEquipmentType (78602) adds Camera (value 78620) and Projector Screen (value 78621), so the enum's original four values — Projector, Laptop, Tablet, Audio Kit — stay exactly as declared in Module 2, and enum 78602 itself is never opened or edited to add these two. The source material states the value IDs but doesn't give the enumextension object's own ID — reserve one from your own range." }
      ],
      why: "TalEquipmentType was marked Extensible = true back in Module 2 for exactly this reason — a rental company's equipment catalogue grows over time, and the alternative to an enum extension would be editing enum 78602 directly every time a new category shows up, which defeats the entire point of having chosen an extensible enum in the first place.",
      check: { q: "The enum extension adds Camera at value ID 78620 and Projector Screen at 78621 — IDs from the rental project's own object range, not from wherever the base TalEquipmentType enum's four values (0–3) happen to sit. Why does that matter?", a: "Because two different extensions adding values to the same target enum need their IDs to never collide — if this project's Camera and some other extension's added value both claimed ID 78620, the two couldn't be installed together. Reserving IDs from your own range, separate from the target enum's original 0–3 range, is what keeps that collision impossible by construction." },
      exercise: "Use the tenumext snippet to build an enum extension on TalEquipmentType (78602) adding Camera at value 78620 and Projector Screen at value 78621, each with a Caption. Confirm TalEquipmentType still declares Extensible = true from Module 2, compile, and open the TalRentalEquipmentCard page from Module 2 to confirm both new values now appear in the Equipment Type dropdown alongside the original four.",
      code: "enumextension 78622 \"Tal Equipment Type Ext\" extends \"Tal Equipment Type\" // object ID not stated in source material -- pick the next free number in your own range\n{\n    value(78620; Camera)\n    {\n        Caption = 'Camera';\n    }\n    value(78621; \"Projector Screen\")\n    {\n        Caption = 'Projector Screen';\n    }\n}"
    },
    {
      id: "hands-05-permissionset", group: "rolecenter", n: "15", title: "Permission Set: Tal Rental Full & Tal Rental Read",
      dur: "18 min read",
      summary: "Without this object, every table, page, codeunit, report, query, and XMLport built so far only works for the one SUPER user testing it.",
      concepts: [
        { h: "What it is", p: "A permission set is the AL object listing exactly what a user may read, insert, modify, delete, or execute on each object an extension ships — the access-control layer that sits on top of everything else built in this series." },
        { h: "Why it matters", p: "Business Central blocks any object a user has no permission for, full stop. Every table, page, codeunit, report, query, and XMLport built across this whole series is invisible or unusable to anyone who isn't SUPER until a permission set explicitly grants access to it — this isn't an edge case, it's the default." },
        { h: "When to use it", p: "Every extension needs at least one permission set, no exceptions. Add more than one when different roles need different levels of access to the same objects — a full-access set for the team that manages the data, and a read-only set for people who only need to consult it." },
        { h: "Letters and properties", p: "Five letters cover every access right a permission set can grant, plus three properties that control how sets compose and get assigned.",
          table: {
            headers: ["Element", "Meaning", "Example"],
            rows: [
              ["R", "Read — open and view records of the object", "tabledata \"Tal Rental Equipment\" = R;"],
              ["I", "Insert — create new records", "tabledata \"Tal Rental Contract\" = RI;"],
              ["M", "Modify — change records that already exist", "tabledata \"Tal Rental Contract\" = RIM;"],
              ["D", "Delete — remove records", "tabledata \"Tal Rental Contract\" = RIMD;"],
              ["X", "Execute — run a codeunit, report, query or XMLport", "codeunit \"Tal Rental Management\" = X;"],
              ["Assignable", "Whether an administrator can hand this set to a user", "Assignable = true;"],
              ["IncludedPermissionSets", "Pulls the permissions of another set into this one", "IncludedPermissionSets = \"Tal Rental Read\";"],
              ["Permissions", "The list itself, one entry per object", "Permissions = tabledata X = RIMD, page Y = X;"]
            ]
          } },
        { h: "Best practices", p: "Ship at least one full-access set and one read-only set as a pair, name both with the project's prefix so they're identifiable at a glance in a long permission list, and set Assignable = true only on the sets an administrator should actually be able to hand to a user — not on every set that exists." },
        { h: "In the rental project", p: "Tal Rental Full grants rimd on the rental tables plus execute on the rental codeunits, reports, queries and XMLports — everything a rental manager needs to fully operate the extension. Tal Rental Read grants r only, for users who need to consult the equipment list and availability report without being able to change anything. The source material doesn't state object ID numbers for either permission set — reserve two from your own range rather than inventing specific ones." }
      ],
      why: "A rental manager who can open every page and codeunit built in this series but has no permission set granting rimd on TalRentalEquipment sees every operation fail at runtime with a permissions error — not a bug in the extension, working exactly as designed, because Business Central assumes no access until a permission set says otherwise. Shipping the extension without this object means it only ever works for the one SUPER user testing it.",
      check: { q: "Tal Rental Read grants r on the rental tables and nothing else. A user assigned only Tal Rental Read tries to mark a piece of equipment unavailable through the Card page. What happens, and why isn't this a bug?", a: "The operation is blocked with a permissions error — Tal Rental Read never granted M (modify) on Tal Rental Equipment, only R (read). This is the permission set working exactly as designed: a read-only role is supposed to be unable to change data, and the block happens automatically because Business Central's default is no access, not because something forgot to check a flag." },
      exercise: "Build two permission sets: Tal Rental Full, granting RIMD on Tal Rental Equipment and every other rental table built in this series, plus X on Tal Rental Management, Tal Rental Process, the Tal Equipment Availability report, the Tal Rental Equipment Summary query, and the Tal Import Rental Equipment XMLport; and Tal Rental Read, granting R only on the rental tables. Set Assignable = true on both, sign in as a non-SUPER test user assigned only Tal Rental Read, and confirm every write operation is correctly blocked.",
      code: "permissionset 78640 \"Tal Rental Full\"\n{\n    Access = Public;\n    Assignable = true;\n    Caption = 'Rental Full Access';\n    IncludedPermissionSets = \"Tal Rental Read\";\n    Permissions =\n        tabledata \"Tal Rental Equipment\" = RIMD,\n        page \"Tal Rental Equipment List\" = X,\n        page \"Tal Rental Equipment Card\" = X,\n        codeunit \"Tal Rental Management\" = X,\n        codeunit \"Tal Rental Process\" = X,\n        report \"Tal Equipment Availability\" = X,\n        query \"Tal Rental Equipment Summary\" = X,\n        xmlport \"Tal Import Rental Equipment\" = X;\n}\n\npermissionset 78641 \"Tal Rental Read\"\n{\n    Access = Public;\n    Assignable = true;\n    Caption = 'Rental Read Only';\n    Permissions =\n        tabledata \"Tal Rental Equipment\" = R;\n}"
    },
    {
      id: "hands-06-capstone", group: "capstone", n: "16", title: "Capstone: the Tal Rental Contract feature",
      dur: "25 min read",
      summary: "One end-to-end feature — rent equipment, price it automatically, report on it, import equipment from CSV — built using every object type from modules 1 to 5, on top of the project as it already stands.",
      concepts: [
        { h: "The scenario", p: "The rental company wants to rent equipment to customers, price each rental automatically, report on availability, and load its equipment list from a CSV file. This is not a new project — it's the next feature on the one you've been building since Lesson 01." },
        { h: "Where you start", p: "The project as it stands after module 5: table 78601 (TalRentalEquipment), enum 78602 (EquipmentType), pages 78603–78605, and codeunit 78609 (TalRentalManagement) are already in place and compiling." },
        { h: "What you will build", p: "Nine objects, spanning every layer of the project. Build one at a time, compile after each, and test it in the client before starting the next — use the snippets from earlier lessons rather than typing objects from scratch.",
          table: {
            headers: ["Object type", "Name and ID", "What it must do"],
            rows: [
              ["Table extension", "Customer ext. – 78630", "Add \"Rental Discount %\" so pricing can use it"],
              ["Enum extension", "EquipmentType ext. – 78631", "Add the Camera value the new catalogue needs"],
              ["Table", "Tal Rental Contract – 78632", "Store customer, equipment, start date, days, total"],
              ["Page", "Tal Rental Contract Card – 78633", "Capture a contract and show the calculated price"],
              ["Codeunit", "Tal Rental Pricing – 78634", "Daily rate x days, minus the customer discount"],
              ["Report", "Tal Rental Availability – 78635", "Equipment by type, with availability and price"],
              ["XMLport", "Tal Import Equipment – 78636", "Load equipment from CSV, reject negative prices"],
              ["Query", "Tal Rental Revenue – 78637", "Group contracts by type and sum the amount"],
              ["Permission set", "Tal Rental Full – 78638", "Grant the rental role access to all of the above"]
            ]
          } },
        { h: "What good looks like", p: "A user opens the Tal Rental Manager Role Center, imports equipment from a CSV, rents a projector, and sees both the calculated price and the availability report update to reflect it." }
      ],
      why: "This is the lesson that proves the series worked — every object type taught individually in modules 1 through 5 has to work together here, on real (if small) business logic, under the same naming and ID-range discipline set in Lesson 01. If a learner can complete this capstone cleanly, they can start a real extension.",
      check: { q: "The capstone's definition of done requires the extension to compile with 'no errors and no warnings, and every object inside your assigned ID range.' Why call out warnings specifically, not just errors?", a: "A warning doesn't block compilation, so it's tempting to ignore — but in a shared codebase, unaddressed warnings (deprecated API usage, missing captions, etc.) accumulate silently and are exactly the kind of thing that turns into a real bug or a failed AppSource validation later. Treating warnings as blocking here builds the habit before it costs something real." },
      exercise: "Build, in order: (1) Customer table extension 78630 adding \"Rental Discount %\" (Decimal, MinValue 0); (2) EquipmentType enum extension 78631 adding the Camera value with a Caption; (3) Tal Rental Contract table 78632 (key on No., using the EquipmentType enum, and fields for customer, equipment, start date, days, total); (4) Tal Rental Contract Card page 78633 (PageType Card, SourceTable = your new table); (5) Tal Rental Pricing codeunit 78634, one public procedure returning a Decimal (daily rate × days, minus the customer's discount); (6) wire the pricing call to OnValidate on the Days field on the card, assigning the total field; (7) Tal Import Equipment XMLport 78636 (Direction = Import, Format = VariableText), rejecting negative prices rather than silently skipping them; (8) Tal Rental Availability report 78635 grouped by equipment type, and Tal Rental Revenue query 78637 grouping contracts by type and summing the amount; (9) Tal Rental Full permission set 78638 granting rimd on your new tables and X on the new codeunit, report and query — then test the entire flow logged in as a non-SUPER user.",
      definitionOfDone: "The extension compiles with zero errors and zero warnings, every object sits inside the assigned ID range, and every object carries the project prefix with a caption that reads well in the client. A contract can be created, saved, reopened, and shows the values entered. The total follows daily rate × days minus the customer discount, recalculating on change. A negative price or a zero-day rental is refused with an actionable message. A ten-row CSV import loads correctly, with bad rows reported rather than silently skipped. The availability report reads well on screen and exports cleanly. A non-SUPER user can run the whole flow end to end — import, rent, price, report — using only the permission set you shipped."
    }
  ]
},
{
  code: "BP", track: "developer", accent: "teal", noVideo: true,
  title: "Best Practices", audience: "AL developers, technical consultants, anyone reviewing or writing extension code",
  tagline: "The habits that separate code that works from code that survives the next update, the next reviewer, and the next developer.",
  desc: "Eight short lessons on the engineering discipline around AL: the extension model, naming and IDs, clean structure, performance, error handling, Git workflow, code review, and what 'done' actually means.",
  lessons: [
    {
      id: "bp-01-extension-model", n: "01", title: "Extension model first",
      dur: "10 min read",
      summary: "The one architectural decision every other lesson in this series assumes you already made: never touch a base-application object directly.",
      concepts: [
        { h: "What \"extension model first\" means", p: "Every customization in Business Central — a new field, a new page, a changed business rule — gets built as a separate extension object layered on top of the standard application, never as an edit to a Microsoft (or another vendor's) object. The base app stays exactly as shipped; your logic sits beside it, in table extensions, page extensions, event subscribers, and your own new objects." },
        { h: "Why this is non-negotiable, not a style preference", p: "Business Central ships monthly updates to the base application. An extension that never touched a base object survives every one of those updates automatically. An extension that forked or patched a base object has to be manually re-merged against every update, forever — and the first update that changes the object you patched either breaks the merge outright or silently drops your change.",
          callouts: [{ type: "avoid", text: "Copying a standard table, page, or codeunit into your app and modifying the copy \"just this once\" to hit a deadline — it looks identical to a real extension in code review but breaks on the next base-app update." }] },
        { h: "Events are how you change behavior without changing objects", p: "When you need to react to or influence something happening inside a standard object — validate a field after it changes, block a document from posting, add a line automatically — subscribe to a published event instead of editing the trigger. Business Central publishes hundreds of integration events on standard objects specifically so extensions never have to touch them directly." },
        { h: "When the extension model says no", p: "Occasionally the standard object genuinely doesn't publish the event you need. That's a real limitation, not a reason to fall back to editing the base object — the right move is requesting a new event through Microsoft's or the partner's channel, finding a different event that fires close enough, or restructuring the feature around what the extension model actually allows.",
          callouts: [{ type: "good", text: "Before writing any code, search the standard object's published event list (or ask in code review) for an existing integration event you can subscribe to — it's usually already there." }] }
      ],
      why: "A demo built by editing base objects looks identical to a properly extended one — until the first monthly update ships and the difference becomes an emergency instead of a design decision.",
      check: { q: "A developer needs to add a validation rule that runs whenever a Sales Line's quantity changes. What's the extension-model-correct way to do it, and what's the giveaway that a solution violates the model?", a: "Subscribe to the OnAfterValidateEvent published on the Sales Line table's Quantity field (or a comparable published event) from your own codeunit. The giveaway of a model violation is any change that requires opening and editing a standard object's source — including \"just adding one line\" to its trigger — rather than reacting to it from outside." }
    },
    {
      id: "bp-02-naming-ids", n: "02", title: "Naming, IDs & captions",
      dur: "11 min read",
      summary: "The prefix, the ID range, and the caption discipline that keep one extension from colliding with every other extension in the same environment.",
      concepts: [
        { h: "Every object needs a project prefix", p: "A short, consistent prefix — agreed once, before the first object is written — goes in front of every custom object's AL name: table \"Tal Rental Equipment\", codeunit \"Tal Rental Management\". It's what keeps your table extension from colliding, in name, with someone else's identically-purposed extension installed in the same environment. AppSource requires it; a well-run per-tenant project follows the same discipline anyway." },
        { h: "Object IDs come from a reserved range, not from whatever's free", p: "app.json's idRanges setting reserves a block of object IDs before a single object is written. Every object — table, page, codeunit, everything — gets its ID from inside that range. Two extensions with overlapping ranges can't both be installed in the same environment; Business Central refuses to publish the second one.",
          table: { headers: ["Range", "Typically used for"], rows: [["50000–99999", "Per-tenant extensions (PTE), self-assigned"], ["100000+", "AppSource apps, assigned by Microsoft on submission"]] } },
        { h: "Captions are what the user actually sees, and they're not optional polish", p: "Every field, action, and page needs a Caption property set explicitly — leaving it blank means Business Central falls back to the raw AL name, which a user should never have to read. A field named \"Is Rental Equipment\" with no Caption shows exactly that string, underscores and all, on a live screen." },
        { h: "File naming follows the same discipline, especially for AppSource", p: "AppSource submission enforces a strict file-naming notation: full objects as Prefix_ObjectNameExcludingAffix_FullTypeName.al, extension objects as Prefix_ObjectNameExcludingAffix_FullTypeNameExt.al, written only with [A-Za-z0-9]. Following the same convention even on projects that never go to AppSource means the file list matches the object list at a glance.",
          callouts: [{ type: "good", text: "Decide the prefix and reserve the ID range in app.json before writing the first object — changing either one later means renaming or renumbering everything already built." }, { type: "avoid", text: "Leaving a field or action's Caption unset because \"I'll fill it in later\" — it ships to the client exactly as often as it gets forgotten." }] }
      ],
      why: "A missing prefix or an unreserved ID range doesn't fail in your own sandbox — it fails the day this extension is installed alongside a second one, in a shared environment, and two objects claim the same name or number.",
      check: { q: "Two extensions from different vendors both need to add a Boolean field to the standard Customer table. What two conventions from this lesson keep them from colliding?", a: "The project prefix (each vendor's field gets a different AL name, e.g. \"Tal Is Rental Customer\" vs. another vendor's own prefixed name) and the reserved ID range (each vendor's field ID comes from their own block, so the numeric IDs can't collide either) — together they let both extensions coexist in the same environment without either one touching the other's object." }
    },
    {
      id: "bp-03-clean-structure", n: "03", title: "Clean AL structure",
      dur: "11 min read",
      summary: "One object per file, a public surface small enough to trust, and comments that explain why instead of restating what.",
      concepts: [
        { h: "One object per file, file name matches object name", p: "AL's convention — enforced by tooling, not just style — is one object per .al file, named after the object it contains. Organizing files into folders by object type (Tables, Pages, Codeunits, and so on) means any developer, including a future one who never met the original author, can find any object in seconds instead of searching." },
        { h: "Public surface vs. local implementation", p: "Procedures other objects need to call stay public (procedure); everything that's purely internal implementation stays local (local procedure). A smaller public surface is easier to keep stable across versions — every public procedure is a promise to every caller, and local procedures can be freely rewritten without breaking anything outside the object." },
        { h: "Small, single-purpose procedures over one giant OnRun", p: "Breaking logic into named procedures with one clear responsibility each — CheckAvailability(), CalculatePrice(), not one 200-line OnRun that does all three — makes each piece independently testable, independently reusable from a different caller, and far easier to review one screen at a time.",
          callouts: [{ type: "avoid", text: "A codeunit whose entire logic lives in OnRun with no named procedures underneath — nothing in it can be called individually, tested individually, or reused by anything else." }] },
        { h: "Comments explain why, not what", p: "Well-named objects, fields, and procedures already say what the code does — a comment repeating that is noise. A comment earns its place when it captures something the code can't: a non-obvious business rule, a workaround for a specific platform limitation, a constraint that would otherwise surprise the next person to touch this code." }
      ],
      why: "Structure decisions are invisible in a demo with one developer and painfully visible six months later, when a second developer has to find, understand, and safely change code they didn't write — clean structure is what makes that possible without a guided tour.",
      check: { q: "A codeunit has twelve procedures. Three are called from a page and a report; the other nine only ever get called from inside the same codeunit. How should those nine be declared, and why does it matter?", a: "As local procedures. It matters because it shrinks the codeunit's real public surface to the three procedures actually meant for outside callers — the other nine can be renamed, restructured, or removed later without checking whether anything outside the object depends on them, since nothing outside the object can." }
    },
    {
      id: "bp-04-performance", n: "04", title: "Performance & data access",
      dur: "12 min read",
      summary: "Filter before you loop, load only what you'll use, and let the platform do aggregation instead of a hand-rolled running total.",
      concepts: [
        { h: "SetLoadFields before you read", p: "Calling SetLoadFields tells Business Central which fields a loop actually needs, so it only reads those columns off disk instead of every field on the table for every row. Skipping it works fine on a ten-row test table and gets measurably slower on every row after that — the cost scales with table size, not with how many fields you actually use." },
        { h: "Filter before you loop, never after", p: "SetRange and SetFilter narrow the record set at the database, before any row reaches your AL code. Filtering \"after the fact\" — looping over every record and skipping the ones you don't want inside the loop — forces Business Central to read and discard rows that never needed to leave the database in the first place.",
          callouts: [{ type: "avoid", text: "Nested FindSet loops — record A inside record B inside record C — where each additional level multiplies read cost and rarely survives past the demo dataset into a real customer's data volume." }] },
        { h: "FlowFields for aggregation, not manual loops", p: "A FlowField backed by a SumIndexField lets the platform maintain a running total automatically, calculated on demand with CalcFields. Looping over related entries and accumulating a total by hand duplicates work the platform already does faster, and has to be kept correct by hand every time the underlying data model changes." },
        { h: "Temporary tables and buffers for intermediate work", p: "When a report or a multi-step process needs to stage, reshape, or sort data before producing final output, use a temporary record (a table variable marked Temporary) instead of writing to and reading back from a real table. It avoids unnecessary database writes and never leaves half-finished buffer data behind if the process is interrupted.",
          callouts: [{ type: "good", text: "Run a report or process against a realistic row count — thousands, not ten — before calling its performance acceptable. Problems that don't exist at demo scale are the ones that show up in production." }] }
      ],
      why: "Performance problems introduced this way are invisible in development, invisible in the demo, and invisible in code review unless the reviewer specifically checks for them — they only show up once, in production, on a customer's real data volume, which is the most expensive place to discover one.",
      check: { q: "A report loops through Sales Lines to sum the quantity shipped per item, instead of using a FlowField. What's the concrete cost of that choice as the Sales Line table grows, and what should replace it?", a: "The loop's cost grows with the total number of sales lines in the system, re-read and re-summed every time the report runs, where a FlowField's SumIndexField lets Business Central maintain and retrieve the total far more efficiently. It should be replaced with a FlowField on the item (or a query, if the aggregation spans multiple tables) using CalcFields instead of a manual loop." }
    },
    {
      id: "bp-05-errors-testing", n: "05", title: "Errors, testing & upgrade safety",
      dur: "13 min read",
      summary: "Fail loud with an actionable message, prove the logic with a test codeunit, and move existing data forward instead of leaving it behind.",
      concepts: [
        { h: "Fail loud and specific, not silent", p: "Error() and TestField() should tell the user exactly what's wrong and, wherever possible, what to do about it — \"Quantity must be greater than 0\" is far more useful than a generic failure. A process that silently skips a bad row instead of erroring on it hides a data problem until someone notices the totals don't add up, days or weeks later." },
        { h: "Structured errors carry more than a string", p: "Modern AL error handling (ErrorInfo) can attach a suggested fix action, a support link, or additional context to an error — not just a message. It's worth the extra setup on errors a user will hit repeatedly, where a one-click fix saves a support ticket every single time it fires." },
        { h: "Test codeunits aren't optional homework", p: "Automated test codeunits (Subtype = Test) for the logic most likely to be touched by a future change are what let the next developer refactor with confidence instead of fear. Untested logic doesn't stay untouched forever — it gets changed anyway, just without anything to catch a regression before a user does." },
        { h: "Upgrade codeunits move data forward, they don't skip it", p: "When a table structure or a field's meaning changes between versions, an upgrade codeunit (Subtype = Upgrade) migrates existing data at update time. Without one, existing customers' data is silently left in the old shape while new installs get the new one — a split nobody notices until a report or a validation rule reads the old data and gets it wrong.",
          callouts: [{ type: "avoid", text: "Catching an error just to suppress it so a process \"doesn't fail\" — the data keeps moving in a state nobody validated, and the failure resurfaces later, further from its actual cause." }, { type: "good", text: "Mark a field or procedure [Obsolete('reason', 'version')] the moment you know it's going away, instead of deleting it outright — it gives every caller a compiler warning and a real migration window." }] }
      ],
      why: "Error handling, tests, and upgrade logic are the parts of a feature that only prove their value later — when a user hits an edge case, when a developer changes code they didn't write, or when a customer updates from a version that predates a data-model change. Skipping them is invisible right up until one of those three things happens.",
      check: { q: "A table's \"Status\" field changes from a Boolean to an Enum with four values, between two versions of an extension. What breaks for existing customers if there's no upgrade codeunit, and what does the upgrade codeunit need to do?", a: "Existing customers' data still holds the old Boolean values on disk; without an upgrade codeunit, that data is never converted to the new Enum's values, so it reads incorrectly (or fails to read at all) once the new version is installed. The upgrade codeunit needs to run once at update time, mapping every existing true/false value to the correct one of the four new Enum values before anything else reads the field." }
    },
    {
      id: "bp-06-git-workflow", n: "06", title: "Git workflow for BC",
      dur: "11 min read",
      summary: "Why one-object-per-file makes AL unusually reviewable in Git, and the habits that keep it that way.",
      concepts: [
        { h: "One object, one file, one diff you can actually review", p: "AL's one-file-per-object convention means a pull request's diff maps directly to what actually changed — a one-field addition shows up as a small, focused diff on one file, not buried inside a wall of unrelated changes. Keeping that discipline is what makes AL diffs genuinely reviewable instead of just technically inspectable." },
        { h: "app.json version bumps belong in their own commit", p: "Bumping the extension's version number alongside unrelated feature work makes it hard to tell, later, whether a version bump was intentional or accidental collateral from an unrelated change. Isolating it into its own commit keeps the history honest about what each change actually did." },
        { h: "Branch per feature, scoped to one reviewable unit of work", p: "Small pull requests scoped to one object or one closely related group of objects get reviewed properly, line by line. A branch that touches a dozen unrelated objects at once gets rubber-stamped, because nobody has time to genuinely read all of it before the deadline it's attached to." },
        { h: "The .al source is the source of truth, never the compiled .app", p: "Commit source files only; never commit the compiled package. Let CI, or the reviewer's own build, produce the .app from source — a committed binary can't be diffed, can't be reviewed, and inevitably drifts out of sync with the source that's supposed to have produced it.",
          callouts: [{ type: "good", text: "Commit messages that name the object and the change (\"Add SetLoadFields to RentalEquipment availability loop\") instead of \"fix bug\" — the log becomes a second, searchable changelog." }, { type: "avoid", text: "Force-pushing over a branch someone else is reviewing mid-comment-thread — it silently invalidates every line comment already left on the old commits." }] }
      ],
      why: "Git workflow habits are what determine whether a code review actually catches problems or just exists as a formality — a reviewable diff gets reviewed properly; an unreviewable one gets approved on trust, which is exactly how the mistakes from every earlier lesson in this series make it into production.",
      check: { q: "A developer's branch bundles a new field, an unrelated bug fix, and an app.json version bump into one commit with the message \"updates.\" What three separate problems does this create for whoever reviews or later reads this history?", a: "The reviewer can't approve or reject the new field, the bug fix, and the version bump independently — they're forced to accept or reject all three together. Anyone reading the history later can't tell which change the version bump was actually for. And a future revert of just the bug fix (if it turns out wrong) would also undo the unrelated field and the version bump, since all three are inseparably one commit." }
    },
    {
      id: "bp-07-code-review", n: "07", title: "Code review checklist",
      dur: "12 min read",
      summary: "What an AL reviewer actually checks, in order — before style, before naming, before anything else.",
      concepts: [
        { h: "No direct base-object edits, anywhere in the diff", p: "This is the single fastest reject, and it comes first for a reason: a diff that touches a standard object's source — even one line — violates the extension model from Lesson 01 and has to be rejected before anything else about the change matters." },
        { h: "Naming, prefix, and ID range", p: "Does every new object carry the agreed prefix and a Caption that reads well to a user, and does its ID fall inside the extension's reserved range? This is mechanical to check and catches the collisions and forgotten-caption problems from Lesson 02 before they reach a shared environment." },
        { h: "Permissions match what the code actually needs", p: "A new table needs a matching permission set entry with exactly the access levels the feature requires — not more. A blanket rimd granted on everything \"to be safe\" is itself a review finding, not a shortcut; it's a wider attack surface and a harder thing to reason about than a precisely scoped grant." },
        { h: "Performance and error-message quality, not just \"does it compile\"", p: "Does the new code filter before looping and load only the fields it uses? Does an Error() message tell the user what to do next, not just that something went wrong? A change that compiles cleanly can still fail both of these — and a reviewer who only checks for compilation errors will approve it anyway.",
          callouts: [{ type: "good", text: "Review the diff in the order of this checklist, every time — extension-model violations and permission gaps first, style and naming last. Catching a base-object edit on line one of the review is cheaper than finding it after approving everything else." }] }
      ],
      why: "A checklist followed consistently catches the same class of problem every time, regardless of who's reviewing or how rushed the review is — an ad hoc \"looks fine to me\" review catches whatever the reviewer happens to notice that day, which is a very different and far less reliable thing.",
      check: { q: "A pull request adds a new table, a matching permission set entry with full rimd access, and a page — and compiles with no errors or warnings. What single review finding from this lesson could still block it, and why?", a: "An over-broad permission grant — rimd (read, insert, modify, delete) on the new table when the feature might only need read and insert, for example. Compiling cleanly and having *a* permission set entry doesn't mean the entry is scoped correctly; \"more access than the code needs\" is a real finding on its own, independent of whether anything else in the diff is wrong." }
    },
    {
      id: "bp-08-definition-of-done", n: "08", title: "Team Definition of Done",
      dur: "10 min read",
      summary: "The checklist that separates \"it works on my machine\" from actually done — and why every item on it is non-negotiable, not aspirational.",
      concepts: [
        { h: "Compiles clean, zero warnings — not just zero errors", p: "A warning doesn't block compilation, which is exactly why it's tempting to ignore. In a shared codebase, unaddressed warnings — deprecated API usage, a missing caption, an unused variable — accumulate silently and are exactly the kind of thing that turns into a real bug, or a failed AppSource validation, later." },
        { h: "Reviewed and approved by someone who wasn't the author", p: "Definition of done requires an actual second set of eyes running the Lesson 07 checklist against the change — not a self-approval, and not a rubber stamp from someone who skimmed the diff. The review is where the extension-model, ID-range, and permission checks from earlier lessons actually get enforced." },
        { h: "Permissions, captions, and documentation are part of \"done,\" not follow-up work", p: "A feature that works but ships without its permission set entries, without captions set on every field and action, or without a short note on what it does and why isn't done — it's a prototype that happens to compile. \"I'll add the permissions later\" is exactly the kind of follow-up work that quietly never happens." },
        { h: "No TODOs, no commented-out code, no placeholder IDs left behind", p: "Scaffolding from the exercise or prototype stage — a // TODO: handle this properly, a block of commented-out code from an earlier approach, an object ID that was never moved into the real reserved range — tends to survive into production specifically because nobody explicitly checked for it. A definition-of-done checklist item for leftover scaffolding is what catches it before a reviewer has to.",
          callouts: [{ type: "avoid", text: "Merging a change with a // TODO comment and no linked follow-up task — without a tracked task, \"later\" almost never actually arrives." }] }
      ],
      why: "A team without an explicit, written definition of done ends up with as many private definitions as it has developers — one person's \"done\" is another's \"still needs permissions and a review.\" Writing it down once and applying it to every change is what makes \"done\" mean the same thing regardless of who says it.",
      check: { q: "A developer says a feature is \"done\" — it compiles, works in their sandbox, and they tested it manually. Using this lesson's checklist, name two things that could still be missing before it actually meets Definition of Done.", a: "Any two of: a review from someone other than the author; permission set entries and captions set on every new field/action; documentation of what the feature does; zero compiler warnings (not just zero errors); and no leftover TODOs, commented-out code, or placeholder IDs from development. \"Compiles and works for me\" covers none of these on its own." }
    }
  ]
}
];


/* ============================================================
   TALAN ACADEMY — CODE LIBRARY
   Multiple labelled samples per lesson, merged onto lessons at boot.
   Shape: lessonId -> [ { label, lang, src } ]
   ============================================================ */

const CODE_LIBRARY = {

/* ---------------- AL CORE ---------------- */

"al-01": [
  { label: "app.json — extension identity", lang: "JSON", src:
`{
  "id": "5f1c8a2e-9d44-4b31-a7e2-6c0f9b3d1a88",
  "name": "Loyalty Points",
  "publisher": "Talan",
  "version": "1.0.0.0",
  "brief": "Loyalty points tracking for customers",
  "platform": "1.0.0.0",
  "application": "24.0.0.0",
  "idRanges": [ { "from": 50100, "to": 50149 } ],
  "runtime": "13.0",
  "dependencies": []
}` },
  { label: "launch.json — where to publish", lang: "JSON", src:
`{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "BC Sandbox",
      "type": "al",
      "request": "launch",
      "environmentType": "Sandbox",
      "environmentName": "TALAN-DEV",
      "startupObjectId": 22,
      "startupObjectType": "Page",
      "schemaUpdateMode": "Synchronize"
    }
  ]
}` },
  { label: "Your first object", lang: "AL", src:
`pageextension 50100 "Customer List Ext" extends "Customer List"
{
    actions
    {
        addfirst(processing)
        {
            action(SayHello)
            {
                Caption = 'Say hello';
                ApplicationArea = All;
                Image = Info;

                trigger OnAction()
                begin
                    Message('Hello from Talan.');
                end;
            }
        }
    }
}` }
],

"al-02": [
  { label: "Table — the data", lang: "AL", src:
`table 50100 "Loyalty Entry"
{
    DataClassification = CustomerContent;

    fields
    {
        field(1; "Entry No."; Integer) { AutoIncrement = true; }
        field(2; "Customer No."; Code[20])
        {
            TableRelation = Customer."No.";
            NotBlank = true;
        }
        field(3; "Posting Date"; Date) { }
        field(4; Points; Decimal) { DecimalPlaces = 0 : 2; }
    }

    keys
    {
        key(PK; "Entry No.") { Clustered = true; }
        key(ByCustomer; "Customer No.", "Posting Date") { }
    }
}` },
  { label: "Page — the interface", lang: "AL", src:
`page 50100 "Loyalty Entries"
{
    PageType = List;
    SourceTable = "Loyalty Entry";
    UsageCategory = Lists;
    ApplicationArea = All;
    Editable = false;

    layout
    {
        area(content)
        {
            repeater(Entries)
            {
                field("Customer No."; Rec."Customer No.") { ApplicationArea = All; }
                field("Posting Date"; Rec."Posting Date") { ApplicationArea = All; }
                field(Points; Rec.Points) { ApplicationArea = All; }
            }
        }
    }
}` },
  { label: "Codeunit — the logic", lang: "AL", src:
`codeunit 50100 "Loyalty Management"
{
    procedure AwardPoints(CustomerNo: Code[20]; Amount: Decimal)
    var
        LoyaltyEntry: Record "Loyalty Entry";
    begin
        if Amount <= 0 then
            exit;

        LoyaltyEntry.Init();
        LoyaltyEntry.Validate("Customer No.", CustomerNo);
        LoyaltyEntry.Validate("Posting Date", WorkDate());
        LoyaltyEntry.Validate(Points, Round(Amount / 10, 1));
        LoyaltyEntry.Insert(true);
    end;
}` }
],

"al-03": [
  { label: "Field types and constraints", lang: "AL", src:
`table 50101 "Loyalty Tier"
{
    fields
    {
        // Code auto-uppercases and trims — ideal for identifiers
        field(1; "Code"; Code[20]) { NotBlank = true; }

        // Text preserves case — for human-readable names
        field(2; Description; Text[100]) { }

        // Decimal with explicit precision
        field(3; "Discount %"; Decimal)
        {
            MinValue = 0;
            MaxValue = 100;
            DecimalPlaces = 0 : 2;
        }

        // Boolean is binary; no third state
        field(4; Active; Boolean) { InitValue = true; }

        // Date, and an Option/Enum for fixed choices
        field(5; "Valid From"; Date) { }
        field(6; Status; Enum "Loyalty Status") { }
    }
}` },
  { label: "Keys and SumIndexFields", lang: "AL", src:
`keys
{
    // Primary key — clustered, defines physical order
    key(PK; "Entry No.") { Clustered = true; }

    // Secondary key for a common filter+sort pattern.
    // SumIndexFields pre-aggregate for fast FlowField totals.
    key(ByCustomer; "Customer No.", "Posting Date")
    {
        SumIndexFields = Points;
    }
}

fieldgroups
{
    // Shown in dropdown lookups
    fieldgroup(DropDown; "Entry No.", "Customer No.", Points) { }
}` },
  { label: "Validation in the data layer", lang: "AL", src:
`field(4; Points; Decimal)
{
    MinValue = 0;

    trigger OnValidate()
    var
        Customer: Record Customer;
    begin
        // Runs wherever this field is set with Validate(),
        // regardless of which page or process wrote it.
        if not Customer.Get(Rec."Customer No.") then
            Error('Select a customer before entering points.');

        if Customer.Blocked <> Customer.Blocked::" " then
            Error('Customer %1 is blocked.', Customer."No.");
    end;
}` }
],

"al-04": [
  { label: "Card page with groups and FactBox", lang: "AL", src:
`page 50101 "Loyalty Tier Card"
{
    PageType = Card;
    SourceTable = "Loyalty Tier";
    ApplicationArea = All;

    layout
    {
        area(content)
        {
            group(General)
            {
                field("Code"; Rec."Code") { ApplicationArea = All; }
                field(Description; Rec.Description) { ApplicationArea = All; }
            }
            group(Terms)
            {
                Caption = 'Terms';
                field("Discount %"; Rec."Discount %") { ApplicationArea = All; }
                field("Valid From"; Rec."Valid From") { ApplicationArea = All; }
            }
        }
        area(factboxes)
        {
            part(Notes; "Record Notes")
            {
                ApplicationArea = All;
                SubPageLink = "No." = field("Code");
            }
        }
    }
}` },
  { label: "Actions that call a codeunit", lang: "AL", src:
`actions
{
    area(processing)
    {
        action(Recalculate)
        {
            Caption = 'Recalculate points';
            ApplicationArea = All;
            Image = Calculate;
            Promoted = true;
            PromotedCategory = Process;
            PromotedIsBig = true;

            trigger OnAction()
            var
                LoyaltyMgt: Codeunit "Loyalty Management";
            begin
                // The trigger calls. It does not implement.
                LoyaltyMgt.RecalculateFor(Rec."Code");
                CurrPage.Update(false);
            end;
        }
    }
}` },
  { label: "Page triggers", lang: "AL", src:
`trigger OnOpenPage()
begin
    // Filter to what this user should see, before anything renders
    Rec.SetRange(Active, true);
end;

trigger OnAfterGetRecord()
begin
    // Runs per record as the page reads it —
    // keep it cheap, it fires for every visible row
    StatusStyle := GetStyleFor(Rec.Status);
end;

trigger OnQueryClosePage(CloseAction: Action): Boolean
begin
    if Rec.HasUnsavedChanges() then
        exit(Confirm('Discard changes?', false));
    exit(true);
end;` }
],

"al-05": [
  { label: "Procedure design", lang: "AL", src:
`codeunit 50101 "Loyalty Calc"
{
    // Public: callable from other objects
    procedure PointsFor(Amount: Decimal; TierCode: Code[20]): Decimal
    var
        Tier: Record "Loyalty Tier";
        Multiplier: Decimal;
    begin
        Multiplier := 1;
        if Tier.Get(TierCode) then
            Multiplier := 1 + (Tier."Discount %" / 100);

        exit(Round(Amount / 10 * Multiplier, 0.01));
    end;

    // Local: internal helper, not visible outside this codeunit
    local procedure IsEligible(Amount: Decimal): Boolean
    begin
        exit(Amount >= 10);
    end;

    // var parameter — passed by reference, caller sees changes
    procedure ApplyTo(var SalesLine: Record "Sales Line")
    begin
        SalesLine."Line Discount %" := 5;
    end;
}` },
  { label: "Event subscriber — reacting safely", lang: "AL", src:
`[EventSubscriber(ObjectType::Table, Database::"Sales Line",
  'OnAfterValidateEvent', 'Quantity', false, false)]
local procedure OnAfterValidateQuantity(var Rec: Record "Sales Line")
begin
    if Rec.Quantity <> 0 then begin
        Rec."Line Amount" := Rec.Quantity * Rec."Unit Price";
        Rec.Modify();
    end;
end;

[EventSubscriber(ObjectType::Codeunit, Codeunit::"Sales-Post",
  'OnAfterPostSalesDoc', '', false, false)]
local procedure OnAfterPostSales(var SalesHeader: Record "Sales Header")
var
    LoyaltyMgt: Codeunit "Loyalty Management";
begin
    // Base code raised this. We never touched it.
    LoyaltyMgt.AwardPoints(SalesHeader."Sell-to Customer No.",
                           SalesHeader.Amount);
end;` },
  { label: "Publishing your own events", lang: "AL", src:
`// Let other extensions extend yours, the same way you extend base.
[IntegrationEvent(false, false)]
local procedure OnBeforeAwardPoints(CustomerNo: Code[20];
                                    var Points: Decimal;
                                    var IsHandled: Boolean)
begin
end;

procedure AwardPoints(CustomerNo: Code[20]; Amount: Decimal)
var
    Points: Decimal;
    IsHandled: Boolean;
begin
    Points := Round(Amount / 10, 1);
    OnBeforeAwardPoints(CustomerNo, Points, IsHandled);
    if IsHandled then
        exit;

    // ...normal insert logic
end;` }
],

"al-06": [
  { label: "Report dataset", lang: "AL", src:
`report 50100 "Loyalty Statement"
{
    UsageCategory = ReportsAndAnalysis;
    ApplicationArea = All;
    DefaultLayout = RDLC;
    RDLCLayout = './src/LoyaltyStatement.rdl';

    dataset
    {
        dataitem(Customer; Customer)
        {
            RequestFilterFields = "No.", "Country/Region Code";

            column(CustomerNo; "No.") { }
            column(CustomerName; Name) { }

            dataitem(LoyaltyEntry; "Loyalty Entry")
            {
                DataItemLink = "Customer No." = field("No.");
                DataItemTableView = sorting("Posting Date");

                column(PostingDate; "Posting Date") { }
                column(Points; Points) { }
            }

            trigger OnAfterGetRecord()
            begin
                TotalPoints := 0;
            end;
        }
    }

    var
        TotalPoints: Decimal;
}` },
  { label: "Request page with parameters", lang: "AL", src:
`requestpage
{
    layout
    {
        area(content)
        {
            group(Options)
            {
                field(ShowDetail; ShowDetail)
                {
                    Caption = 'Show detail lines';
                    ApplicationArea = All;
                }
                field(FromDate; FromDate)
                {
                    Caption = 'From date';
                    ApplicationArea = All;
                }
            }
        }
    }

    trigger OnQueryClosePage(CloseAction: Action): Boolean
    begin
        if (CloseAction = Action::OK) and (FromDate = 0D) then
            Error('Enter a from date.');
        exit(true);
    end;
}

var
    ShowDetail: Boolean;
    FromDate: Date;` },
  { label: "Running a report from code", lang: "AL", src:
`procedure PrintStatement(CustomerNo: Code[20])
var
    Customer: Record Customer;
    LoyaltyStatement: Report "Loyalty Statement";
begin
    Customer.SetRange("No.", CustomerNo);
    LoyaltyStatement.SetTableView(Customer);

    // true  = show request page
    // false = run silently, useful from a job queue
    LoyaltyStatement.Run();

    // Or save directly to PDF:
    // LoyaltyStatement.SaveAsPdf(FilePath);
end;` }
],

"al-07": [
  { label: "Version and ranges in app.json", lang: "JSON", src:
`{
  "name": "Loyalty Points",
  "publisher": "Talan",

  // major.minor.build.revision — increment every release
  "version": "1.2.0.0",

  // Objects must stay inside the declared range
  "idRanges": [ { "from": 50100, "to": 50149 } ],

  "application": "24.0.0.0",
  "runtime": "13.0",

  "features": [ "NoImplicitWith" ],
  "target": "Cloud"
}` },
  { label: "Build and publish from the CLI", lang: "Shell", src:
`# Compile to a .app package
alc /project:. /packagecachepath:./.alpackages

# Publish with the AL Language extension in VS Code:
#   F5              publish and start debugging
#   Ctrl+F5         publish without debugging
#   Ctrl+Shift+P    "AL: Publish without debugging"

# Or via PowerShell against an on-prem instance
Publish-NAVApp -ServerInstance BC240 \\
  -Path ".\\Talan_LoyaltyPoints_1.2.0.0.app" -SkipVerification
Sync-NAVApp   -ServerInstance BC240 -Name "Loyalty Points"
Install-NAVApp -ServerInstance BC240 -Name "Loyalty Points"` },
  { label: "Azure DevOps build pipeline", lang: "YAML", src:
`trigger:
  branches:
    include: [ main, 'feature/*' ]

pool:
  vmImage: 'windows-latest'

steps:
  - task: PowerShell@2
    displayName: 'Compile extension'
    inputs:
      targetType: inline
      script: |
        alc /project:$(Build.SourcesDirectory) \`
            /packagecachepath:$(Build.SourcesDirectory)/.alpackages

  - task: PublishBuildArtifacts@1
    displayName: 'Publish .app artifact'
    inputs:
      PathtoPublish: '$(Build.SourcesDirectory)'
      ArtifactName: 'app'` }
],

/* ---------------- AL METHODS ---------------- */

"al-m1": [
  { label: "Create, read, update, delete", lang: "AL", src:
`var
    Customer: Record Customer;
begin
    // CREATE — Init sets defaults, Insert writes
    Customer.Init();
    Customer.Validate("No.", 'C0001');
    Customer.Validate(Name, 'Talan Demo');
    Customer.Insert(true);          // true = run OnInsert trigger

    // READ — Get by primary key, returns Boolean
    if Customer.Get('C0001') then
        Message('Found %1', Customer.Name);

    // UPDATE
    Customer.Validate("Payment Terms Code", 'NET30');
    Customer.Modify(true);          // true = run OnModify trigger

    // DELETE
    Customer.Delete(true);
end;` },
  { label: "Filtering and looping", lang: "AL", src:
`var
    Customer: Record Customer;
    Total: Integer;
begin
    Customer.Reset();               // always reset before filtering
    Customer.SetRange("Country/Region Code", 'TN');
    Customer.SetFilter(Name, 'A*');           // wildcard
    Customer.SetFilter("Balance (LCY)", '>%1', 1000);

    Total := Customer.Count();

    if Customer.FindSet() then
        repeat
            Customer.Validate("Payment Terms Code", 'NET30');
            Customer.Modify(true);
        until Customer.Next() = 0;

    // FindFirst / FindLast jump to one end of the filtered set
    if Customer.FindLast() then
        Message('Last: %1', Customer."No.");

    // IsEmpty is cheaper than Count when you only need existence
    if not Customer.IsEmpty() then
        Message('%1 customers matched.', Total);
end;` },
  { label: "Validate vs. direct assignment", lang: "AL", src:
`// Direct assignment — skips OnValidate, skips dependent logic.
// Fast, and occasionally what you want. Usually not.
SalesLine."Unit Price" := 100;

// Validate — runs OnValidate, recalculates dependent fields
// (line amount, VAT, discounts). Prefer this.
SalesLine.Validate("Unit Price", 100);

// TestField — asserts a value is present, errors if not
SalesLine.TestField("No.");
SalesLine.TestField(Quantity);

// Guard against silently operating on a stale filter
Customer.Reset();` }
],

"al-m2": [
  { label: "String handling", lang: "AL", src:
`var
    Name: Text[100];
    Initials: Text[3];
    Length: Integer;
begin
    Name := 'Business Central';

    Length   := StrLen(Name);                 // 16
    Initials := CopyStr(Name, 1, 3);          // 'Bus'
    Name     := UpperCase(Name);              // 'BUSINESS CENTRAL'
    Name     := LowerCase(Name);              // 'business central'

    // StrSubstNo builds a message with placeholders
    Message(StrSubstNo('Customer %1 has %2 points', 'C0001', 250));

    // Copy safely into a shorter field — CopyStr prevents overflow
    Rec.Description := CopyStr(LongText, 1, MaxStrLen(Rec.Description));
end;` },
  { label: "Format and Evaluate", lang: "AL", src:
`var
    Amount: Decimal;
    AmountText: Text;
    ParsedDate: Date;
begin
    Amount := 1234.5;

    // Format: value -> text
    AmountText := Format(Amount, 0, '<Precision,2:2><Standard Format,0>');
    // '1,234.50'

    // Evaluate: text -> typed value. ALWAYS check the return value.
    if not Evaluate(ParsedDate, '2026-08-01') then
        Error('Could not parse the date.');

    // Silent failure is the trap:
    Evaluate(Amount, 'not a number');   // returns false, Amount stays 0
end;` },
  { label: "Dates and date formulas", lang: "AL", src:
`var
    DueDate: Date;
    PeriodStart: Date;
    Stamp: DateTime;
begin
    DueDate := CalcDate('<+30D>', Today());     // 30 days out
    DueDate := CalcDate('<+1M>', WorkDate());   // one month out
    PeriodStart := CalcDate('<-CM>', Today());  // start of current month
    DueDate := CalcDate('<CM>', Today());       // end of current month

    Stamp := CurrentDateTime();

    // WorkDate() is the user's posting date context.
    // Today() is the real system date. They are often different —
    // use WorkDate() for anything that posts.
end;` }
],

"al-m3": [
  { label: "Talking to the user", lang: "AL", src:
`// Message — informs, execution continues
Message('Points awarded to %1.', Customer.Name);

// Error — stops execution AND rolls back the transaction
if Rec.Quantity <= 0 then
    Error('Quantity must be greater than zero.');

// Confirm — asks, returns the answer.
// Second parameter is the default when the dialog is suppressed.
if Confirm('Delete this record?', false) then
    Rec.Delete(true);

// Labels keep text translatable and out of the logic
var
    QtyErr: Label 'Quantity must be greater than zero.';
    DeleteQst: Label 'Delete this record?';` },
  { label: "Error handling that does not stop", lang: "AL", src:
`var
    LoyaltyMgt: Codeunit "Loyalty Management";
begin
    // Run in a try function to catch rather than abort
    if not TryAwardPoints('C0001', 500) then
        LogWarning(GetLastErrorText());
end;

[TryFunction]
local procedure TryAwardPoints(CustomerNo: Code[20]; Amount: Decimal)
var
    LoyaltyMgt: Codeunit "Loyalty Management";
begin
    LoyaltyMgt.AwardPoints(CustomerNo, Amount);
end;` },
  { label: "Progress dialogs and utilities", lang: "AL", src:
`var
    Window: Dialog;
    Counter: Integer;
    ProcessingMsg: Label 'Processing #1######## of #2########';
begin
    Window.Open(ProcessingMsg);

    if Customer.FindSet() then
        repeat
            Counter += 1;
            Window.Update(1, Counter);
            Window.Update(2, Customer.Count());
        until Customer.Next() = 0;

    Window.Close();

    Amount := Round(Amount, 0.01);      // rounding precision
    Clear(TempRecord);                  // reset a variable
    // Sleep(1000);  blocks — testing and pacing only
end;` }
],

/* ---------------- AL BONUS ---------------- */

"al-b01": [
  { label: "Role Center page", lang: "AL", src:
`page 50110 "Loyalty Manager Role Center"
{
    PageType = RoleCenter;

    layout
    {
        area(RoleCenter)
        {
            part(Headline; "Headline RC Business Manager") { }
            part(Activities; "Loyalty Activities") { }
        }
    }

    actions
    {
        area(Sections)
        {
            group(Loyalty)
            {
                Caption = 'Loyalty';
                action(Entries)
                {
                    RunObject = page "Loyalty Entries";
                    ApplicationArea = All;
                }
            }
        }
        area(Embedding)
        {
            action(Customers)
            {
                RunObject = page "Customer List";
                ApplicationArea = All;
            }
        }
    }
}` },
  { label: "Profile binding the Role Center", lang: "AL", src:
`profile "LOYALTY MANAGER"
{
    Caption = 'Loyalty Manager';
    ProfileDescription = 'Manages customer loyalty programmes.';
    RoleCenter = "Loyalty Manager Role Center";
    Enabled = true;
}` },
  { label: "Cue tile with a drill-down", lang: "AL", src:
`page 50111 "Loyalty Activities"
{
    PageType = CardPart;
    SourceTable = "Loyalty Cue";

    layout
    {
        area(content)
        {
            cuegroup(Today)
            {
                field("Entries Today"; Rec."Entries Today")
                {
                    ApplicationArea = All;
                    DrillDownPageId = "Loyalty Entries";
                }
            }
        }
    }

    trigger OnOpenPage()
    begin
        Rec.Reset();
        if not Rec.Get() then begin
            Rec.Init();
            Rec.Insert();
        end;
    end;
}` }
],

"al-b02": [
  { label: "Permission set in AL", lang: "AL", src:
`permissionset 50100 "Loyalty - Read"
{
    Assignable = true;
    Caption = 'Loyalty read only';
    IncludedPermissionSets = "D365 BASIC";

    Permissions =
        tabledata "Loyalty Entry" = R,
        tabledata "Loyalty Tier"  = R,
        table "Loyalty Entry"     = X,
        page "Loyalty Entries"    = X;
}

permissionset 50101 "Loyalty - Edit"
{
    Assignable = true;
    Caption = 'Loyalty full access';
    IncludedPermissionSets = "Loyalty - Read";

    Permissions =
        tabledata "Loyalty Entry" = RIMD,
        tabledata "Loyalty Tier"  = RIMD,
        codeunit "Loyalty Management" = X;
}` },
  { label: "Checking permissions in code", lang: "AL", src:
`var
    LoyaltyEntry: Record "Loyalty Entry";
begin
    // Test before attempting, to fail with a clear message
    if not LoyaltyEntry.WritePermission() then
        Error('You do not have permission to change loyalty entries.');

    if LoyaltyEntry.ReadPermission() then
        ShowEntries();

    // Run a specific operation with elevated rights,
    // scoped tightly and used sparingly
    // codeunit ... { Permissions = tabledata "Loyalty Entry" = RIMD; }
end;` }
],

"al-b03": [
  { label: "Enum definition", lang: "AL", src:
`enum 50100 "Loyalty Status"
{
    Extensible = true;      // others may add values

    value(0; New)
    {
        Caption = 'New';
    }
    value(1; Active)
    {
        Caption = 'Active';
    }
    value(2; Suspended)
    {
        Caption = 'Suspended';
    }
}` },
  { label: "Extending someone else's enum", lang: "AL", src:
`enumextension 50100 "Loyalty Status Ext" extends "Loyalty Status"
{
    value(50100; Cancelled)
    {
        Caption = 'Cancelled';
    }
}

// Use your own ID range for the added values, exactly as
// you would for objects — collisions here are just as painful.` },
  { label: "Using an enum in code", lang: "AL", src:
`var
    Entry: Record "Loyalty Entry";
begin
    Entry.Status := Entry.Status::Active;

    case Entry.Status of
        Entry.Status::New:
            InitialiseTier(Entry);
        Entry.Status::Active:
            AwardPoints(Entry);
        Entry.Status::Suspended:
            Message('Suspended — no points awarded.');
    end;

    // Filtering by enum value
    Entry.SetRange(Status, Entry.Status::Active);
end;` }
],

"al-b04": [
  { label: "Interface and implementations", lang: "AL", src:
`interface "Shipping Method"
{
    procedure CalculateCost(Weight: Decimal): Decimal;
    procedure EstimatedDays(): Integer;
}

codeunit 50120 "Standard Shipping" implements "Shipping Method"
{
    procedure CalculateCost(Weight: Decimal): Decimal
    begin
        exit(Weight * 2.0 + 5);
    end;

    procedure EstimatedDays(): Integer
    begin
        exit(5);
    end;
}

codeunit 50121 "Express Shipping" implements "Shipping Method"
{
    procedure CalculateCost(Weight: Decimal): Decimal
    begin
        exit(Weight * 4.5 + 15);
    end;

    procedure EstimatedDays(): Integer
    begin
        exit(1);
    end;
}` },
  { label: "Enum-backed implementation selection", lang: "AL", src:
`// The idiomatic BC pattern: an enum that maps values
// to the codeunits implementing the interface.
enum 50110 "Shipping Type" implements "Shipping Method"
{
    Extensible = true;

    value(0; Standard)
    {
        Caption = 'Standard';
        Implementation = "Shipping Method" = "Standard Shipping";
    }
    value(1; Express)
    {
        Caption = 'Express';
        Implementation = "Shipping Method" = "Express Shipping";
    }
}` },
  { label: "Calling through the interface", lang: "AL", src:
`var
    ShippingMethod: Interface "Shipping Method";
    ShippingType: Enum "Shipping Type";
    Cost: Decimal;
begin
    ShippingType := SalesHeader."Shipping Type";

    // Resolves to whichever codeunit the enum value points at.
    // Adding a new shipping type changes nothing here.
    ShippingMethod := ShippingType;

    Cost := ShippingMethod.CalculateCost(SalesHeader."Total Weight");
    Message('Cost %1, arriving in %2 days',
            Cost, ShippingMethod.EstimatedDays());
end;` }
],

"al-b05": [
  { label: "Test codeunit", lang: "AL", src:
`codeunit 50130 "Loyalty Tests"
{
    Subtype = Test;
    TestPermissions = Disabled;

    var
        Assert: Codeunit Assert;
        LibrarySales: Codeunit "Library - Sales";

    [Test]
    procedure PointsAreOnePerTenSpent()
    var
        Calc: Codeunit "Loyalty Calc";
        Result: Decimal;
    begin
        // Arrange — nothing needed for a pure calculation

        // Act
        Result := Calc.PointsFor(100, '');

        // Assert
        Assert.AreEqual(10, Result, 'Expected 10 points per 100 spent');
    end;

    [Test]
    procedure NegativeAmountAwardsNothing()
    var
        Calc: Codeunit "Loyalty Calc";
    begin
        Assert.AreEqual(0, Calc.PointsFor(-50, ''), 'Negative should award 0');
    end;
}` },
  { label: "Testing that an error is raised", lang: "AL", src:
`[Test]
procedure BlockedCustomerIsRejected()
var
    Customer: Record Customer;
    LoyaltyMgt: Codeunit "Loyalty Management";
begin
    // Arrange
    LibrarySales.CreateCustomer(Customer);
    Customer.Blocked := Customer.Blocked::All;
    Customer.Modify(true);

    // Act
    asserterror LoyaltyMgt.AwardPoints(Customer."No.", 100);

    // Assert — check the specific error, not just that one occurred
    Assert.ExpectedError('is blocked');
end;` },
  { label: "Handlers for dialogs in tests", lang: "AL", src:
`[Test]
[HandlerFunctions('ConfirmHandler,MessageHandler')]
procedure DeleteAsksForConfirmation()
begin
    // Tests run without a UI, so any dialog must have a handler
    // or the test fails with "unhandled UI".
end;

[ConfirmHandler]
procedure ConfirmHandler(Question: Text[1024]; var Reply: Boolean)
begin
    Reply := true;
end;

[MessageHandler]
procedure MessageHandler(Msg: Text[1024])
begin
    // Swallow the message
end;` }
],

"al-b06": [
  { label: "API page", lang: "AL", src:
`page 50140 "Loyalty Entry API"
{
    PageType = API;
    APIPublisher = 'talan';
    APIGroup = 'loyalty';
    APIVersion = 'v1.0';
    EntityName = 'loyaltyEntry';
    EntitySetName = 'loyaltyEntries';
    SourceTable = "Loyalty Entry";
    DelayedInsert = true;
    ODataKeyFields = SystemId;

    layout
    {
        area(content)
        {
            repeater(Group)
            {
                field(id; Rec.SystemId) { Editable = false; }
                field(customerNumber; Rec."Customer No.") { }
                field(postingDate; Rec."Posting Date") { }
                field(points; Rec.Points) { }
            }
        }
    }
}

// Resulting endpoint:
// /api/talan/loyalty/v1.0/companies({id})/loyaltyEntries` },
  { label: "Calling the API", lang: "HTTP", src:
`GET /api/talan/loyalty/v1.0/companies({companyId})/loyaltyEntries
     ?$filter=points gt 100&$top=20
Authorization: Bearer {token}

POST /api/talan/loyalty/v1.0/companies({companyId})/loyaltyEntries
Content-Type: application/json

{
  "customerNumber": "C0001",
  "postingDate": "2026-08-01",
  "points": 25
}

PATCH .../loyaltyEntries({id})
If-Match: {etag}          # required — prevents lost updates` },
  { label: "Calling out to an external service", lang: "AL", src:
`var
    Client: HttpClient;
    Response: HttpResponseMessage;
    Content: HttpContent;
    Headers: HttpHeaders;
    Body: Text;
begin
    Content.WriteFrom('{"customer":"C0001"}');
    Content.GetHeaders(Headers);
    Headers.Clear();
    Headers.Add('Content-Type', 'application/json');

    if not Client.Post('https://api.example.com/points', Content, Response) then
        Error('Could not reach the service.');

    if not Response.IsSuccessStatusCode() then
        Error('Service returned %1', Response.HttpStatusCode());

    Response.Content().ReadAs(Body);
end;` }
],

"al-b07": [
  { label: "Upgrade codeunit", lang: "AL", src:
`codeunit 50150 "Loyalty Upgrade"
{
    Subtype = Upgrade;

    trigger OnUpgradePerCompany()
    var
        UpgradeTag: Codeunit "Upgrade Tag";
    begin
        // Tags make upgrades idempotent — they run once, ever.
        if UpgradeTag.HasUpgradeTag(GetPointsBackfillTag()) then
            exit;

        BackfillPoints();
        UpgradeTag.SetUpgradeTag(GetPointsBackfillTag());
    end;

    local procedure BackfillPoints()
    var
        Entry: Record "Loyalty Entry";
    begin
        if Entry.FindSet(true) then
            repeat
                if Entry.Points = 0 then begin
                    Entry.Points := 1;
                    Entry.Modify();
                end;
            until Entry.Next() = 0;
    end;

    local procedure GetPointsBackfillTag(): Code[250]
    begin
        exit('TALAN-LOYALTY-BACKFILL-20260801');
    end;
}` },
  { label: "Deprecating without breaking", lang: "AL", src:
`field(10; "Old Points"; Integer)
{
    Caption = 'Old Points';

    // Give dependants a warning window instead of a hard break.
    ObsoleteState = Pending;
    ObsoleteReason = 'Replaced by Points (Decimal). Removal in v3.0.';
    ObsoleteTag = '2.0';
}

// Later, once dependants have migrated:
//   ObsoleteState = Removed;` }
],

"al-b08": [
  { label: "Query with join and aggregation", lang: "AL", src:
`query 50160 "Points By Customer"
{
    QueryType = Normal;

    elements
    {
        dataitem(Customer; Customer)
        {
            column(CustomerNo; "No.") { }
            column(CustomerName; Name) { }

            dataitem(LoyaltyEntry; "Loyalty Entry")
            {
                DataItemLink = "Customer No." = Customer."No.";
                SqlJoinType = LeftOuterJoin;

                column(TotalPoints; Points)
                {
                    Method = Sum;
                }
                column(EntryCount; "Entry No.")
                {
                    Method = Count;
                }

                filter(PostingDateFilter; "Posting Date") { }
            }
        }
    }
}` },
  { label: "Consuming a query", lang: "AL", src:
`var
    PointsByCustomer: Query "Points By Customer";
begin
    PointsByCustomer.SetRange(PostingDateFilter,
        CalcDate('<-1Y>', Today()), Today());
    PointsByCustomer.SetFilter(TotalPoints, '>%1', 100);

    PointsByCustomer.Open();
    while PointsByCustomer.Read() do
        Message('%1: %2 points across %3 entries',
                PointsByCustomer.CustomerName,
                PointsByCustomer.TotalPoints,
                PointsByCustomer.EntryCount);
    PointsByCustomer.Close();
end;` }
],

"al-b09": [
  { label: "XMLport for CSV import", lang: "AL", src:
`xmlport 50170 "Import Loyalty Entries"
{
    Format = VariableText;          // CSV / delimited
    FieldDelimiter = '"';
    FieldSeparator = ',';
    Direction = Import;
    UseRequestPage = true;

    schema
    {
        textelement(Root)
        {
            tableelement(LoyaltyEntry; "Loyalty Entry")
            {
                XmlName = 'Entry';
                AutoSave = false;

                fieldelement(CustomerNo; LoyaltyEntry."Customer No.") { }
                fieldelement(PostingDate; LoyaltyEntry."Posting Date") { }
                fieldelement(Points; LoyaltyEntry.Points) { }

                trigger OnAfterInitRecord()
                begin
                    LoyaltyEntry.Init();
                end;

                trigger OnBeforeInsertRecord()
                begin
                    // Validate through normal field logic
                    LoyaltyEntry.Validate("Customer No.");
                    LoyaltyEntry.Insert(true);
                end;
            }
        }
    }
}` },
  { label: "Running an XMLport from code", lang: "AL", src:
`var
    ImportEntries: XmlPort "Import Loyalty Entries";
    InStr: InStream;
    FileName: Text;
begin
    if not UploadIntoStream('Select CSV', '', 'CSV files (*.csv)|*.csv',
                            FileName, InStr) then
        exit;

    ImportEntries.SetSource(InStr);
    ImportEntries.Import();

    Message('Imported from %1.', FileName);
end;` }
],

"al-b10": [
  { label: "Declaring dependencies", lang: "JSON", src:
`{
  "name": "Loyalty Reporting",
  "publisher": "Talan",
  "version": "1.0.0.0",

  "dependencies": [
    {
      "id": "5f1c8a2e-9d44-4b31-a7e2-6c0f9b3d1a88",
      "name": "Loyalty Points",
      "publisher": "Talan",
      "version": "1.2.0.0"       // MINIMUM required version
    }
  ],

  "application": "24.0.0.0",
  "platform": "24.0.0.0"
}` },
  { label: "Guarding an optional dependency", lang: "AL", src:
`var
    AppInfo: ModuleInfo;
    LoyaltyInstalled: Boolean;
begin
    // Detect at runtime rather than hard-depending,
    // when the integration is genuinely optional.
    LoyaltyInstalled := NavApp.GetModuleInfo(
        '5f1c8a2e-9d44-4b31-a7e2-6c0f9b3d1a88', AppInfo);

    if LoyaltyInstalled then
        Message('Loyalty %1 is installed.', AppInfo.AppVersion);
end;` }
],

"al-b11": [
  { label: "launch.json for debugging", lang: "JSON", src:
`{
  "configurations": [
    {
      "name": "Attach to running session",
      "type": "al",
      "request": "attach",
      "environmentType": "Sandbox",
      "environmentName": "TALAN-DEV",
      "breakOnError": "All",
      "breakOnRecordWrite": "None"
    },
    {
      "name": "Publish and debug",
      "type": "al",
      "request": "launch",
      "environmentType": "Sandbox",
      "environmentName": "TALAN-DEV",
      "breakOnError": "All"
    }
  ]
}` },
  { label: "Snapshot debugging in production", lang: "Shell", src:
`# Capture a debugging snapshot without stopping anyone's work.
# In VS Code: Ctrl+Shift+P

AL: Initialize a snapshot debugging session
AL: Finish a snapshot debugging session
AL: Download a snapshot file

# Then open the .snapshot file and step through the recorded run.
# This is how you debug an issue you cannot reproduce locally.` },
  { label: "Instrumenting instead of guessing", lang: "AL", src:
`var
    StartTime: DateTime;
    Duration: Duration;
    CustomDims: Dictionary of [Text, Text];
begin
    StartTime := CurrentDateTime();

    RunExpensiveRoutine();

    Duration := CurrentDateTime() - StartTime;

    CustomDims.Add('routine', 'RecalculatePoints');
    CustomDims.Add('durationMs', Format(Duration));

    Session.LogMessage('TAL0001', 'Recalculation finished',
        Verbosity::Normal, DataClassification::SystemMetadata,
        TelemetryScope::ExtensionPublisher, CustomDims);
end;` }
],

"al-b12": [
  { label: "Emitting custom telemetry", lang: "AL", src:
`var
    CustomDimensions: Dictionary of [Text, Text];
begin
    CustomDimensions.Add('customerNo', Customer."No.");
    CustomDimensions.Add('points', Format(Points));

    Session.LogMessage(
        'TAL0100',                              // stable event ID
        'Loyalty points awarded',
        Verbosity::Normal,
        DataClassification::SystemMetadata,     // never log personal data
        TelemetryScope::ExtensionPublisher,
        CustomDimensions);
end;` },
  { label: "Querying telemetry in Application Insights", lang: "KQL", src:
`// Slowest AL operations in the last 24 hours
traces
| where timestamp > ago(24h)
| where customDimensions.eventId == "RT0018"   // long running SQL
| extend sql = tostring(customDimensions.sqlStatement)
| extend ms  = toreal(customDimensions.executionTimeInMs)
| where ms > 1000
| project timestamp, ms, sql
| order by ms desc
| take 50

// Your own events
traces
| where customDimensions.eventId startswith "TAL"
| summarize count() by tostring(customDimensions.eventId), bin(timestamp, 1h)
| render timechart` }
],

"al-b13": [
  { label: "ControlAddIn definition", lang: "AL", src:
`controladdin "Signature Pad"
{
    Scripts = './src/addins/signature/signature.js';
    StyleSheets = './src/addins/signature/signature.css';
    StartupScript = './src/addins/signature/start.js';

    RequestedHeight = 220;
    RequestedWidth = 400;
    VerticalStretch = true;
    HorizontalStretch = true;

    // AL -> JavaScript
    procedure ClearPad();
    procedure LoadSignature(DataUrl: Text);

    // JavaScript -> AL
    event SignatureCaptured(DataUrl: Text);
    event PadCleared();
}` },
  { label: "Hosting it on a page", lang: "AL", src:
`usercontrol(SignaturePad; "Signature Pad")
{
    ApplicationArea = All;

    trigger SignatureCaptured(DataUrl: Text)
    begin
        StoreSignature(DataUrl);
        CurrPage.Update(false);
    end;

    trigger PadCleared()
    begin
        Message('Signature cleared.');
    end;
}

trigger OnAfterGetRecord()
begin
    CurrPage.SignaturePad.LoadSignature(Rec.GetSignatureDataUrl());
end;` },
  { label: "The JavaScript side", lang: "JavaScript", src:
`// signature.js — runs inside the control's iframe

function ClearPad() {                      // called from AL
    const canvas = document.getElementById('pad');
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function LoadSignature(dataUrl) {          // called from AL
    if (!dataUrl) return;
    const img = new Image();
    img.onload = () => document
        .getElementById('pad')
        .getContext('2d')
        .drawImage(img, 0, 0);
    img.src = dataUrl;
}

function onDone() {                        // raise an event back to AL
    const dataUrl = document.getElementById('pad').toDataURL('image/png');
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(
        'SignatureCaptured', [dataUrl]);
}` }
],

"al-b14": [
  { label: "Table extension", lang: "AL", src:
`tableextension 50180 "Customer Ext" extends Customer
{
    fields
    {
        field(50100; "Loyalty Points"; Decimal)
        {
            Caption = 'Loyalty Points';
            MinValue = 0;
            Editable = false;
            DataClassification = CustomerContent;
        }
        field(50101; "Loyalty Tier Code"; Code[20])
        {
            Caption = 'Loyalty Tier';
            TableRelation = "Loyalty Tier"."Code";
        }
    }

    // You can add keys too — but not modify Microsoft's
    keys
    {
        key(LoyaltyTier; "Loyalty Tier Code") { }
    }
}` },
  { label: "Page extension with placement", lang: "AL", src:
`pageextension 50181 "Customer Card Ext" extends "Customer Card"
{
    layout
    {
        addafter(Name)
        {
            field("Loyalty Tier Code"; Rec."Loyalty Tier Code")
            {
                ApplicationArea = All;
            }
        }

        addlast(General)
        {
            field("Loyalty Points"; Rec."Loyalty Points")
            {
                ApplicationArea = All;
                Style = Favorable;
            }
        }

        modify(Name)
        {
            ToolTip = 'The registered name of the customer.';
        }
    }

    actions
    {
        addafter(NewSalesQuote)
        {
            action(ViewLoyalty)
            {
                Caption = 'Loyalty entries';
                ApplicationArea = All;
                RunObject = page "Loyalty Entries";
                RunPageLink = "Customer No." = field("No.");
            }
        }
    }
}` }
],

"al-b15": [
  { label: "FlowField with CalcFormula", lang: "AL", src:
`field(50100; "Loyalty Points"; Decimal)
{
    Caption = 'Loyalty Points';
    FieldClass = FlowField;
    Editable = false;
    CalcFormula = Sum("Loyalty Entry".Points
                  WHERE("Customer No." = FIELD("No."),
                        "Posting Date" = FIELD("Date Filter")));
}

// Other CalcFormula methods:
//   Count, Average, Min, Max, Exist, Lookup
field(50102; "Has Entries"; Boolean)
{
    FieldClass = FlowField;
    CalcFormula = Exist("Loyalty Entry"
                  WHERE("Customer No." = FIELD("No.")));
}` },
  { label: "FlowFilter and CalcFields", lang: "AL", src:
`field(50103; "Date Filter"; Date)
{
    Caption = 'Date Filter';
    FieldClass = FlowFilter;      // never stored, filters the FlowField
}

// ---- Using them ----
var
    Customer: Record Customer;
begin
    Customer.Get('C0001');

    // FlowFields are NOT populated by Get or FindSet.
    // This is the number one cause of "the value is zero".
    Customer.CalcFields("Loyalty Points");
    Message('All time: %1', Customer."Loyalty Points");

    // Narrow the same FlowField with a FlowFilter
    Customer.SetRange("Date Filter",
        CalcDate('<-CM>', Today()), Today());
    Customer.CalcFields("Loyalty Points");
    Message('This month: %1', Customer."Loyalty Points");
end;` }
],

"al-b16": [
  { label: "Creating a job queue entry in code", lang: "AL", src:
`var
    JobQueueEntry: Record "Job Queue Entry";
begin
    JobQueueEntry.Init();
    JobQueueEntry."Object Type to Run" := JobQueueEntry."Object Type to Run"::Codeunit;
    JobQueueEntry."Object ID to Run"   := Codeunit::"Loyalty Nightly Recalc";
    JobQueueEntry.Description          := 'Nightly loyalty recalculation';

    JobQueueEntry."Recurring Job" := true;
    JobQueueEntry."Run on Mondays"   := true;
    JobQueueEntry."Run on Tuesdays"  := true;
    JobQueueEntry."Run on Wednesdays":= true;
    JobQueueEntry."Run on Thursdays" := true;
    JobQueueEntry."Run on Fridays"   := true;
    JobQueueEntry."Starting Time"    := 020000T;   // 02:00

    JobQueueEntry."Maximum No. of Attempts to Run" := 3;
    JobQueueEntry."Rerun Delay (sec.)" := 300;

    Codeunit.Run(Codeunit::"Job Queue - Enqueue", JobQueueEntry);
end;` },
  { label: "The codeunit it runs", lang: "AL", src:
`codeunit 50190 "Loyalty Nightly Recalc"
{
    TableNo = "Job Queue Entry";

    trigger OnRun()
    begin
        // Rec is the Job Queue Entry — useful for parameters
        RecalculateAll();
    end;

    local procedure RecalculateAll()
    var
        Customer: Record Customer;
        LoyaltyMgt: Codeunit "Loyalty Management";
    begin
        if Customer.FindSet() then
            repeat
                LoyaltyMgt.Recalculate(Customer."No.");
            until Customer.Next() = 0;
    end;
}` }
],

/* ---------------- TEAM WORKFLOW ---------------- */

"al-w1": [
  { label: "Branch naming convention", lang: "Shell", src:
`# type/ticket-short-description
git checkout -b feature/1234-add-loyalty-points
git checkout -b bugfix/1287-fix-rounding-error
git checkout -b hotfix/1301-blocked-customer-crash

# Push and set upstream in one step
git push -u origin feature/1234-add-loyalty-points

# Azure DevOps links the branch to the work item automatically
# when the ticket number is in the name, or explicitly:
#   Repos > Branches > ... > "Link work item"` },
  { label: "Reading the work item first", lang: "Markdown", src:
`## 1234 — Award loyalty points on posted sales

**Description**
Customers should accrue loyalty points when a sales invoice posts.

**Acceptance criteria**
- [ ] 1 point per 10 currency units of invoice amount
- [ ] Blocked customers accrue nothing
- [ ] Points visible on the Customer Card
- [ ] Covered by an automated test

**Out of scope**
- Redeeming points (ticket 1235)

> Read the "out of scope" line before you start, not during review.` }
],

"al-w2": [
  { label: "Commit messages that survive", lang: "Shell", src:
`# Vague — tells a future reader nothing
git commit -m "fixes"
git commit -m "updates"

# Clear — subject explains the change, body explains why
git commit -m "Add loyalty points calculation to Customer table

Points accrue at 1 per 10 spent, awarded on sales post via an
event subscriber so the base posting codeunit stays untouched.

Refs #1234"

# Small, focused commits
git add src/LoyaltyEntry.Table.al
git commit -m "Add Loyalty Entry table with customer and points fields"

git add src/LoyaltyCalc.Codeunit.al
git commit -m "Add points calculation with tier multiplier"` },
  { label: "Staying in sync with main", lang: "Shell", src:
`# Little and often beats one painful merge later
git fetch origin
git rebase origin/main          # your own branch only

# If a conflict appears mid-rebase
git status                      # see the conflicted files
# ...edit, remove <<<<<<< markers...
git add src/LoyaltyCalc.Codeunit.al
git rebase --continue

# Escape hatch
git rebase --abort` },
  { label: ".gitignore for an AL project", lang: "Shell", src:
`# Compiled output and downloaded symbols
*.app
.alpackages/
.alcache/
.altemplates/
.snapshots/

# Local editor state
.vscode/launch.json     # contains per-developer environments
.vscode/*.local.json

# OS noise
Thumbs.db
.DS_Store` }
],

"al-w3": [
  { label: "Pull request description", lang: "Markdown", src:
`## What
Awards loyalty points when a sales invoice posts.

## Why
Ticket #1234. Points were previously entered by hand, which drifted
out of sync with actual sales.

## How
Subscribes to \`OnAfterPostSalesDoc\` rather than modifying the posting
codeunit, so this stays upgrade-safe.

## Testing
- Added \`Loyalty Tests\` codeunit (3 tests, all passing)
- Manually verified against a blocked customer

## Reviewer notes
The rounding in \`PointsFor\` uses 0.01 — flagging in case finance
expects whole points instead.` },
  { label: "Branch policy as YAML", lang: "YAML", src:
`# Azure DevOps branch policy for main:
#   Repos > Branches > main > Branch policies

policies:
  minimumApprovers: 2
  resetVotesOnPush: true          # new commits invalidate approvals
  checkForLinkedWorkItems: true
  checkForComments: true          # all comments resolved before merge

  buildValidation:
    - pipeline: "AL Build & Test"
      required: true
      expiry: 12h

  mergeStrategy: squash           # one clean commit per PR on main` },
  { label: "Review comments that work", lang: "Markdown", src:
`<!-- Invites a conversation, gets code changed -->
> Would \`SetRange\` be clearer than \`SetFilter\` here, since it's an
> exact match? Happy either way if there's a reason for the filter.

> This runs inside the repeat loop — is the \`Get\` intentional per
> record, or could it move above?

<!-- Invites defensiveness, gets code justified -->
> This is wrong.
> Why did you do it this way?

<!-- Praise is review too. It teaches the team what good looks like. -->
> Nice — the upgrade tag means this is safely re-runnable.` }
],

/* ---------------- GIT ---------------- */

"git-01": [
  { label: "The three areas in practice", lang: "Shell", src:
`git status                  # what is modified, what is staged

git add src/Loyalty.al      # working directory -> staging
git add .                   # stage everything (check status first)
git restore --staged file   # unstage, keep the edit

git commit -m "message"     # staging -> local repository
git push                    # local repository -> remote

git log --oneline -10       # recent history
git show HEAD               # what the last commit changed` },
  { label: "Starting from scratch or from a remote", lang: "Shell", src:
`# New project
git init
git add .
git commit -m "Initial commit"
git remote add origin https://dev.azure.com/talan/BC/_git/loyalty
git push -u origin main

# Existing project
git clone https://dev.azure.com/talan/BC/_git/loyalty
cd loyalty

# Who am I committing as?
git config user.name  "Your Name"
git config user.email "you@talan.com"` },
  { label: "Undoing things safely", lang: "Shell", src:
`git restore file.al                # discard uncommitted edits
git commit --amend                 # fix the last commit message

git reset --soft HEAD~1            # undo commit, keep changes staged
git reset --mixed HEAD~1           # undo commit, keep changes unstaged
git reset --hard HEAD~1            # undo commit AND discard changes

git revert a1b2c3d                 # new commit undoing an old one
                                   # safe on shared branches

git reflog                         # your safety net — nearly everything
                                   # committed is recoverable from here` }
],

"git-02": [
  { label: "Branching and merging", lang: "Shell", src:
`git branch                          # list local branches
git branch -a                       # include remotes

git checkout -b feature/1234-loyalty
git switch -c feature/1234-loyalty  # modern equivalent

git switch main
git merge feature/1234-loyalty

# Delete once merged
git branch -d feature/1234-loyalty
git push origin --delete feature/1234-loyalty` },
  { label: "Merge vs. rebase", lang: "Shell", src:
`# MERGE — preserves history exactly, adds a merge commit
#   main:    A---B---C-------M
#   feature:      \\--D---E--/
git switch main
git merge feature/1234-loyalty

# REBASE — replays your commits, linear history, rewrites hashes
#   main:    A---B---C---D'---E'
git switch feature/1234-loyalty
git rebase main

# Rule: rebase your own unpushed work. Merge anything shared.` }
],

"git-03": [
  { label: "Reading history", lang: "Shell", src:
`git log --oneline --graph --decorate --all
git log --since="2 weeks ago" --author="Amine"
git log --follow src/LoyaltyCalc.Codeunit.al   # survives renames
git log -S "AwardPoints"                       # commits touching a string

git diff                       # unstaged changes
git diff --staged              # staged changes
git diff main..feature/1234    # between branches
git diff HEAD~3 HEAD           # across the last three commits` },
  { label: "Finding when something broke", lang: "Shell", src:
`git blame src/LoyaltyCalc.Codeunit.al
git blame -L 40,60 src/LoyaltyCalc.Codeunit.al   # just those lines

# Binary search through history for the commit that introduced a bug
git bisect start
git bisect bad                 # current commit is broken
git bisect good v1.0.0         # this tag was fine
# ...git checks out a midpoint; test it, then:
git bisect good      # or: git bisect bad
git bisect reset     # when finished` }
],

"git-04": [
  { label: "Anatomy of a conflict", lang: "AL", src:
`<<<<<<< HEAD
    Points := Round(Amount / 10, 1);
=======
    Points := Round(Amount / 10, 0.01);
>>>>>>> feature/1234-loyalty

// HEAD is where you are (usually main).
// Below ======= is what you are bringing in.
// Resolution means editing this to the correct final state
// and deleting all three marker lines.` },
  { label: "Working through it", lang: "Shell", src:
`git merge feature/1234-loyalty
# CONFLICT (content): Merge conflict in src/LoyaltyCalc.Codeunit.al

git status                          # list conflicted files
git diff                            # see both sides

# ...edit the file, remove the markers...

git add src/LoyaltyCalc.Codeunit.al
git commit                          # completes the merge

# Or step back and think again
git merge --abort

# Take one side wholesale when you are certain
git checkout --ours   src/file.al   # keep current branch version
git checkout --theirs src/file.al   # keep incoming version` }
],

"git-05": [
  { label: "Stash — the urgent interruption", lang: "Shell", src:
`git stash                       # shelve uncommitted work
git stash push -m "half-done tier logic"
git stash -u                    # include untracked files

git stash list
git stash show -p stash@{0}     # what is in it

git stash pop                   # restore and remove from the stack
git stash apply stash@{1}       # restore, keep it stashed
git stash drop stash@{0}` },
  { label: "Cherry-pick — one commit, elsewhere", lang: "Shell", src:
`# Take a single fix from a branch onto another
git switch hotfix/1301
git cherry-pick a1b2c3d

# A range of commits
git cherry-pick a1b2c3d^..f4e5d6c

# Useful for hotfixes. If it becomes routine, your branches
# are probably scoped wrongly.` },
  { label: "Interactive rebase — tidying before review", lang: "Shell", src:
`git rebase -i HEAD~4

# pick   a1b2c3d Add Loyalty Entry table
# squash b2c3d4e fix typo             <- folds into the commit above
# reword c3d4e5f Add calculation      <- edit the message
# drop   d4e5f6a debug logging        <- remove entirely

# Only ever on commits you have not shared.
# Rewriting pushed history forces everyone else to reconcile.` }
]

};

/* ============================================================
   TALAN ACADEMY — LESSON QUIZZES
   Three questions per lesson, 2/3 required to pass.
   Shape: lessonId -> { pass, questions: [ { q, options, correct } ] }
   ============================================================ */

const QUIZZES = {
  "bca-01": {
    pass: 2,
    questions: [
      { q: "A quote is converted into a sales order in Business Central. What happens to the pricing?", options: ["It carries over automatically, keeping the numbers the customer agreed to", "It must be retyped into the order", "It resets to the standard list price", "It is recalculated using the vendor's cost"], correct: 0 },
      { q: "Why do customer-specific prices and discounts get configured once rather than applied manually per order?", options: ["Because Business Central does not allow manual pricing", "So nobody has to remember which client gets which discount, and it applies consistently", "Because discounts are only available to VIP customers", "Because pricing rules expire after one order"], correct: 1 },
      { q: "Where does a service request sit relative to the customer's sales history?", options: ["In a separate system dedicated to support tickets", "It is not tracked in Business Central", "On the same customer record, alongside quotes, orders and interaction history", "Only the technician has access to it"], correct: 2 },
    ]
  },
  "bca-02": {
    pass: 2,
    questions: [
      { q: "Why is the general ledger considered trustworthy in Business Central?", options: ["Because it is updated manually once a month", "Because every transaction elsewhere in the system eventually posts to it", "Because only the finance director can edit it", "Because it uses a separate database from the rest of the system"], correct: 1 },
      { q: "In bank reconciliation, what does a human actually review?", options: ["Every single transaction on the statement", "Nothing — reconciliation is fully automatic", "Only the exceptions that did not match automatically", "Only transactions over a fixed currency threshold"], correct: 2 },
      { q: "Why does a shorter month-end close matter more than the hours it saves?", options: ["It reduces the finance team's headcount needs", "It automatically improves the accuracy of forecasts", "It is required by law in most countries", "It means leadership decisions are based on more current data rather than a stale picture"], correct: 3 },
    ]
  },
  "bca-03": {
    pass: 2,
    questions: [
      { q: "What does a bill of materials (BOM) actually define?", options: ["The schedule for a specific production run", "The quality checks required before shipment", "What a finished item is made of — the recipe planning relies on", "The capacity available on the shop floor"], correct: 2 },
      { q: "Why is capacity planning checked before a schedule is committed?", options: ["To reduce the number of production orders needed", "To automatically lower the bill of materials cost", "Because it is a legal requirement for manufacturers", "So promises to customers reflect what the floor can actually deliver"], correct: 3 },
      { q: "What is the practical benefit of tracking job costing while work happens rather than after?", options: ["Cost overruns become a signal during the job instead of a discovery after it", "It removes the need for a bill of materials", "It eliminates the need for quality checks", "It automatically adjusts customer pricing"], correct: 0 },
    ]
  },
  "bca-04": {
    pass: 2,
    questions: [
      { q: "Why does demand forecasting generally beat a fixed reorder point?", options: ["It is simpler to configure", "It guarantees zero stockouts at all times", "It removes the need for vendor management", "It adapts to seasonality and trend rather than assuming steady demand"], correct: 3 },
      { q: "What does real-time inventory management ensure?", options: ["That the number on screen matches the number actually on the shelf", "That warehouse staff no longer need bin locations", "That purchase orders no longer need approval", "That vendor lead times are fixed automatically"], correct: 0 },
      { q: "Why is inventory described as 'capital sitting still'?", options: ["Because it cannot be insured", "Because holding too much ties up cash, while holding too little costs sales — both stem from not knowing what's moving", "Because inventory value never changes over time", "Because it is excluded from financial reporting"], correct: 1 },
    ]
  },
  "bca-05": {
    pass: 2,
    questions: [
      { q: "Why is 'budget vs. actual' tracking more useful than a final profitability report?", options: ["It shows what is happening while there is still time to change the outcome", "It requires less data entry", "It replaces the need for project invoicing", "It is only available at project close"], correct: 0 },
      { q: "How does project invoicing avoid a gap between work done and work billed?", options: ["Clients are billed a flat fee regardless of hours", "Invoices are generated directly from tracked time, expenses and milestones with no re-entry", "Invoicing happens automatically at project kickoff", "Time tracking is optional for billing purposes"], correct: 1 },
      { q: "What problem does resource allocation based on real availability prevent?", options: ["Clients being billed incorrectly", "Milestones being defined incorrectly", "The same specialist being promised to three projects at once", "Budgets being set too low"], correct: 2 },
    ]
  },
  "bca-06": {
    pass: 2,
    questions: [
      { q: "What does 'drill-down analysis' let a user do?", options: ["Move from a high-level figure to the individual transaction behind it", "Export reports to Excel automatically", "Schedule reports to run overnight", "Restrict which users can see financial data"], correct: 0 },
      { q: "What does drill-down analysis let a user do?", options: ["Export data to a spreadsheet automatically", "Change the fiscal year from the report screen", "Move from a high-level figure straight to the individual transaction behind it", "Bypass user permission sets"], correct: 2 },
      { q: "Why is 'real-time data' a meaningful claim for reporting?", options: ["Because reports only update once a week otherwise", "Because it guarantees 100% forecast accuracy", "Because it removes the need for role-based dashboards", "Because there's no overnight sync — what happened this morning is in this morning's number"], correct: 3 },
    ]
  },
  "pc-00": {
    pass: 2,
    questions: [
      { q: "In the Power Platform model, what role does Business Central play?", options: ["An optional analytics add-on", "A reporting layer on top of Power BI", "The system of record that holds the actual transactions", "A replacement for Power Automate"], correct: 2 },
      { q: "Why would a client want Power BI if Business Central already has built-in reports?", options: ["Built-in reports are unreliable", "Built-in reports cannot be printed", "Power BI is required to view any BC data", "Power BI is for exploration — combining BC data with other sources without needing a new report built first"], correct: 3 },
      { q: "What does it mean that the Power Platform connection to Business Central is 'native, not a project'?", options: ["These tools are built to read BC data directly, so integration is configuration rather than custom development", "It requires a custom development effort for each client", "It only works with a paid add-on license", "It replaces the need for an ERP entirely"], correct: 0 },
    ]
  },
  "pc-01": {
    pass: 2,
    questions: [
      { q: "What is the operational risk of building reports from manual exports?", options: ["Exports take too long to generate", "Exports cannot be opened in Excel", "Manual exports cannot include financial data", "Every export is an unrecorded snapshot, so two people can reach different conclusions from different extracts"], correct: 3 },
      { q: "How does Power BI reduce disagreement between finance, sales and operations?", options: ["By having them all look at the same underlying live data", "By giving each department a separate database", "By restricting access to one department at a time", "By removing drill-down capability"], correct: 0 },
      { q: "What does drill-down in Power BI let someone do 'in the meeting rather than after it'?", options: ["Change the underlying BC configuration", "Trace a surprising KPI back to the transactions behind it", "Export the dashboard to PDF", "Approve a pending workflow"], correct: 1 },
    ]
  },
  "pc-02": {
    pass: 2,
    questions: [
      { q: "Why is a Power App often preferable to giving a field worker full Business Central access?", options: ["Full access is a bigger security surface and training burden than a focused app exposing just the needed actions", "Power Apps are cheaper to license per user", "Full BC access does not work on mobile devices", "Power Apps do not require any Business Central license"], correct: 0 },
      { q: "When a warehouse operator confirms a shipment through a Power App, what happens to the underlying data?", options: ["It updates a separate app-only database that syncs overnight", "It updates the same Business Central record that a finance user sees on desktop", "Nothing changes until a manager approves it", "The change is stored locally on the device only"], correct: 1 },
      { q: "What does 'no code' mean in the context of Power Apps for a functional consultant?", options: ["The apps have no underlying logic at all", "Only Microsoft employees can build Power Apps", "Apps are built visually, letting a consultant deliver a working tool without a development cycle", "The apps cannot be customized after creation"], correct: 2 },
    ]
  },
  "pc-03": {
    pass: 2,
    questions: [
      { q: "What triggers a Power Automate flow connected to Business Central?", options: ["A scheduled nightly batch job only", "The moment a record changes in Business Central — no polling or scheduled batch needed", "A manual click from an administrator", "An email sent to a shared inbox"], correct: 1 },
      { q: "What is automation's real return, according to the lesson?", options: ["The minutes saved on any single task", "Reducing the number of employees needed", "Eliminating an entire class of 'someone forgot' failures", "Replacing the need for approval thresholds"], correct: 2 },
      { q: "How does an automated approval workflow differ from an email asking for approval?", options: ["It's slower but more thorough", "It only works for purchase orders, not sales documents", "It requires more manual steps", "It's enforced and recorded — the document cannot proceed without approval, and the audit trail is automatic"], correct: 3 },
    ]
  },
  "pc-04": {
    pass: 2,
    questions: [
      { q: "How should you frame Copilot to a client worried about it posting transactions incorrectly?", options: ["Assure them Copilot never makes mistakes", "Tell them autonomous agents cannot be disabled", "Most Copilot features produce drafts a person approves; autonomous agents are scoped and reviewable", "Explain that Copilot bypasses all validation rules"], correct: 2 },
      { q: "What does the 'Explaining' capability of Copilot go beyond simple reporting to do?", options: ["It only displays numbers without context", "It disables user access to explore further", "It automatically corrects incorrect ledger entries", "It summarises records, explains variances, and surfaces anomalies with reasoning attached"], correct: 3 },
      { q: "According to the lesson, what does Copilot mainly remove from existing processes?", options: ["The search-and-retype layer around the process, not the process itself", "The need for a chart of accounts", "The requirement for user permissions", "The need for a fiscal year setting"], correct: 0 },
    ]
  },
  "bcs-01": {
    pass: 2,
    questions: [
      { q: "Why is Company & General Setup described as 'the least interesting lesson and the most expensive to get wrong'?", options: ["It takes the longest to configure", "It requires the most user permissions", "It cannot be changed once entered", "Almost every later configuration mistake traces back to an assumption made here"], correct: 3 },
      { q: "What is the concern if a client wants to change their fiscal year start six months after go-live?", options: ["Existing posted transactions are already assigned to periods under the old structure, breaking comparative reporting", "It requires a new Business Central license", "It automatically deletes all posted invoices", "It has no real effect on reporting"], correct: 0 },
      { q: "What does localisation govern beyond number formatting and language?", options: ["User permission sets", "Statutory reporting behaviour", "Approval workflow thresholds", "Number series ranges"], correct: 1 },
    ]
  },
  "bcs-02": {
    pass: 2,
    questions: [
      { q: "What problem do posting groups solve?", options: ["They automatically route transactions to the correct G/L accounts without users choosing manually", "They speed up report generation", "They prevent users from creating new customers", "They replace the need for a chart of accounts"], correct: 0 },
      { q: "Why not simply train users to pick the right G/L account?", options: ["Users are not allowed to see the chart of accounts", "It scales badly and fails quietly — a misposted invoice a week is invisible until reconciliation", "Training is more expensive than software", "It violates Business Central's licensing terms"], correct: 1 },
      { q: "What defines an account's behaviour in reporting?", options: ["Its number series", "Its dimension values", "Its category — assets, liabilities, equity, income, expenses", "Its approval workflow"], correct: 2 },
    ]
  },
  "bcs-03": {
    pass: 2,
    questions: [
      { q: "Why do auditors care about number series behaving as sequential and gap-free?", options: ["It makes reports load faster", "Unexplained gaps in a numbering scheme invite questions during an audit", "It is only a cosmetic preference", "It reduces storage costs"], correct: 1 },
      { q: "Why give each document type — sales invoices, credit memos, vendor documents — its own number series?", options: ["Business Central requires it technically", "It reduces the number of digits needed", "Shared numbering makes documents harder to identify and gaps impossible to distinguish from normal interleaving", "It allows numbers to be reused across document types"], correct: 2 },
      { q: "What four things define a number series?", options: ["Name, owner, department, and status", "A user, a permission set, and a role center", "A currency, a language, and two dates", "A code, a starting number, an ending number, and a format"], correct: 3 },
    ]
  },
  "bcs-04": {
    pass: 2,
    questions: [
      { q: "A client wants a separate G/L account for each of their five regions. What should you advise instead?", options: ["Create the five accounts as requested", "Disable regional reporting entirely", "Use a REGION dimension instead, which gives the same reporting split without multiplying the chart of accounts", "Use five separate companies"], correct: 2 },
      { q: "What is the naive fix for tracking spend by department that dimensions are meant to avoid?", options: ["Creating a separate account for every department/account combination", "Assigning a unique currency per department", "Requiring manual journal entries for every department", "Removing departmental reporting altogether"], correct: 3 },
      { q: "Can a single transaction carry more than one dimension at a time?", options: ["Yes — a document can carry several dimensions at once, enabling multi-angle reporting from one posting", "No, only one dimension per document is allowed", "Only if approval workflows are disabled", "Only for sales documents, not purchases"], correct: 0 },
    ]
  },
  "bcs-05": {
    pass: 2,
    questions: [
      { q: "What are the three parts almost every approval workflow is built from?", options: ["A user, a permission, and a role", "A page, a table, and a codeunit", "A dimension, a posting group, and a number series", "A trigger, a condition, and a response"], correct: 3 },
      { q: "What happens if an approval threshold is set too low?", options: ["Approvers get flooded with routine requests and start rubber-stamping, turning control into theatre", "Approvals become faster and more accurate", "The workflow stops functioning entirely", "It automatically raises itself over time"], correct: 0 },
      { q: "What is the main design decision that determines whether a workflow adds real control or just a bottleneck?", options: ["The number of approval chains", "The threshold at which approval is required", "The user's Role Center", "The permission set assigned"], correct: 1 },
    ]
  },
  "bcs-06": {
    pass: 2,
    questions: [
      { q: "How do multiple permission sets assigned to one user combine?", options: ["They combine additively — the main source of accidental over-permissioning", "Only the most restrictive set applies", "Only the most recently assigned set applies", "They must be identical to combine at all"], correct: 0 },
      { q: "Why is permission design described as partly a usability concern, not just a security one?", options: ["Because permissions never affect what a user can see", "Because menus and pages a user can't act on still occupy their attention, so removing them eases the learning curve", "Because permission sets are the only way to change a Role Center", "Because usability has no relationship to access control"], correct: 1 },
      { q: "What determines a user's home screen and shapes their whole experience of the system?", options: ["Their assigned number series", "Their fiscal year setting", "Their Role Center", "Their dimension values"], correct: 2 },
    ]
  },
  "bcs-07": {
    pass: 2,
    questions: [
      { q: "Why does RapidStart come last in the BC Setup sequence?", options: ["It is the easiest lesson and works well as a warm-down", "Migration validates against everything configured in the previous six lessons", "Data migration has no dependency on prior configuration", "It must be done before posting groups are set up"], correct: 1 },
      { q: "Why does RapidStart validate incoming data against configuration rather than just loading it?", options: ["Validation is optional and rarely used", "It speeds up the import process", "Loading unvalidated data creates records that exist but can't be transacted against, like customers with no posting group", "It replaces the need for number series"], correct: 2 },
      { q: "What is a configuration package built against?", options: ["A random sample of test data", "The user's permission set", "The client's previous ERP system directly", "A template for each table to be migrated, such as customers, vendors, or items"], correct: 3 },
    ]
  },
  "wbc-01": {
    pass: 2,
    questions: [
      { q: "Why are the costs of staying with the current system described as 'hidden, not absent'?", options: ["They don't actually exist", "They are only visible to auditors", "They don't appear as a line item — lost hours, stale decisions, missed opportunities — which is why they persist", "They only apply to large companies"], correct: 2 },
      { q: "What is the risk of leading a pitch with a dramatic industry statistic instead of the client's own numbers?", options: ["Statistics are always inaccurate", "Clients cannot understand percentages", "It takes too long to present", "It invites scepticism about the source and shifts focus away from the client's own situation"], correct: 3 },
      { q: "How should you respond to 'we manage fine today'?", options: ["Point out that managing fine at current scale isn't evidence of managing fine at planned scale", "Agree and move to a different topic", "Insist the client is wrong", "Offer a discount immediately"], correct: 0 },
    ]
  },
  "wbc-02": {
    pass: 2,
    questions: [
      { q: "Why does the scalability argument land hardest with businesses that have already outgrown one system?", options: ["They have unlimited budgets", "They have no current spreadsheets", "They dislike Microsoft products less", "If they've done a painful migration before, they already know the cost being described"], correct: 3 },
      { q: "What does 'scaling' mean in the Business Central context described here?", options: ["Adding users, companies and countries without replacing the platform", "Buying a bigger server", "Migrating to a new ERP every few years", "Reducing headcount as the company grows"], correct: 0 },
      { q: "According to this lesson, what does 'scaling' mean in this context?", options: ["Buying more server hardware", "Adding users, companies and countries without replacing the platform", "Migrating to a completely new system", "Reducing the number of active users"], correct: 1 },
    ]
  },
  "wbc-03": {
    pass: 2,
    questions: [
      { q: "How do you test whether a client's existing 'integration' between systems is real?", options: ["Ask about latency and failure — is it real-time or batch, and how quickly does anyone notice a sync failure", "Ask how much it costs per month", "Ask how many systems are involved", "Ask which vendor built it"], correct: 0 },
      { q: "Why is the consolidation argument described as the one 'least likely to need explaining'?", options: ["Because it is the most technical argument", "Because most clients recognise the fragmented-numbers problem immediately from their own board meetings", "Because it only applies to finance teams", "Because it requires no examples to support it"], correct: 1 },
      { q: "What is the fragmentation symptom this lesson describes?", options: ["Too many users having admin access", "Reports taking too long to generate", "Finance, sales and inventory in separate tools producing three versions of the same number, none agreeing", "Approval workflows being too strict"], correct: 2 },
    ]
  },
  "wbc-04": {
    pass: 2,
    questions: [
      { q: "Which buyer persona does the 'Backed by Microsoft' argument suit best?", options: ["The end user who logs in daily", "The risk-averse buyer, often a CFO or board sponsor, who cares about not having chosen wrong", "The warehouse operator", "The AL developer building extensions"], correct: 1 },
      { q: "What is described as the clearest current evidence of Microsoft's continued investment in the platform?", options: ["A lower subscription price", "A redesigned company logo", "AI capability arriving as part of the platform rather than a separate purchase", "Reduced customer support hours"], correct: 2 },
      { q: "What is this argument fundamentally about, according to the lesson?", options: ["Feature comparison against competitors", "The speed of data migration", "The cost of implementation services", "De-risking a decision the buyer will be held responsible for years later"], correct: 3 },
    ]
  },
  "wbc-05": {
    pass: 2,
    questions: [
      { q: "Why is 'the implementation question' the weakest argument to open with but the strongest to close on?", options: ["It's technical and confusing early on", "It's the least persuasive argument overall", "Opening with it presumes a decision the client hasn't made yet; closing addresses the decision they're actually about to make", "It only applies to large enterprise clients"], correct: 2 },
      { q: "Why is this lesson described as the point where Talan, not the product, becomes the differentiator?", options: ["Because Business Central features are identical everywhere", "Because it is unrelated to the sales conversation", "Because it discusses pricing exclusively", "Because it's the only argument a competitor selling the same product cannot make identically"], correct: 3 },
      { q: "What does a good implementation partner deliver, per this lesson?", options: ["An implementation starting from the client's actual processes, trained staff at go-live, and ongoing support", "A template-based rollout applied to every client identically", "A discount on the software license", "A fixed six-month timeline regardless of scope"], correct: 0 },
    ]
  },
  "ind-01": {
    pass: 2,
    questions: [
      { q: "Why should a manufacturing demo lead with production orders rather than financials?", options: ["Because manufacturers don't use financial modules", "Because financials are not included in BC for manufacturers", "Because production orders are easier to demo", "Because the evaluator is usually an operations lead who is testing production capability, not financial capability"], correct: 3 },
      { q: "What pain point does this lesson describe around bills of materials?", options: ["BOMs that do not match what is actually on hand", "BOMs are too expensive to maintain", "BOMs cannot include sub-assemblies", "BOMs require a separate license"], correct: 0 },
      { q: "What is the proof point this lesson recommends showing manufacturers?", options: ["A generic sales dashboard", "Real-time visibility from raw materials to finished goods, with Power BI for analysis on top", "A discount comparison chart", "An HR onboarding workflow"], correct: 1 },
    ]
  },
  "ind-02": {
    pass: 2,
    questions: [
      { q: "What single metric usually resonates most with a distributor, according to this lesson?", options: ["Inventory accuracy — the upstream cause of both stockouts and overstock", "Number of employees", "Office square footage", "Number of sales reps"], correct: 0 },
      { q: "What is the pain vocabulary described for distribution?", options: ["Too many customer service agents", "Inventory counts already wrong by the time anyone checks, and orders bouncing between disconnected systems", "Excessive automation reducing jobs", "Overly complex financial reporting"], correct: 1 },
      { q: "What two 'currencies' should the value of Business Central be framed in for distributors?", options: ["Time and headcount", "Marketing spend and ad clicks", "Lost sales (stockouts) and trapped cash (overstock)", "Server cost and licensing fees"], correct: 2 },
    ]
  },
  "ind-03": {
    pass: 2,
    questions: [
      { q: "Why is Professional Services particularly receptive to the Project Management module?", options: ["Because they have the largest IT budgets", "Because in services, the project is the product — project costing is the core operational and financial record", "Because they don't use inventory management", "Because their employees work remotely"], correct: 1 },
      { q: "What is described as the largest and quietest source of margin loss in services businesses?", options: ["Office overhead", "Vendor pricing disputes", "Unbilled work", "Currency exchange fluctuations"], correct: 2 },
      { q: "What pain point does this lesson describe about time tracking?", options: ["Time is tracked accurately but too slowly", "Time tracking requires a separate ERP license", "Time tracking is not needed in services", "Time is tracked in one tool and billed from another, with budgets discovered blown after the invoice went out"], correct: 3 },
    ]
  },
  "ind-04": {
    pass: 2,
    questions: [
      { q: "Why does channel inconsistency cost more in retail than in other verticals, per this lesson?", options: ["Retail has more employees per store", "Retail margins are inherently lower", "The error is discovered by the customer, in the moment, costing both the sale and the trust", "Retail requires more warehouse space"], correct: 2 },
      { q: "What pain point does this lesson describe about in-store and online inventory?", options: ["They are always perfectly synchronized", "In-store inventory is tracked manually only", "Online inventory is never tracked", "They do not match, and promotions are applied inconsistently across channels"], correct: 3 },
      { q: "Which Power Platform tool does this lesson mention for in-store and mobile interfaces?", options: ["Power Apps", "Power Automate", "Power BI", "Copilot Studio"], correct: 0 },
    ]
  },
  "al-01": {
    pass: 2,
    questions: [
      { q: "Why does an extension never modify the base application in Business Central?", options: ["Because AL does not support editing existing code", "Because base objects are encrypted", "Because Microsoft charges extra for base modifications", "This constraint is what keeps upgrades safe"], correct: 3 },
      { q: "What does the 'AL: Go!' command in VS Code do?", options: ["Publishes the extension directly to production", "Runs the extension's automated tests", "Scaffolds a complete project — app.json, launch.json, and a HelloWorld.al — in one step", "Uninstalls a previous version of the extension"], correct: 2 },
      { q: "What three pieces of tooling does the lesson say are needed to start an AL project?", options: ["Visual Studio, .NET SDK, and a production tenant", "VS Code, the AL Language extension, and a sandbox environment", "Azure DevOps, Docker, and a license key", "Excel, Power BI, and a database admin account"], correct: 1 },
    ]
  },
  "al-02": {
    pass: 2,
    questions: [
      { q: "Why should a total-calculation routine live in a codeunit rather than directly on a page?", options: ["So it can be reused from other pages, a job queue, or a report, and can be unit-tested independently", "Codeunits run faster than pages", "Pages cannot contain any logic at all", "Codeunits do not require compilation"], correct: 0 },
      { q: "What is the relationship between a page and its source table?", options: ["A page owns the data and the table only displays it", "A page presents the table's data; it does not own it", "Pages and tables are unrelated objects", "A page must have multiple source tables"], correct: 1 },
      { q: "Which AL object type is responsible for producing output like PDFs or Excel files?", options: ["Tables", "Pages", "Reports", "Codeunits"], correct: 2 },
    ]
  },
  "al-03": {
    pass: 2,
    questions: [
      { q: "Why do keys matter for a table's performance?", options: ["They automatically translate field labels", "They are required for a table to compile", "They control which users can edit the table", "Without one, finding a record means scanning every row"], correct: 3 },
      { q: "What is safe to change about a table field, and what is not?", options: ["Renumbering is safe; renaming is not", "Both renaming and renumbering are always safe", "Renaming is safe; renumbering is not, since the ID is permanent", "Neither renaming nor renumbering is ever safe"], correct: 2 },
      { q: "Why does table design carry more risk than page design?", options: ["Tables cannot be modified after creation under any circumstance", "Table design does not affect performance", "Pages have no risk associated with changes", "Changing a type or key on a table holding production data is a migration, unlike adding a field to a page"], correct: 3 },
    ]
  },
  "al-04": {
    pass: 2,
    questions: [
      { q: "Why should an action's logic live in a codeunit rather than directly in its OnAction trigger?", options: ["Actions cannot contain any code", "OnAction triggers execute too slowly", "So it can be reused from other pages, called from a job queue, and tested — the trigger should call, not implement", "Codeunits are required for all page objects"], correct: 2 },
      { q: "What is the difference between a list page and a card page?", options: ["List pages are for editing one record deeply; card pages are for scanning many", "Card pages cannot contain actions", "There is no functional difference between them", "List pages are built for scanning and comparing many records; card pages are built for reading and editing one record thoroughly"], correct: 3 },
      { q: "What is a FactBox used for?", options: ["Showing related information alongside the main form without cluttering it", "Replacing the main repeater on a list page", "Storing table keys", "Defining page permissions"], correct: 0 },
    ]
  },
  "al-05": {
    pass: 2,
    questions: [
      { q: "In the codeunit/page split described in this lesson, what is the page responsible for?", options: ["Collecting input and displaying results", "Performing the business calculation", "Storing the event subscriber list", "Compiling the extension"], correct: 0 },
      { q: "Why are event subscribers described as what makes 'extend, never modify' practical?", options: ["They let code react to base application events without modifying the code that raised them", "They allow direct edits to base code with automatic version tracking", "They eliminate the need for codeunits entirely", "They only work with API pages"], correct: 0 },
      { q: "In the page-and-codeunit relationship, what is each responsible for?", options: ["The page computes; the codeunit collects input and displays results", "The page collects input and displays results; the codeunit does the work", "Both are responsible for identical tasks", "Codeunits handle display; pages handle computation"], correct: 1 },
    ]
  },
  "al-06": {
    pass: 2,
    questions: [
      { q: "A user wants the same report in summary and detailed versions. What is the efficient approach, assuming no extra fields are needed?", options: ["Use one dataset with two layouts", "Build two entirely separate reports", "Duplicate the dataset but share the layout", "Use a query object instead of a report"], correct: 0 },
      { q: "What is the benefit of separating a report's dataset from its layout?", options: ["It makes reports run faster in all cases", "A formatting change never risks the data logic, and a data change doesn't require redesigning the document", "It removes the need for a request page", "It allows reports to skip the compiler validation step"], correct: 1 },
      { q: "What is the purpose of the request page in a report?", options: ["To define which fields appear in the dataset permanently", "To render the final PDF output", "To let the user choose filters before running, preventing reports from running with unwanted scope", "To store report permissions"], correct: 2 },
    ]
  },
  "al-07": {
    pass: 2,
    questions: [
      { q: "Why does the version number in app.json matter beyond record-keeping?", options: ["It only affects the displayed extension name", "Upgrade codeunits are triggered by version transitions — an unchanged version means upgrade logic won't run", "It determines the extension's object ID range", "It has no functional effect on deployment"], correct: 1 },
      { q: "Why is publishing to sandbox before production described as non-optional discipline?", options: ["Sandbox environments are required by Microsoft licensing", "Sandbox publishing is faster than production publishing", "It's where you find problems unit tests do not catch, before they reach production", "Production environments do not support AL extensions"], correct: 2 },
      { q: "What compiles all of a developer's AL objects into a single deployable unit?", options: ["A launch.json file", "A permission set", "An XMLport", "A .app file, produced only after the compiler validates the code"], correct: 3 },
    ]
  },
  "al-m1": {
    pass: 2,
    questions: [
      { q: "Why is a missing Reset() call on a record variable dangerous rather than merely untidy?", options: ["It causes a compile error", "It slows down FindSet() significantly", "Filters persist on the variable, so the next operation can silently inherit them and process the wrong subset", "It deletes previously applied filters automatically"], correct: 2 },
      { q: "What is the practical difference between Rec.Quantity := 5 and Rec.Validate(Quantity, 5)?", options: ["They are functionally identical", "Validate() is slower but otherwise identical", "Direct assignment is only allowed on primary key fields", "Validate() runs the field's dependent business logic; direct assignment skips validation entirely"], correct: 3 },
      { q: "When should you use FindSet() instead of FindFirst()?", options: ["When you intend to loop through a set of records — it's optimised for that", "When you only need the first matching record", "When filtering is not required", "FindSet() and FindFirst() behave identically"], correct: 0 },
    ]
  },
  "al-m2": {
    pass: 2,
    questions: [
      { q: "What does CalcDate('+1M', Today()) do?", options: ["Converts a date to formatted text", "Computes a date one month ahead of today, handling month-length edge cases", "Validates that a date field is not blank", "Returns the current timestamp including time"], correct: 1 },
      { q: "Why is CalcDate('+1M', Today()) preferable to manual date arithmetic?", options: ["It expresses intent clearly and handles month-length edge cases correctly", "It runs faster than manual arithmetic", "It is the only way to add days to a date in AL", "Manual arithmetic is not supported in AL"], correct: 0 },
      { q: "What is the benefit of normalising text case before comparison?", options: ["It makes strings shorter", "It prevents a whole class of matching bugs caused by inconsistent formatting", "It is required for all Code fields", "It automatically translates text to another language"], correct: 1 },
    ]
  },
  "al-m3": {
    pass: 2,
    questions: [
      { q: "When should validation logic use Error() rather than Message()?", options: ["Always, when the condition should prevent the operation — Message() lets the process continue with invalid state committed", "Only when performance is a concern", "Never — Message() is always preferred for validation", "Only inside test codeunits"], correct: 0 },
      { q: "Why is Error() described as 'transactional'?", options: ["It logs errors to a separate transactional table", "It doesn't just display text — it aborts the transaction entirely", "It only works within a database transaction block", "It requires a Confirm() call first"], correct: 1 },
      { q: "What is a legitimate use case for Sleep() according to the lesson?", options: ["Standard business logic validation", "Formatting decimal values", "Testing and pacing external calls — it has almost no place in normal business logic since it blocks execution", "Confirming user actions"], correct: 2 },
    ]
  },
  "al-b01": {
    pass: 2,
    questions: [
      { q: "Why is a Role Center considered a usability feature rather than a cosmetic one?", options: ["It only changes the color scheme of the interface", "It determines what a user sees first every day, reducing what they must navigate past", "It has no measurable effect on adoption", "It replaces the need for permission sets"], correct: 1 },
      { q: "What does switching a user's assigned profile do?", options: ["Nothing visible changes for the user", "It changes the user's permission set automatically", "It re-tunes tiles, actions and navigation for that role — a sales user and warehouse user share almost no screen", "It only affects report layouts"], correct: 2 },
      { q: "Which area of a Role Center page holds quick actions?", options: ["area(RoleCenter)", "area(FactBoxes)", "area(Embedded)", "area(Processing)"], correct: 3 },
    ]
  },
  "al-b02": {
    pass: 2,
    questions: [
      { q: "What does 'RIMD' refer to in permission sets?", options: ["A naming convention for permission set IDs", "The four states a user account can be in", "Read, Insert, Modify, Delete — four independent access rights", "A required prefix for all AL object names"], correct: 2 },
      { q: "What does RIMD stand for in the permission model?", options: ["Read, Import, Modify, Delete", "Read, Index, Merge, Delete", "Register, Insert, Manage, Deploy", "Read, Insert, Modify, Delete"], correct: 3 },
      { q: "What does IncludedPermissionSets allow a new permission set to do?", options: ["Build on an existing permission set, keeping sets maintainable as the base application changes", "Automatically grant admin rights", "Bypass RIMD restrictions", "Skip the Assignable property"], correct: 0 },
    ]
  },
  "al-b03": {
    pass: 2,
    questions: [
      { q: "What does setting 'extensible = true' on an enum allow?", options: ["The enum can store free text instead of fixed values", "The enum values can be renumbered safely", "Any user can edit the enum at runtime", "Another extension can add values without modifying yours"], correct: 3 },
      { q: "What problem do enums solve compared to a free-text status field?", options: ["They prevent typos and variants like 'Completed', 'completed', and 'compleeted' becoming distinct values", "They make status fields searchable", "They remove the need for a caption", "They automatically translate values"], correct: 0 },
      { q: "What does setting Extensible = true on an enum allow?", options: ["Any user to add new values at runtime", "Another extension to add new values without modifying the original enum", "The enum to be renumbered safely", "The enum to skip compilation checks"], correct: 1 },
    ]
  },
  "al-b04": {
    pass: 2,
    questions: [
      { q: "What problem do interfaces solve, according to this lesson?", options: ["A growing chain of if/else branches for each variant of a behaviour", "Slow database queries", "Extensions that cannot be uninstalled", "Fields that accept the wrong data type"], correct: 0 },
      { q: "What problem do interfaces solve compared to a growing chain of if/else branches?", options: ["They make code run faster", "Each new variant (shipping method, payment type) can implement the interface independently, without adding another branch to shared logic", "They eliminate the need for codeunits", "They automatically generate documentation"], correct: 1 },
      { q: "What does an interface declare?", options: ["Full implementation logic for every method", "A default set of field values", "Procedure signatures with no implementation — any implementing codeunit must provide those procedures", "A specific table's structure"], correct: 2 },
    ]
  },
  "al-b05": {
    pass: 2,
    questions: [
      { q: "Why does a test with no assertion count as a liability rather than simply useless?", options: ["It fails to compile", "It passes unconditionally, reporting confidence it hasn't earned, and will keep passing after the code breaks", "It slows down the build pipeline significantly", "It cannot be run automatically"], correct: 1 },
      { q: "What is the 'arrange, act, assert' pattern?", options: ["A deployment pipeline sequence", "A three-step approval workflow", "Set up the data, run the operation, then check the outcome — the shape of a well-written test", "A method for structuring page layouts"], correct: 2 },
      { q: "What is the long-term value of automated tests, beyond catching today's bug?", options: ["They replace the need for code review", "They automatically fix any code that breaks", "They eliminate the need for a sandbox environment", "Being able to change code later and know within seconds whether anything broke"], correct: 3 },
    ]
  },
  "al-b06": {
    pass: 2,
    questions: [
      { q: "Which four HTTP verbs does an API page typically support?", options: ["READ, WRITE, UPDATE, ERASE", "GET, POST, PATCH, DELETE", "OPEN, CLOSE, SAVE, EXIT", "PULL, PUSH, MERGE, REBASE"], correct: 1 },
      { q: "What determines the URL that external systems use to call an API page?", options: ["The table's primary key", "The extension's version number", "The page's caption", "Properties like APIPublisher, APIGroup, EntityName and EntitySetName"], correct: 3 },
      { q: "Which standard verb is used to update an existing record via an API page?", options: ["PATCH", "POST", "GET", "DELETE"], correct: 0 },
    ]
  },
  "al-b07": {
    pass: 2,
    questions: [
      { q: "Why mark a field Obsolete rather than deleting it outright?", options: ["Obsolete fields are automatically hidden from all pages", "Obsolete fields no longer take up database space", "Deleting fields is technically impossible in AL", "Dependent extensions compile against it, so Obsolete gives them a deprecation warning instead of a sudden failure"], correct: 3 },
      { q: "What runs automatically, once, at install time to carry live data forward?", options: ["An upgrade codeunit with OnUpgradePerCompany or OnUpgradePerRecord triggers", "A test codeunit", "A report request page", "A permission set"], correct: 0 },
      { q: "Which kind of table change is considered safe for existing extensions?", options: ["Removing a field", "Adding a field", "Retyping a field", "Renumbering a field"], correct: 1 },
    ]
  },
  "al-b08": {
    pass: 2,
    questions: [
      { q: "When should you prefer a query object over nested FindSet loops?", options: ["Whenever you are joining tables to produce aggregates — the database performs aggregation once instead of AL iterating every row", "Only when working with a single table", "Queries should never be used instead of FindSet loops", "Only for report objects, never for pages"], correct: 0 },
      { q: "How does a query object handle joining multiple tables?", options: ["It requires manual AL loop code for each join", "Nested dataitems define the relationship, and the platform handles the join", "Joins are not supported in query objects", "It calls a separate codeunit for each table"], correct: 1 },
      { q: "Which column methods does a query use to compute totals?", options: ["Validate, Insert, Modify", "FindSet, FindFirst, Next", "Sum, Count, Average, Min, Max", "SetRange, SetFilter, Reset"], correct: 2 },
    ]
  },
  "al-b09": {
    pass: 2,
    questions: [
      { q: "Can the same XMLport object handle both import and export?", options: ["No — a separate XMLport is required for each direction", "Only if two codeunits are linked to it", "Yes — direction is a runtime choice, not a separate object", "Only for text files, not for structured data"], correct: 2 },
      { q: "Can the same XMLport object handle both import and export?", options: ["No, separate objects are always required", "Only if two XMLports are linked together", "Yes — direction is a runtime choice, not a separate object", "Only for table data, not text files"], correct: 2 },
      { q: "What defines how external file structure maps onto Business Central fields in an XMLport?", options: ["The launch.json file", "Permission sets", "The app.json dependencies array", "textelement and tableelement definitions"], correct: 3 },
    ]
  },
  "al-b10": {
    pass: 2,
    questions: [
      { q: "Why does declaring a minimum version matter more than simply declaring a dependency?", options: ["Minimum versions are only used for display purposes", "It reduces the extension's file size", "The dependency will usually already be present; the version guarantees the specific objects and events you compiled against actually exist", "It removes the need for an app.json"], correct: 2 },
      { q: "In the extension layer stack, which direction do dependencies flow?", options: ["Upward — extensions depend on layers above them", "There is no fixed direction", "Dependencies can flow in either direction freely", "Downward — each layer depends on the one beneath it, never upward"], correct: 3 },
      { q: "What happens if an installed dependency is older than the declared minimum version?", options: ["Installation fails, rather than producing runtime errors later", "The extension installs but with reduced functionality", "The dependency is automatically upgraded", "Nothing — version numbers are advisory only"], correct: 0 },
    ]
  },
  "al-b11": {
    pass: 2,
    questions: [
      { q: "What is the advantage of using breakpoints and the debugger over inserting Message() calls to trace behaviour?", options: ["Message() calls are faster to write and just as effective", "Message() calls cannot display variable values", "Debuggers are required by Business Central for all deployments", "No code change or risk of shipping the trace, full state visibility, and the ability to change what you inspect without restarting"], correct: 3 },
      { q: "What does Step Into do during a debugging session?", options: ["Enters a called procedure so you can inspect it", "Runs the next line without entering any called procedure", "Skips the next line entirely", "Returns execution to the calling procedure"], correct: 0 },
      { q: "What is the purpose of the watch panel?", options: ["To list all breakpoints in the project", "To show variable values updating as execution proceeds, revealing where a value first becomes wrong", "To display the app.json dependencies", "To show compile errors only"], correct: 1 },
    ]
  },
  "al-b12": {
    pass: 2,
    questions: [
      { q: "Why is 'fix and move on' considered insufficient for a performance issue?", options: ["The fix is a hypothesis — re-measuring is what verifies it actually improved things, and sometimes reveals the bottleneck was elsewhere", "Fixes are always temporary in Business Central", "Performance issues cannot be fixed without a support ticket", "Telemetry data is deleted after each fix"], correct: 0 },
      { q: "What does Business Central emit that can be collected and queried for monitoring?", options: ["Only error logs", "Telemetry signals — errors, slow operations, feature usage", "Source code diffs", "User permission changes only"], correct: 1 },
      { q: "Why is telemetry particularly valuable for finding performance problems?", options: ["It automatically fixes the problems it finds", "It replaces the need for a sandbox environment", "Production performance issues are rarely reproducible on demand, so telemetry finds them without waiting for a user report", "It only works for report objects"], correct: 2 },
    ]
  },
  "al-b13": {
    pass: 2,
    questions: [
      { q: "What is the maintenance consideration that comes with using a ControlAddIn?", options: ["ControlAddIns cannot be updated once deployed", "You now own web code inside the extension — browser compatibility, library updates, and security become your responsibility", "ControlAddIns bypass Business Central's security model entirely", "They require a separate hosting server outside Business Central"], correct: 1 },
      { q: "How does AL communicate with JavaScript in a ControlAddIn, and vice versa?", options: ["Only AL can call JavaScript; JavaScript cannot call back", "Communication happens only through shared database tables", "AL calls into JavaScript through defined procedures; JavaScript raises events back into AL through EventTrigger procedures", "ControlAddIns do not support two-way communication"], correct: 2 },
      { q: "When would a developer reach for a ControlAddIn?", options: ["For any standard list or card page", "To define a new table's fields", "To replace a codeunit's business logic", "When standard page controls run out — for things like signature capture or interactive maps"], correct: 3 },
    ]
  },
  "al-b14": {
    pass: 2,
    questions: [
      { q: "What happens to fields you add via tableextension when Microsoft updates the base table?", options: ["Your fields are lost and must be re-added", "The base update fails until you remove your fields", "Nothing — they live in your extension, keyed to the base record, so the base update applies cleanly", "Your fields are merged into the base table automatically"], correct: 2 },
      { q: "Why can't you edit Microsoft's base tables and pages directly?", options: ["It's a licensing restriction, not a technical one", "Base objects can be edited, but only by certified partners", "Editing base objects requires a special developer key", "Base objects are not editable, which is what makes Microsoft's updates safe to apply"], correct: 3 },
      { q: "What does pageextension use to position added fields and actions precisely?", options: ["addafter, addbefore, addfirst or addlast", "SetRange and SetFilter", "Validate and TestField", "IncludedPermissionSets"], correct: 0 },
    ]
  },
  "al-b15": {
    pass: 2,
    questions: [
      { q: "What problem do FlowFields solve compared to a stored total field?", options: ["FlowFields are faster to write to than stored fields", "FlowFields do not require a CalcFormula", "Stored fields cannot be used in reports", "A stored total must be updated everywhere it could change, and can silently drift out of sync"], correct: 3 },
      { q: "What problem do FlowFields eliminate compared to a manually stored total?", options: ["The risk of the stored value drifting out of sync when an update path is missed", "The need for any keys on the table", "The need for a primary key", "The need for validation on the source field"], correct: 0 },
      { q: "What does a FlowFilter do?", options: ["Permanently changes the FlowField's CalcFormula", "Narrows the FlowField calculation at runtime, like a date range, without changing the formula itself", "Converts a FlowField into a stored field", "Deletes records outside a specified range"], correct: 1 },
    ]
  },
  "al-b16": {
    pass: 2,
    questions: [
      { q: "What recurrence options does a Job Queue entry support?", options: ["Daily, weekly, on specific weekdays, or at a set time", "Only once, immediately after creation", "Only when manually triggered by a user", "Continuously, every few seconds"], correct: 0 },
      { q: "What statuses can a job queue entry report?", options: ["Only Success or Failure", "Ready, In Process, Success or Error, with the error message retained", "Pending, Approved, Rejected", "Draft, Published, Archived"], correct: 1 },
      { q: "Why is background scheduling described as where automation 'stops depending on a person remembering'?", options: ["Because job queues never fail", "Because it replaces the need for permission sets", "Because a recurring codeunit runs automatically on its defined schedule rather than needing someone to trigger it manually", "Because it eliminates the need for telemetry"], correct: 2 },
    ]
  },
  "al-w1": {
    pass: 2,
    questions: [
      { q: "Why is a narrowly scoped branch easier to revert than a broad one?", options: ["Narrow branches cannot contain bugs", "Reverting it removes exactly one change, while a branch with three unrelated fixes can't be partially undone easily", "Narrow branches don't require code review", "Git only allows reverting single-purpose branches"], correct: 1 },
      { q: "What does reading the ticket's title, description and acceptance criteria properly achieve?", options: ["It replaces the need for a pull request", "It automatically creates the branch name", "It defines what 'done' means, which is faster than discovering the requirement during code review", "It is only useful for large tickets"], correct: 2 },
      { q: "What does linking a branch to its work item in Azure DevOps provide?", options: ["Automatic code review approval", "Automatic deployment to production", "A guarantee the branch has no conflicts", "Traceability from requirement to commit without maintaining it manually"], correct: 3 },
    ]
  },
  "al-w2": {
    pass: 2,
    questions: [
      { q: "Why does infrequent syncing with main create disproportionate work when conflicts arise?", options: ["Git punishes long-lived branches with slower performance", "Old branches automatically lose their commit history", "Conflicts compound — resolving three weeks of divergence requires understanding changes you weren't involved in, unlike one day's worth", "Syncing frequency has no effect on conflict difficulty"], correct: 2 },
      { q: "Why does straying outside an assigned object ID range cause problems?", options: ["It slows down compilation", "It only affects table objects, not pages", "It is blocked automatically by VS Code", "It produces collisions that are painful to resolve once objects exist in multiple environments"], correct: 3 },
      { q: "What makes 'Add loyalty points calculation to Customer table' a better commit message than 'fixes'?", options: ["It explains the change without requiring the reader to open the diff", "It is shorter to type", "It automatically links to the work item", "Commit message length is enforced by Git"], correct: 0 },
    ]
  },
  "al-w3": {
    pass: 2,
    questions: [
      { q: "Why does the tone of code review comments materially affect code quality?", options: ["Tone has no real effect on the outcome", "Reviewers are required to be polite by policy", "Polite comments are processed faster by the CI pipeline", "Defensive authors defend rather than reconsider; curious framing produces changed code while adversarial framing produces justified code"], correct: 3 },
      { q: "Why should automated checks run before a human reviewer looks at a pull request?", options: ["Reviewer time is expensive, so let the pipeline catch what it can first", "Automated checks replace the need for human review entirely", "Automated checks are required by Business Central licensing", "Human review is only needed if automated checks fail"], correct: 0 },
      { q: "What is described as the true value of code review, beyond catching defects?", options: ["Reducing the number of commits per branch", "Spreading understanding of the codebase across the team", "Enforcing a consistent branch naming convention", "Eliminating the need for a QA environment"], correct: 1 },
    ]
  },
  "git-01": {
    pass: 2,
    questions: [
      { q: "In Git's distributed model, what is the 'remote' actually for?", options: ["The only place your commit history is stored", "A shared copy to push commits to and pull others' commits from — not a requirement for having history", "A backup that syncs automatically without git push", "A separate staging area for your working directory"], correct: 1 },
      { q: "What makes Git 'distributed', as described in the lesson?", options: ["Every commit is stored only on the remote server", "Your full history lives on your machine; the remote is a convention, not a requirement", "Multiple remotes are required for every repository", "Distributed means the same as staged"], correct: 1 },
      { q: "Which command moves a change from the staging area into the permanent repository history?", options: ["git add", "git push", "git commit", "git pull"], correct: 2 },
    ]
  },
  "git-02": {
    pass: 2,
    questions: [
      { q: "What happens when a merge finds the same lines changed on both branches?", options: ["Git automatically deletes one branch", "The merge silently keeps the first branch's version", "Git asks you to resolve the conflict — it is not treated as an error", "Git refuses to merge until one branch is renamed"], correct: 2 },
      { q: "What happens when the same lines are changed on both branches being merged?", options: ["Git automatically picks the more recent change", "The merge silently fails with no explanation", "Git asks you to decide — this is a conflict, not an error", "Both changes are discarded automatically"], correct: 2 },
      { q: "What does branching enable that would otherwise require coordination overhead?", options: ["Automatic code review", "Direct editing of the remote repository", "Elimination of the need for commits", "Parallel work by several people without stepping on each other"], correct: 3 },
    ]
  },
  "git-03": {
    pass: 2,
    questions: [
      { q: "What does git blame primarily help a developer find, despite its name?", options: ["Who to hold responsible for a bug", "The total number of changes to a file", "The commit — and therefore the message and linked work item — that explains why a line exists", "The current branch's merge status"], correct: 2 },
      { q: "What does git diff show?", options: ["The list of all commits in chronological order", "The remote repository's URL", "Which files are currently staged", "What actually changed, line by line, between any two points in history"], correct: 3 },
      { q: "Why does commit message quality matter for git log?", options: ["Log is the interface to commit history, so message quality determines how useful that history is", "Log entries are automatically translated for readability", "git log ignores commit messages entirely", "Poor messages cause git log to fail"], correct: 0 },
    ]
  },
  "git-04": {
    pass: 2,
    questions: [
      { q: "How does the lesson describe a merge conflict?", options: ["A failure that indicates broken code", "A sign that Git itself is malfunctioning", "An error that requires deleting one of the branches", "A question Git is asking, because it found the same lines changed on both branches and cannot know which is correct"], correct: 3 },
      { q: "What do the <<<<<<<, ======= and >>>>>>> markers do in a conflicted file?", options: ["They delimit the two conflicting versions; resolution means editing to the final state and removing the markers", "They mark lines to be permanently deleted", "They indicate a syntax error in the code", "They are inserted automatically by a merge tool and never need removal"], correct: 0 },
      { q: "Why do long-lived branches tend to produce worse conflicts?", options: ["Git slows down the longer a branch exists", "More divergence means more overlapping changes, requiring understanding of changes made by others over a longer period", "Long-lived branches are automatically deleted by Git", "Conflict size is unrelated to how long a branch has existed"], correct: 1 },
    ]
  },
  "git-05": {
    pass: 2,
    questions: [
      { q: "What does 'git stash' do?", options: ["Permanently deletes uncommitted changes", "Combines two branches into one commit", "Applies a single commit from another branch", "Temporarily shelves uncommitted changes so you can switch context, then restores them"], correct: 3 },
      { q: "What does git stash do?", options: ["Permanently deletes uncommitted changes", "Temporarily shelves uncommitted changes so you can switch context, then restores them later", "Creates a new branch from the current changes", "Pushes uncommitted changes to the remote"], correct: 1 },
      { q: "What does it usually mean if cherry-pick becomes a routine part of a team's workflow?", options: ["The team is using Git exactly as intended", "It means the team should rebase more often instead", "It's a warning sign that branches are scoped wrongly, since cherry-pick is best suited for occasional hotfixes", "It indicates the remote repository is misconfigured"], correct: 2 },
    ]
  },

  "hands-01-setup": {
      pass: 2,
      questions: [
        {
          q: "Which layer does the Codeunit object belong to in this project's architecture?",
          options: ["Data layer", "UI layer", "Logic layer", "It has no fixed layer"],
          correct: 2
        },
        {
          q: "Why does the rental project reserve one contiguous ID range instead of taking the next free number for each object?",
          options: [
            "It's required by Business Central's licensing model",
            "It keeps the project's objects identifiable as one block and avoids collisions with other extensions",
            "It makes objects load faster at runtime",
            "AL doesn't allow object IDs above 50000 otherwise"
          ],
          correct: 1
        },
        {
          q: "What should you decide before writing the very first table in a new extension?",
          options: [
            "The final page layout",
            "The report's RDLC file",
            "The object naming prefix and the reserved ID range",
            "The permission set's Assignable flag"
          ],
          correct: 2
        }
      ]
    },
    "hands-02-table": {
      pass: 2,
      questions: [
        {
          q: "What does TalRentalEquipment's secondary key on Equipment Type actually improve?",
          options: [
            "It enforces that Equipment Type can't be blank",
            "It speeds up filtering, sorting and grouping by Equipment Type instead of scanning in primary-key order",
            "It lets two rows share the same No.",
            "It replaces the need for a primary key"
          ],
          correct: 1
        },
        {
          q: "Which trigger is the right place to re-validate a field's business rules every time its value changes?",
          options: ["OnInsert()", "OnModify()", "OnValidate()", "OnRename()"],
          correct: 2
        },
        {
          q: "What snippet scaffolds a new table object in VS Code?",
          options: ["tpage", "ttable", "tcodeunit", "tquery"],
          correct: 1
        }
      ]
    },
    "hands-02-page": {
      pass: 2,
      questions: [
        {
          q: "Which page type is the right choice for detailed, single-record editing?",
          options: ["List", "Card", "FactBox", "Query"],
          correct: 1
        },
        {
          q: "What is the FactBox on TalRentalEquipmentCard for?",
          options: [
            "Replacing the Card page entirely",
            "Bulk-editing many equipment records at once",
            "Surfacing related information alongside the Card without navigating away",
            "Importing equipment from CSV"
          ],
          correct: 2
        },
        {
          q: "Which page trigger runs before the page closes and can be used to cancel the close?",
          options: ["OnOpenPage", "OnAfterGetRecord", "OnQueryClosePage", "OnNewRecord"],
          correct: 2
        }
      ]
    },
    "hands-03-codeunit": {
      pass: 2,
      questions: [
        {
          q: "Why does TalRentalProcess call TalRentalManagement's CheckAvailability() instead of reimplementing the check itself?",
          options: [
            "It's required by AL syntax",
            "So both codeunits share one rule instead of risking the logic drifting apart",
            "Codeunits cannot contain more than one procedure",
            "CheckAvailability() only works when called from TalRentalProcess"
          ],
          correct: 1
        },
        {
          q: "Which codeunit property keeps one instance of the codeunit alive for the whole session, so its global variables persist between calls?",
          options: ["TableNo", "Access", "SingleInstance", "Subtype"],
          correct: 2
        },
        {
          q: "What does marking a procedure 'local' rather than public actually do?",
          options: [
            "Makes it run faster",
            "Restricts it to calls from within the same codeunit, keeping it out of the object's public surface",
            "Prevents it from returning a value",
            "Marks it deprecated"
          ],
          correct: 1
        }
      ]
    },
    "hands-04-report": {
      pass: 2,
      questions: [
        {
          q: "Which report trigger runs once per record and is the right place for per-row calculations?",
          options: ["OnPreDataItem()", "OnAfterGetRecord()", "OnPostDataItem()", "OnInitReport()"],
          correct: 1
        },
        {
          q: "What does ProcessingOnly = true actually change about a report?",
          options: [
            "It hides the report from Tell Me",
            "It runs the report's logic without producing a printed document",
            "It disables all filters",
            "It forces RDLC layout"
          ],
          correct: 1
        },
        {
          q: "Where should TalEquipmentAvailability apply its filters, so they take effect before the first record is read?",
          options: ["OnPostReport()", "OnAfterGetRecord()", "OnPreDataItem()", "OnQueryClosePage()"],
          correct: 2
        }
      ]
    },
    "hands-04-query": {
      pass: 2,
      questions: [
        {
          q: "In TalRentalEquipmentSummary, which column has no Method set?",
          options: [
            "The item count column",
            "The average price column",
            "Equipment Type, the grouping column",
            "There are no non-aggregate columns"
          ],
          correct: 2
        },
        {
          q: "What is a query fundamentally, compared to a Record variable?",
          options: [
            "A writable table wrapper",
            "A read-only aggregation object combining tables with grouping and filtering",
            "A page that displays data",
            "A trigger that runs on save"
          ],
          correct: 1
        },
        {
          q: "Which AL pattern reads through a query's results in code?",
          options: [
            "Q.FindSet() / Q.Next()",
            "Q.Open(); while Q.Read() do ...; Q.Close();",
            "Q.Get() then Q.Modify()",
            "Q.SetRange() then Q.Insert()"
          ],
          correct: 1
        }
      ]
    },
    "hands-05-permissionset": {
      pass: 2,
      questions: [
        {
          q: "A user assigned only Tal Rental Read tries to modify a Tal Rental Equipment record. What happens?",
          options: [
            "It succeeds because Read includes basic edits",
            "It's blocked — Tal Rental Read never granted M (modify)",
            "It succeeds but logs a warning",
            "It prompts the user to request access"
          ],
          correct: 1
        },
        {
          q: "What does IncludedPermissionSets let a permission set do?",
          options: [
            "Delete another permission set",
            "Pull another set's entire permission list into this one, so broader sets can compose narrower ones",
            "Grant SUPER access automatically",
            "Bypass Assignable = false"
          ],
          correct: 1
        },
        {
          q: "Why does every extension need at least one permission set, without exception?",
          options: [
            "It's only required for extensions with tables",
            "Business Central blocks any object a user has no permission for by default",
            "Permission sets are required only for AppSource submission",
            "It's optional but recommended for performance"
          ],
          correct: 1
        }
      ]
    },

  "bp-07-code-review": {
    pass: 2,
    questions: [
      { q: "In a code review, which finding should block a PR before anything else is even checked?", options: ["A missing blank line between procedures", "A diff that edits a standard base-application object directly", "A commit message that doesn't mention the object name", "A procedure declared public instead of local"], correct: 1 },
      { q: "A new table ships with a permission set entry granting full rimd access \"to be safe.\" How should a reviewer treat that?", options: ["Approve it — broad access avoids future permission bugs", "Flag it — permissions should match exactly what the feature needs, not more", "Ignore it — permissions aren't a code review concern", "Reject the PR outright with no explanation"], correct: 1 },
      { q: "Besides naming and permissions, what else should a reviewer check that \"does it compile\" alone won't catch?", options: ["Whether the developer used tabs or spaces", "Whether the code filters before looping and whether error messages are actionable", "Whether the PR was opened on a Friday", "Whether the object ID is a round number"], correct: 1 },
    ]
  },
  "bp-08-definition-of-done": {
    pass: 2,
    questions: [
      { q: "A feature compiles and works in the developer's own sandbox. Is that enough to call it done?", options: ["Yes — compiling and working is the definition of done", "No — it still needs review, permissions, captions, and zero warnings before it's done", "Yes, as long as no errors appear in the output window", "No — it also needs a new object ID range"], correct: 1 },
      { q: "Why does a definition of done treat compiler warnings as blocking, even though they don't stop the build?", options: ["Warnings are actually errors in disguise", "Unaddressed warnings accumulate silently and tend to become real bugs or failed validations later", "The AL compiler will eventually convert warnings to errors automatically", "Warnings slow down the build pipeline"], correct: 1 },
      { q: "A PR ships with a `// TODO: handle this properly` comment and no linked follow-up task. What does this lesson say about that?", options: ["It's fine as long as the TODO is clearly worded", "Without a tracked task, \"later\" almost never actually arrives — it shouldn't merge as-is", "TODOs are required documentation and should stay", "It only matters if the TODO is in a public procedure"], correct: 1 },
    ]
  },

  "lab-04-posting-groups": {
    pass: 2,
    questions: [
      { q: "A purchase invoice fails to post with \"G/L account ... has not been set up.\" What's the actual root cause almost every time?", options: ["The vendor is blocked", "A posting group used by the vendor or item has an incomplete G/L account mapping", "The item doesn't exist", "The purchase order wasn't released"], correct: 1 },
      { q: "What does Customer Posting Group actually determine when a sales invoice posts?", options: ["The item's unit price", "The Receivables G/L account the invoice posts to", "The customer's credit limit", "The payment terms"], correct: 1 },
    ]
  },
  "lab-06-ship-invoice": {
    pass: 2,
    questions: [
      { q: "In the O2C flow, what does releasing a Sales Order actually change?", options: ["It posts the order to the G/L", "It exposes the order to shipping/warehouse processing", "It locks the customer's credit limit", "It applies VAT"], correct: 1 },
      { q: "Posting a sales shipment and posting a sales invoice each do something different. Which one moves inventory?", options: ["The invoice", "The shipment", "Both equally", "Neither — inventory only moves on Adjust Cost - Item Entries"], correct: 1 },
    ]
  },
  "lab-09-receive-invoice": {
    pass: 2,
    questions: [
      { q: "A purchase order's line shows Direct Unit Cost 0 even though the item card has a Unit Cost set. What's the most likely cause?", options: ["The item's Unit Cost wasn't saved before the order was created", "The vendor has a blocked status", "The order wasn't released yet", "VAT hasn't been calculated"], correct: 0 },
      { q: "What does \"Apply Entries\" do when posting a payment?", options: ["It calculates VAT on the payment", "It links the payment's ledger entry to the invoice's, so both close once they net to zero", "It creates a new customer or vendor record", "It reverses the original invoice"], correct: 1 },
    ]
  },
  "lab-16-capstone": {
    pass: 2,
    questions: [
      { q: "Why does Costing Method lock on an item after its first transaction?", options: ["It's a licensing restriction", "Changing it retroactively would make the item's valuation history internally inconsistent", "It's a bug, not a feature", "Only SUPER users can ever change it"], correct: 1 },
      { q: "In a month-end close, why run \"Adjust Cost - Item Entries\" before reviewing the trial balance?", options: ["It's alphabetically first in Tell Me", "The trial balance reads whatever inventory valuation is currently posted, so adjusting cost first is what makes those numbers current", "It locks the accounting period automatically", "It's required before any sales order can be created next month"], correct: 1 },
    ]
  },

  "scn-00-intro": {
    pass: 2,
    questions: [
      { q: "Which single ledger type is created by every posted document that involves money owed by or to a business partner, regardless of whether inventory is involved?", options: ["Item Ledger Entry", "Value Entry", "Customer Ledger Entry or Vendor Ledger Entry", "Resource Ledger Entry"], correct: 2 },
      { q: "A transfer order between two locations shows movement in the Item Ledger Entries but nothing meaningful in the G/L. Why not?", options: ["The transfer failed silently", "A transfer moves inventory value between locations without a revenue or expense event — no P&L reason for a G/L posting beyond an in-transit account", "Transfers never post to any ledger", "G/L posting for transfers requires a Premium license"], correct: 1 },
    ]
  },
  "scn-01-retail": {
    pass: 2,
    questions: [
      { q: "A sales return in this scenario uses a Sales Return Order instead of a manually typed credit memo. What does that choice guarantee that a bare credit memo doesn't?", options: ["Faster processing", "Both the inventory (ILE/VE) and financial (CLE/G-L) sides of the reversal happen together", "It avoids VAT entirely", "It requires SUPER permissions"], correct: 1 },
      { q: "A sales order line keeps failing to find stock that the customer confirms exists. What's the most likely cause?", options: ["The customer is blocked", "The sales line's Location Code doesn't match where the stock actually sits", "VAT hasn't been calculated", "The item isn't released yet"], correct: 1 },
    ]
  },
  "scn-02-services": {
    pass: 2,
    questions: [
      { q: "Why does time logged in the Job Journal not appear on a client's invoice draft until it's posted?", options: ["Invoicing has a 24-hour delay by design", "Create Sales Invoice only pulls usage already posted as a Job Ledger Entry, not entered-but-unposted lines", "The resource needs SUPER permissions", "Job invoices require manual G/L entry first"], correct: 1 },
      { q: "What does a job's WIP method actually control?", options: ["Which resources can log time", "When revenue is recognized relative to when costs are incurred — not what gets invoiced", "The job's billing currency", "Whether Time Sheets are required"], correct: 1 },
    ]
  },
  "scn-03-manufacturing": {
    pass: 2,
    questions: [
      { q: "A client says they need Production Orders \"because they're a manufacturer.\" What should a consultant check before agreeing?", options: ["Whether the client has a logo", "Whether the actual need is multi-step routed production (Production Orders, Premium) or a simpler kit build (Assembly, Essentials)", "Whether the client uses multi-currency", "Nothing — always propose Production Orders for manufacturers"], correct: 1 },
      { q: "Posting an Assembly Order without the components actually in stock — what happens in standard Business Central?", options: ["The posting is blocked automatically", "It succeeds, because negative inventory is allowed by default — which is exactly why it's a common demo pitfall", "Only a SUPER user can do this", "The BOM is automatically deactivated"], correct: 1 },
    ]
  },
  "scn-04-recurring": {
    pass: 2,
    questions: [
      { q: "What does Copy Document actually automate in this recurring-billing scenario?", options: ["Nothing — it still requires a person to run it and adjust dates each period", "It schedules future invoices to post automatically", "It prorates revenue across the contract term", "It replaces the need for a customer record"], correct: 0 },
      { q: "A client wants proration and contract-term tracking, beyond what Copy Document offers. What's the honest next conversation?", options: ["Copy Document already does this if configured correctly", "Service Contracts (Service Management) or a third-party subscription-billing add-on — a genuinely different scope", "Recurring General Journals fully solve this on their own", "It isn't possible in Business Central at all, ever"], correct: 1 },
    ]
  },
  "scn-05-capstone": {
    pass: 2,
    questions: [
      { q: "In the mixed sales order, why doesn't the installation (Resource-type) line create an Item Ledger Entry?", options: ["Resources are a special kind of low-value inventory", "Resources aren't inventory at all — there's no stocked quantity for an ILE to track", "The line wasn't released", "VAT blocks it"], correct: 1 },
      { q: "Why must the special kit (SCN-I002) be built via an Assembly Order before the sales order can ship it?", options: ["It's just a best practice, not a requirement", "The kit has to actually exist in stock — assembly is what creates that stock before anything can ship it", "Sales Orders can only ship items purchased directly", "Assembly Orders and Sales Orders must be dated the same day"], correct: 1 },
    ]
  },

};
