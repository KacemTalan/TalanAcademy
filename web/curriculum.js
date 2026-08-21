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
      id: "bca-01", n: "01", title: "Sales & Service Management", dur: "6 min read",
      summary: "The module that carries a customer from first quote through to after-sales support, without the data being re-entered anywhere along the way.",
      concepts: [
        { h: "Quotes and sales orders", p: "A quote is a proposal; a sales order is a commitment. Business Central converts one into the other without retyping, so the numbers a customer agreed to are the numbers that get fulfilled and invoiced." },
        { h: "Pricing and discounts", p: "Customer-specific prices and discount rules are configured once and applied automatically. Nobody has to remember that a particular client gets 12% off a particular item group." },
        { h: "Order tracking", p: "Status, shipment, and invoicing sit on the same record. Answering 'where is my order?' becomes a lookup rather than an investigation across three systems." },
        { h: "Customer interaction history", p: "Calls, emails, quotes, and orders attach to one customer record. Whoever picks up the phone next has the full context." },
        { h: "Service and case management", p: "Service requests get logged, assigned to a technician, and tracked to resolution — the after-sale is treated as part of the relationship, not a separate process." }
      ],
      why: "Most businesses lose margin in the gaps between systems: a quote in a spreadsheet, an order in email, a service request in someone's inbox. Sales & Service Management closes those gaps by keeping one record of the relationship.",
      check: { q: "A customer calls about an order placed three weeks ago and asks why the price differs from their quote. Where do you look?", a: "The sales order itself — because it was converted from the quote, the pricing lineage is on the same record chain, along with any discount rules that applied." },
      video: "From first quote to lasting customer relationship — all in one system."
    },
    {
      id: "bca-02", n: "02", title: "Financial Management", dur: "7 min read",
      summary: "Accounting, cash flow and reporting with numbers that are current rather than reconstructed at month end.",
      concepts: [
        { h: "General ledger", p: "The chart of accounts, journals and postings live in one place. Every transaction elsewhere in the system eventually lands here, which is what makes the ledger trustworthy." },
        { h: "Accounts payable & receivable", p: "Vendor bills and customer payments are tracked with automated reminders, so chasing is a process rather than a person's memory." },
        { h: "Bank reconciliation", p: "Bank transactions are matched automatically against ledger entries. The exceptions are what a human reviews — not the whole statement." },
        { h: "Budgeting and forecasting", p: "Budgets can be built by department, project or account, and variance is visible as it develops rather than at quarter end." },
        { h: "Multi-currency and multi-company", p: "Consolidation across entities and currencies happens in the system, without a manual conversion spreadsheet acting as the source of truth." }
      ],
      why: "Finance teams spend a large share of their time assembling numbers rather than interpreting them. When the ledger updates as the business operates, the close gets shorter and the analysis gets earlier.",
      check: { q: "Why is a shorter month-end close worth more than the hours it saves?", a: "Because decisions get made on current data. A ten-day close means leadership is always looking at a picture that is at least ten days stale."},
      video: "From daily transactions to strategic decisions — one connected financial view."
    },
    {
      id: "bca-03", n: "03", title: "Operations Management", dur: "6 min read",
      summary: "Manufacturing, planning and day-to-day operations coordinated against real capacity rather than an optimistic whiteboard.",
      concepts: [
        { h: "Production orders", p: "Manufacturing jobs are planned, scheduled and tracked from release to completion, with actual progress visible rather than assumed." },
        { h: "Bill of materials", p: "Components and assemblies are defined once. Planning then knows what a finished item actually consumes, which is the basis for every downstream calculation." },
        { h: "Capacity planning", p: "Machine and resource availability is checked before a schedule is committed — so promises to customers reflect what the floor can actually deliver." },
        { h: "Job and project costing", p: "Actual cost is tracked against estimate while the work happens. Overruns are a signal during the job, not a discovery after it." },
        { h: "Quality and assembly management", p: "Assembly orders and quality checks are handled inside the same system, rather than in a parallel paper or spreadsheet process." }
      ],
      why: "Operations problems are almost always visibility problems first. A bottleneck you can see two weeks out is a scheduling decision; the same bottleneck discovered on the day is a crisis.",
      check: { q: "What is the practical difference between a BOM and a production order?", a: "The BOM is the recipe — what a finished item is made of. The production order is one instance of actually making it, with its own schedule, costs and status." },
      video: "From raw materials to finished goods — one connected operations view."
    },
    {
      id: "bca-04", n: "04", title: "Supply Chain Management", dur: "6 min read",
      summary: "Inventory, purchasing and logistics — keeping the right stock in the right place without over-committing cash to a warehouse.",
      concepts: [
        { h: "Inventory management", p: "Stock levels, locations and valuation update in real time, so the number on screen is the number on the shelf." },
        { h: "Purchase orders", p: "Vendor orders are created and managed with approval workflows, which keeps spend controlled without adding a bottleneck for routine purchases." },
        { h: "Demand forecasting", p: "Reorder needs are predicted from historical sales and trends, so replenishment happens before a stockout rather than in response to one." },
        { h: "Warehouse management", p: "Bins, pick routes and shipments are organised to make fulfilment fast and repeatable rather than dependent on who happens to be working." },
        { h: "Vendor management", p: "Vendor performance, pricing agreements and lead times are tracked, which turns supplier negotiation into an evidence-based conversation." }
      ],
      why: "Inventory is capital sitting still. Too little costs you sales, too much costs you cash — and both problems come from the same root cause: not knowing what is actually moving.",
      check: { q: "Why does demand forecasting matter more than simply setting a fixed reorder point?", a: "A fixed reorder point assumes demand is steady. Forecasting adapts to seasonality and trend, so you hold less stock for slow items and avoid stockouts on accelerating ones." },
      video: "From vendor to customer — one connected supply chain."
    },
    {
      id: "bca-05", n: "05", title: "Project Management", dur: "6 min read",
      summary: "Planning, tracking and costing projects so that budgets and invoices reflect the work that actually happened.",
      concepts: [
        { h: "Project planning", p: "Projects break into tasks, phases and milestones with clear ownership — the structure that everything else gets measured against." },
        { h: "Resource allocation", p: "People and equipment are assigned based on real availability, which prevents the familiar problem of the same specialist being promised to three projects at once." },
        { h: "Time and expense tracking", p: "Billable hours and costs are captured while work happens rather than reconstructed from memory at the end of the month." },
        { h: "Budget vs. actual tracking", p: "Planned cost and real spend sit side by side at any point in the project, so an overrun is visible while there is still time to respond." },
        { h: "Project invoicing", p: "Clients are billed directly from tracked time, expenses and milestones — no re-entry, no gap between work done and work billed." }
      ],
      why: "In project businesses, margin leaks quietly: unbilled hours, scope that grew without a conversation, costs discovered after the invoice went out. Tracking as you go is what stops the leak.",
      check: { q: "Why is 'budget vs. actual' more useful than a final project profitability report?", a: "Because a final report tells you what happened. Budget vs. actual during the project tells you what is happening, while you can still change the outcome." },
      video: "From project kickoff to final invoice — one connected view."
    },
    {
      id: "bca-06", n: "06", title: "Reporting & Analytics", dur: "6 min read",
      summary: "The module that turns everything the other five produce into something a person can actually decide on.",
      concepts: [
        { h: "Built-in dashboards", p: "Role-based dashboards surface the KPIs relevant to a person's job the moment they log in, rather than requiring them to go looking." },
        { h: "Power BI integration", p: "Business Central data becomes interactive reporting without a separate data-entry or export step. The report reads the system; nobody rekeys anything." },
        { h: "Financial and operational reports", p: "Standard and custom reports run across every module and stay current, because they read live data rather than a periodic extract." },
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
