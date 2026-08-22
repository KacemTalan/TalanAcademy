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
      check: { q: "A vendor invoice for 100 units arrives, but the posted receipt only shows 80 units received. What happens when someone tries to post the invoice, and why?", a: "The invoice doesn't post cleanly because the 3-way match between PO, receipt, and invoice fails — the received quantity (80) doesn't agree with the invoiced quantity (100). The mismatch routes into an approval workflow instead of silently posting or silently blocking, so someone can decide whether the discrepancy is legitimate before payment is released." }
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
      check: { q: "A client wants to switch a live item from Average costing to Standard costing because they've realized Standard suits their manufacturing process better. What do you tell them?", a: "It can't be done on the existing item once it has posted transactions — costing method is fixed at first transaction. The realistic path is creating a new item with Standard costing and transitioning forward, not changing the setting on the item that's already in use." }
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
      check: { q: "A Balance Sheet figure looks wrong for a particular G/L account, but nobody has touched the General Journal directly. Where else should you look?", a: "The posting groups on whatever module actually generated the entries — customer, vendor, or inventory posting groups feeding that account through Sales, Purchasing, or Inventory transactions. The G/L Entry itself is downstream of those posting groups, not the place the error originated." }
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
      check: { q: "Why does 'Close Income Statement' only run once a year, while the other seven steps repeat every month?", a: "It posts the entire year's profit-and-loss to Retained Earnings and opens a new fiscal year — an action that only makes sense once the year's activity is complete. Running it every month would prematurely zero out the income statement mid-year, which is the opposite of what a monthly close needs." }
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
      check: { q: "A consulting firm wants revenue recognized gradually as work is delivered over a multi-month engagement, rather than all at contract signing or all at final delivery. Which WIP method fits, and why not Fixed Contract?", a: "Percentage of Completion — it recognizes revenue proportionally as the job progresses. Fixed Contract ties recognition to the contract schedule rather than actual progress, which wouldn't reflect the gradual-delivery pattern this firm needs." }
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
        { h: "Posted ledger entries: the permanent audit trail", p: "G/L Entry (17), Customer Ledger Entry (21), Detailed Cust. Ledger Entry (379), Vendor Ledger Entry (25), Item Ledger Entry (32), Value Entry (5802) — these are created when documents post, and in production they are never deleted. Entry No. auto-increments globally per table, and the 'Applied Entries' feature is the standard way to trace how a payment matched against an invoice." }
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
        { h: "The ten tables and what breaks without them", p: "See the code block for the full reference: General Posting Setup (252), Inventory Posting Setup (5813), Customer Posting Group (92), Vendor Posting Group (93), VAT Posting Setup (325), General Ledger Setup (98), Sales & Receivables Setup (311), Purchases & Payables Setup (312), Inventory Setup (313), and No. Series (308) — each one maps a specific business concept to a G/L account or a system-wide behavior, and each has a distinct, predictable failure mode when it's missing a row." },
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
        { h: "Customer Card (table 18): General and Invoicing", p: "No. is the primary key from No. Series. Name/Name 2 display on documents; Address/Post Code/City set the default ship-to address. Credit Limit (LCY) triggers a credit warning on orders that exceed it, and Blocked (Ship/Invoice/All) stops transactions outright. On the Invoicing side, Customer Posting Group determines the Receivables G/L Account, Gen. Bus. Posting Group determines the Sales Account via Gen. Posting Setup, VAT Bus. Posting Group determines the VAT Account via VAT Posting Setup, and Payment Terms Code controls due-date calculation." },
        { h: "Customer Card: Shipping fields", p: "Location Code sets the default warehouse for shipments. Shipment Method Code carries Incoterms onto documents. Shipping Agent Code drives carrier integration. Combine Shipments auto-combines multiple orders onto one invoice. Reserve (Never/Optional/Always) controls whether inventory gets reserved automatically for this customer's orders." },
        { h: "Vendor Card (table 23): the payables mirror of the Customer Card", p: "Vendor Posting Group determines the Payables G/L Account; Gen. Bus. Posting Group determines the Purchase Account via Gen. Posting Setup; VAT Bus. Posting Group determines the input-tax VAT Account. Payment Terms Code controls due date for AP aging, Currency Code matters for foreign-currency vendors, Purchaser Code assigns a buyer, Blocked (Payment/All) stops AP transactions, and Invoice Discount % auto-applies on purchase lines." },
        { h: "Item Card (table 27): the fields that decide how an item behaves", p: "Item Type (Inventory/Non-Inventory/Service) decides whether the item is tracked in stock at all. Costing Method (FIFO/Average/Standard/Specific) is permanent once transactions exist. Inventory Posting Group determines the Inventory G/L Account; Gen. Prod. Posting Group determines Revenue/COGS via Gen. Posting Setup. Base Unit of Measure is the primary UoM for every transaction on the item. Reorder Point/Qty trigger MRP planning. Blocked stops all transactions for the item outright." }
      ],
      why: "Nearly every 'why did this post to the wrong account' or 'why can't this customer place an order' question traces back to one specific field on one of these three cards — knowing the field by name, not just 'somewhere in setup,' is what makes a consultant fast on a support call.",
      check: { q: "Which single field on the Customer Card determines the G/L Receivables account used when that customer's invoice posts?", a: "Customer Posting Group — it maps to the Receivables G/L Account. Gen. Bus. Posting Group and VAT Bus. Posting Group affect the Sales and VAT accounts respectively, but Receivables specifically comes from Customer Posting Group." }
    },
    {
      id: "flow-11-chart-of-accounts", group: "setup", n: "11", title: "Chart of accounts structure",
      dur: "8 min read",
      summary: "The standard number-range convention for Assets, Liabilities, Revenue, COGS, Opex, and statistical accounts.",
      concepts: [
        { h: "Balance Sheet ranges: 1000–2999", p: "1000–1999 covers Assets: Bank Accounts, Accounts Receivable, Inventory, Fixed Assets. 2000–2999 covers Liabilities & Equity: Accounts Payable, VAT Payable, Bank Loans, Share Capital. Both ranges feed the Balance Sheet, and both represent point-in-time positions rather than period activity." },
        { h: "Income Statement ranges: 3000–8999", p: "3000–3999 covers Revenue: Sales Domestic, Sales Export, Service Revenue, Other Income. 4000–5999 covers Cost of Goods Sold: Material Cost, Direct Labor, Manufacturing Overhead, Freight. 6000–8999 covers Operating Expenses: Salaries, Rent, Marketing, Depreciation, Admin Costs. All three ranges feed the Income Statement and represent activity over a period, not a point-in-time balance." },
        { h: "9000–9999: statistical, not financial", p: "This range is reserved for Non-Financial/Memo accounts — Headcount, Units Sold, Hours Worked — statistical entries only. These accounts don't carry monetary value in the way the ranges below them do; they exist purely to track a number alongside the financial data for reporting and ratio purposes." },
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
        { h: "Filters and FlowFilters", p: "Lists filter by date ranges, dimensions, locations, and custom expressions, and FlowFilters recalculate their totals dynamically as the filter changes rather than showing a static snapshot. The filter expression syntax itself is worth memorizing — see the reference table below." },
        { h: "Essential keyboard shortcuts", p: "Alt+Q opens Tell Me. F5 refreshes the page. Ctrl+F7 opens ledger entries. Ctrl+F9 releases a document. F9 posts a document. Ctrl+Shift+F9 deletes a posting (used carefully). Ctrl+Home jumps to the first record. Alt+F4 closes the page. Ctrl+N creates a new record. Ctrl+D deletes a record. These cover the large majority of everyday keyboard-driven navigation." }
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
        { h: "Naming and numbering conventions", p: "Every object in this project carries the same prefix — 'Rental' in captions, `Rental...` in names — and every object ID sits inside one reserved range (78601 through 78638 by the time the capstone is done). This isn't cosmetic: the project's own definition of done later requires that every object 'carries the project prefix and a Caption that reads well in the client,' and that it sits inside the assigned ID range. Decide the prefix and reserve the range before writing the first table." },
        { h: "How the modules build on each other", p: "Modules 1–3 add Table, Enum and Page — the data you can see. Modules 4–6 add Table/Page extensions and the Codeunit — logic layered onto both standard and your own objects. Modules 7–10 add Report, Query and XMLPort — getting data in and out. Modules 11–12 add the Role Center, Profile, Enum extension and Permission Set — making the whole thing usable and secure for a real user. The capstone reuses every object type from modules 1–5 to ship one end-to-end feature. Compile after each object, and test it in the client before moving to the next." }
      ],
      why: "A project that skips this step usually ends up with inconsistent captions, an ID range that collides with something else in the environment, and a permission set built too late to catch objects nobody remembered to grant access to. Deciding the prefix and ID range on day one is the cheapest insurance in the whole series.",
      check: { q: "Why does this project reserve one contiguous ID range (78601–78638) instead of letting each new object take the next free number in the environment?", a: "A reserved range keeps every object belonging to one extension identifiable as a block, avoids collisions with other extensions' objects, and is what app.json's idRanges setting is actually for — the compiler and the publishing pipeline both rely on it to catch a numbering conflict before it reaches a shared environment." },
      exercise: "Before writing any AL: create (or open) app.json for the rental project, set idRanges to cover 78600–78649, and write down — in a comment at the top of your workspace notes — the exact caption prefix you'll use for every object ('Rental ...'). You'll reuse both decisions in every lesson that follows; changing them later means renaming objects you've already built."
    },
    {
      id: "hands-02-table", group: "objects", n: "02", title: "Table: RentalEquipment (78601)",
      dur: "20 min read",
      summary: "The object every other layer of this project depends on: what it stores, which properties matter on day one, and which triggers you'll actually write code in.",
      concepts: [
        { h: "What it is", p: "A table is the primary database object: structured business data behind a unique primary key, with as many fields as the business needs. Every other AL object in this project ultimately reads from or writes to a table." },
        { h: "Why it matters", p: "Tables are the foundation everything else is built on — customers, items, transactions, and in this project, rental equipment. A page can't display data that doesn't live in a table first, and a codeunit has nothing to validate without one." },
        { h: "When to use it", p: "Create a table when you need persistent storage for business data that will be queried, updated, and reported on over time. If the data only exists for the duration of one process (a working buffer, an intermediate calculation), a temporary record or a different pattern is usually the better fit — but that's outside what this table is for." },
        { h: "Table properties worth setting deliberately", p: "`Caption` is what users see for the table ('Rental Equipment'). `DataCaptionFields` controls which fields show to the left of that caption on pages that display this table's content. `DataPerCompany` defaults to `true` (company-specific data) — flip it to `false` only for data genuinely shared across companies. `DrillDownPageID` and `LookupPageID` set which page opens when a user drills down or looks up a record from elsewhere. `Permissions` declares extra permissions the object needs beyond the default. `TableType` stays `Normal` unless you're pointing at CRM, an external SQL table, or Microsoft Graph." },
        { h: "Triggers you'll actually use", p: "`OnInsert()` runs when a new record is inserted — the place to set defaults. `OnModify()` runs on every change — the place to re-validate. `OnDelete()` runs before deletion — the place to block it if conditions aren't met. `OnValidate()` runs per field when its value changes — most of your business-rule code lives here. The less common ones — `OnRename()`, `OnLookup()`, `OnDrillDown()`, `OnAssistEdit()` — matter once you need key renaming, a custom lookup page, drill-down navigation, or an auto-generated document number respectively." },
        { h: "In the rental project", p: "RentalEquipment (table 78601) stores No., Description, Equipment Type (the enum built in the next lesson), Daily Rental Price, Available (a status flag), and Last Maintenance Date, with a secondary key on Equipment Type." }
      ],
      why: "A weak primary key or a missing secondary key doesn't show up in testing with ten rows — it shows up as a slow equipment list once the table holds a few thousand rows and the rental-manager view filters by Equipment Type on every load. Getting the keys right at table-design time is far cheaper than adding an index after the page is already built and users are complaining.",
      check: { q: "Why does RentalEquipment need a secondary key on Equipment Type, given the primary key is already No.?", a: "The primary key (No.) is what makes each row unique, but it doesn't help BC find or sort records by Equipment Type efficiently. Any page or report that lists, filters, or groups equipment by type — which this project does repeatedly, in the list page and the availability report — benefits from a secondary key built on that field instead of scanning the whole table in primary-key order." },
      exercise: "Use the ttable snippet to scaffold table 78601 RentalEquipment. Add the fields named above with correct data types (No.: Code, Description: Text, Equipment Type: Enum \"Equipment Type\", Daily Rental Price: Decimal, Available: Boolean, Last Maintenance Date: Date), set the primary key on No., add a secondary key on Equipment Type, and compile with zero errors and zero warnings before moving on.",
      code: "table 78601 \"Rental Equipment\"\n{\n    Caption = 'Rental Equipment';\n    DataClassification = CustomerContent;\n\n    fields\n    {\n        field(1; \"No.\"; Code[20]) { Caption = 'No.'; }\n        field(2; Description; Text[100]) { Caption = 'Description'; }\n        field(3; \"Equipment Type\"; Enum \"Equipment Type\") { Caption = 'Equipment Type'; }\n        field(4; \"Daily Rental Price\"; Decimal) { Caption = 'Daily Rental Price'; MinValue = 0; }\n        field(5; Available; Boolean) { Caption = 'Available'; }\n        field(6; \"Last Maintenance Date\"; Date) { Caption = 'Last Maintenance Date'; }\n    }\n\n    keys\n    {\n        key(PK; \"No.\") { Clustered = true; }\n        key(TypeKey; \"Equipment Type\") { }\n    }\n}"
    },
    {
      id: "hands-02-enum", group: "objects", n: "03", title: "Enum: EquipmentType (78602)",
      dur: "15 min read",
      summary: "A closed, dropdown-safe list of equipment categories, and why the table from the previous lesson can only ever hold one of four known values.",
      concepts: [
        { h: "What it is", p: "An enum (enumeration) is a restricted list of predefined constant values — a closed set the compiler and the database both understand, rather than open text a user could type anything into. Each value in the list gets both an internal numeric ID and a caption shown to the user, and a field typed as an enum can only ever hold one of the declared values." },
        { h: "Why it matters", p: "Enums buy type safety at the field level: a Text field for 'Equipment Type' lets someone type 'Projecter' with a typo, or 'projector' in lowercase, or leave it blank, and none of those mistakes surface until a report or filter silently misses the row. An enum field can't hold anything except the values you declared, and the client renders it as a dropdown, so the choice is made instead of typed." },
        { h: "When to use it", p: "Reach for an enum whenever a field's legitimate values form a fixed, known set: equipment types, statuses, payment methods, classifications. If the list of valid values is open-ended, user-editable, or grows with business data (customer names, item numbers), a table with a lookup relationship is the right tool instead — an enum is for closed lists, not master data." },
        { h: "Extensible, and why that flag matters more than it looks", p: "Marking an enum `Extensible = true` is what lets a different extension add its own values later without touching your object — the same non-destructive pattern table extensions use for fields. Leave an enum non-extensible only when you deliberately want to prevent anyone, including your own project later, from adding a fifth equipment type without editing this object directly." },
        { h: "Best practices", p: "Assign numeric values deliberately, not just in whatever order occurs to you first — the dropdown lists values by ID order, not declaration order, so plan the sequence to read well. Always set a `Caption` per value; the name is what your code refers to, the caption is what the user sees, and the two should not be assumed to be the same string." },
        { h: "In the rental project", p: "EquipmentType (enum 78602) declares four values: Projector (0), Laptop (1), Tablet (2), and Audio Kit (3). Table 78601's Equipment Type field, built in the previous lesson, is typed as `Enum \"Equipment Type\"` — which is the only reason a rental manager sees a dropdown of exactly those four choices instead of a free-text box." }
      ],
      why: "A free-text 'Equipment Type' field looks fine in a demo with five rows typed by the person who built the table. It breaks quietly once three different people are entering equipment and each spells or capitalizes the category slightly differently — the availability report built later in this series groups by this field, and a typo splits one category into two silent buckets that don't sum right.",
      check: { q: "Table 78601 could have stored Equipment Type as a Text field with validation logic in OnValidate instead of an enum. What does the enum give you that hand-written validation doesn't?", a: "A closed set enforced by the compiler and rendered as a dropdown automatically — no OnValidate code has to run to reject a bad value, because an invalid value can't be assigned to an enum-typed field in the first place. Hand-written Text validation only catches what the validation code happens to check for; the enum makes invalid values structurally impossible." },
      exercise: "Use the tenum snippet to scaffold enum 78602 EquipmentType. Replace the three placeholder values with Projector (0), Laptop (1), Tablet (2), and Audio Kit (3), give each a Caption, leave Extensible = true, then go back to table 78601's Equipment Type field from the previous lesson and confirm it's typed as Enum \"Equipment Type\" — compile both and open the table's page to see the dropdown.",
      code: "enum 78602 \"Equipment Type\"\n{\n    Extensible = true;\n\n    value(0; Projector)\n    {\n        Caption = 'Projector';\n    }\n    value(1; Laptop)\n    {\n        Caption = 'Laptop';\n    }\n    value(2; Tablet)\n    {\n        Caption = 'Tablet';\n    }\n    value(3; \"Audio Kit\")\n    {\n        Caption = 'Audio Kit';\n    }\n}"
    },
    {
      id: "hands-02-page", group: "objects", n: "04", title: "Page: RentalEquipmentList, Card & FactBox (78603–78605)",
      dur: "22 min read",
      summary: "The three page types working together on the same table: a List for bulk viewing, a Card for detail editing, and a FactBox for related-data context.",
      concepts: [
        { h: "What it is", p: "A page is the user interface object that displays and allows editing of table data. Business Central defines several page types for this, but three cover almost every case: List (an overview of many records), Card (detail editing of one record), and FactBox (related data shown alongside another page)." },
        { h: "Why it matters", p: "Users interact through pages, never through tables directly. Good page design — the right controls bound to the right fields, sensible actions, sensible sorting — is what makes data entry fast instead of frustrating; bad page design doesn't break anything technically, it just makes every user slower." },
        { h: "When to use each type", p: "List page for bulk viewing and light editing across many records at once. Card page for detailed editing of a single record, field by field. FactBox for surfacing related information — related records, calculated context — next to whatever the user is currently looking at, without navigating away." },
        { h: "Page properties worth setting deliberately", p: "`DataCaptionFields` is good practice on list pages (e.g. show No. and Name in the caption). `DelayedInsert` helps on list pages where you don't want a blank row committed the instant a user starts a new line. `DeleteAllowed` and `InsertAllowed` default to allowing both — set either to `false` deliberately when a page should be view-only for that operation. `Editable` controls whether the page allows changes at all. `Extensible` is usually left `true` so other extensions can add to your page later the same way you'll add to Microsoft's." },
        { h: "Page triggers, the ones you'll hit first", p: "`OnOpenPage` runs when the page opens, right after `OnInit` — the place to preset filters. `OnAfterGetRecord` runs after every record is retrieved, useful for calculating display-only values per row. `OnNewRecord` fires when a new record is being created; `OnInsertRecord`, `OnModifyRecord`, and `OnDeleteRecord` fire around the corresponding data changes. `OnQueryClosePage` runs before the page closes and can cancel the close — useful for a 'you have unsaved changes' style check. The full trigger set is larger (it also covers background-task completion and error handling), but these cover the everyday cases." },
        { h: "In the rental project", p: "RentalEquipmentList (78603) is the List page, RentalEquipmentCard (78604) is the Card page, and RentalEquipmentFactBox (78605) is the FactBox — together they give a full data-editing experience over the RentalEquipment table from the previous lesson." }
      ],
      why: "Binding a FactBox to the wrong context, or building a Card page with no clear source table relationship, doesn't fail at compile time — it fails at the moment a rental manager opens the equipment card expecting to see availability and maintenance history right there, and instead has to navigate away to find it. Page design decisions are invisible in code review and very visible in daily use.",
      check: { q: "Why does the rental project need three separate pages (List, Card, FactBox) instead of one page that does everything?", a: "Each page type is optimized for a different task: the List page is for scanning and bulk operations across many equipment records, the Card page is for focused single-record editing, and the FactBox surfaces related context without forcing navigation away from whatever page the user is already on. Collapsing them into one page would make all three tasks worse at once." },
      exercise: "Use the tpage snippet three times: build RentalEquipmentList as a List page with SourceTable \"Rental Equipment\", build RentalEquipmentCard as a Card page on the same table, and add an action on the List page that opens the Card. Then build RentalEquipmentFactBox and place it on the Card page so maintenance date and availability are visible without opening another page.",
      code: "page 78603 \"Rental Equipment List\"\n{\n    PageType = List;\n    SourceTable = \"Rental Equipment\";\n    CardPageId = \"Rental Equipment Card\";\n    UsageCategory = Lists;\n    ApplicationArea = All;\n\n    layout\n    {\n        area(Content)\n        {\n            repeater(General)\n            {\n                field(\"No.\"; Rec.\"No.\") { ApplicationArea = All; }\n                field(Description; Rec.Description) { ApplicationArea = All; }\n                field(\"Equipment Type\"; Rec.\"Equipment Type\") { ApplicationArea = All; }\n                field(Available; Rec.Available) { ApplicationArea = All; }\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-03-tableext", group: "extensions", n: "05", title: "Table Extension: Item.Rental & Customer.Rental (78606)",
      dur: "18 min read",
      summary: "Attaching rental-specific data to the standard Item and Customer tables without ever opening either original object.",
      concepts: [
        { h: "What it is", p: "A table extension adds new fields — and a few other elements — to an existing table without replacing or modifying the original object. The base table (Item, Customer, or one of your own) stays exactly as Microsoft or the original author shipped it; your fields live in a separate object that layers on top." },
        { h: "Why it matters", p: "Standard Business Central tables like Item and Customer already carry everything the base application needs, and neither one has a 'rental' concept. A table extension is the only way to attach rental-specific data to those standard records without forking the base table — forking it would mean losing every future Microsoft update to Item or Customer the moment you touch the original object." },
        { h: "When to use it", p: "Use a table extension whenever the data you need to store belongs conceptually to a standard table — a Boolean flag on Item, a discount percentage on Customer — rather than a wholly new entity. If what you're storing doesn't already have a natural home on an existing table, a new table (like RentalEquipment itself) is the right object instead." },
        { h: "What you can — and cannot — extend", p: "A table extension can add new fields, using IDs from your own object range (`field(78620; \"Is Rental Equipment\"; Boolean)`), add secondary keys including ones built on your new fields, push your fields into existing DropDown or Brick fieldgroups with `addlast(Brick; ...)`, add OnInsert/OnModify/OnDelete/OnRename trigger logic, and add procedures callable on the extended record. What you can never do is delete a standard field or change its type — if a standard field genuinely doesn't fit anymore, the answer is adding your own replacement field and marking it obsolete later, not editing the original." },
        { h: "Best practices", p: "Assign field IDs from your reserved range so two extensions adding fields to the same standard table can never collide. Give every added field a Caption users will actually understand in context — 'Is Rental Equipment' reads fine on a rental-focused card, but only because the field name says exactly what it does. Keep validation on the new field where it belongs — in the field's own OnValidate trigger inside the extension, not scattered into pages that happen to display it." },
        { h: "In the rental project", p: "Item.Rental (table extension 78606) adds an 'Is Rental Equipment' Boolean to the standard Item table, so any item can be flagged as rentable without a new table. Customer.Rental adds 'Is Rental Customer' Boolean and 'Rental Discount %' Decimal to the standard Customer table — the discount field is what the capstone's pricing codeunit later reads to reduce a contract's total. The source material gives 78606 as the ID for the Item extension but doesn't state a separate ID for the Customer extension — reserve the next free number in your own range rather than guessing at one." }
      ],
      why: "Editing Item or Customer directly to add a rental flag would compile and work in the sandbox — right up until the next Business Central update ships a modified base Item table and the merge either fails outright or silently drops your change. A table extension survives every base-application update because it was never part of the base object to begin with.",
      check: { q: "Why can a table extension add a new field to Item but not change the data type of an existing standard field like 'Unit Price'?", a: "Because every other extension and every part of the base application already assumes Unit Price's declared type — changing it out from under them would silently break code nobody involved in this extension wrote or can see. Table extensions are additive by design; anything destructive to the original object is exactly what they're built to prevent." },
      exercise: "Use the ttableext snippet twice: build Item.Rental (table extension 78606, extends Item) adding an 'Is Rental Equipment' Boolean field at ID 78620, and build a Customer.Rental extension (pick your own next free ID) extending Customer with 'Is Rental Customer' (Boolean) and 'Rental Discount %' (Decimal, MinValue 0, MaxValue 100). Compile both and confirm the new fields appear on the standard Item and Customer tables without the original objects showing as modified in source control.",
      code: "tableextension 78606 \"Item Rental\" extends Item\n{\n    fields\n    {\n        field(78620; \"Is Rental Equipment\"; Boolean)\n        {\n            Caption = 'Is Rental Equipment';\n        }\n    }\n}"
    },
    {
      id: "hands-03-pageext", group: "extensions", n: "06", title: "Page Extension: ItemCard & DocumentAttachmentDet (78607, 78625)",
      dur: "18 min read",
      summary: "Surfacing the fields from the previous lesson's table extensions on the standard Item Card, and adding one action to a standard attachment page.",
      concepts: [
        { h: "What it is", p: "A page extension modifies an existing page — adding fields, groups, actions, or FactBoxes — without replacing the original object. Like a table extension, it layers changes on top; the standard page it targets is never opened or edited directly." },
        { h: "Why it matters", p: "The fields added by Item.Rental and Customer.Rental in the previous lesson are invisible to users until something puts them on a page. Editing the standard Item Card or Customer Card directly to show them would carry the same upgrade risk as editing the standard table — a page extension is the non-destructive way to surface new data on an existing screen." },
        { h: "When to use it", p: "Use a page extension whenever you need to expose new fields, add an action, or attach a FactBox to a page Microsoft or another team already owns — the Item Card, Customer Card, a Sales Order. If the screen doesn't exist yet at all, that's a new page (as built in Module 2), not an extension of one." },
        { h: "Layout modifiers", p: "Placement on a page extension is controlled by anchors: `addfirst(anchor)` and `addlast(anchor)` put new controls at the start or end of an existing group or area, `addafter(control)` and `addbefore(control)` position them relative to a specific existing control, and `movefirst`/`movelast`/`moveafter`/`movebefore` reposition controls that already exist rather than adding new ones. `modify(control)` changes a property — visibility, for instance — on a control that's already there. The same anchors apply inside `actions { }` for adding actions and promoted groups, not just inside `layout { }`." },
        { h: "Best practices", p: "Wrap related added fields in their own group rather than scattering them loose into an existing one — it keeps your addition visually identifiable as a block on the card. Keep each extension focused on one page's worth of changes; a page extension that reaches into unrelated concerns is harder to review and harder to remove cleanly if the feature is ever retired." },
        { h: "In the rental project", p: "The ItemCard extension (78607) adds a rental group containing the 'Is Rental Equipment' field plus a FactBox, onto the standard Item Card. DocumentAttachmentDet (78625) adds a 'View PDF' action onto the standard document attachment details page." }
      ],
      why: "A page extension that dumps a new field loose into an existing group, with no caption context and no visual grouping, technically works but reads as if Microsoft's own team put it there half-finished — the giveaway that undermines trust in the whole extension is almost always a page-extension detail, not a data-model one.",
      check: { q: "The rental team wants the new 'Is Rental Equipment' field to appear directly after the standard 'Type' field on the Item Card, not at the end of the group. Which anchor do you use?", a: "addafter(Type) — it inserts the new control directly after the named existing control, rather than addlast which would put it at the end of the group regardless of where Type happens to sit." },
      exercise: "Use the tpageext snippet to build the ItemCard extension (78607, extends Item Card): add a group containing the 'Is Rental Equipment' field from the previous lesson, placed with addafter() next to a logical existing field, and attach a FactBox showing rental status. Then build a second, separate page extension on the Document Attachment Details page (78625) adding a 'View PDF' promoted action.",
      code: "pageextension 78607 \"Item Card Rental\" extends \"Item Card\"\n{\n    layout\n    {\n        addafter(Type)\n        {\n            group(Rental)\n            {\n                Caption = 'Rental';\n                field(\"Is Rental Equipment\"; Rec.\"Is Rental Equipment\")\n                {\n                    ApplicationArea = All;\n                }\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-03-codeunit", group: "extensions", n: "07", title: "Codeunit: RentalManagement & RentalProcess (78609, 78618)",
      dur: "22 min read",
      summary: "Where the project's business rules actually live: individual building-block procedures in one codeunit, combined into a single workflow in another.",
      concepts: [
        { h: "What it is", p: "A codeunit is a reusable container for business-logic procedures — a library of functions implementing calculations, validations, and multi-step operations, with no user interface of its own. It's the object type almost everything else in a project ends up calling into." },
        { h: "Why it matters", p: "Logic that lives only inside a page's trigger code can only ever be reused by that page. The same pricing calculation, availability check, or validation rule is often needed from a page, a report, and another codeunit — writing it once in a codeunit and calling it from all three is the difference between one function to fix and three near-identical copies to keep in sync." },
        { h: "When to use it", p: "Reach for a codeunit for calculations, validations, or processes reused across more than one page or report, and for any workflow complex enough that it shouldn't live inline in a trigger. A single one-off calculation used in exactly one place doesn't necessarily need its own codeunit — but the moment a second caller shows up, it usually should move into one." },
        { h: "Codeunit properties worth setting deliberately", p: "`Subtype` marks the codeunit's special role — Normal by default, or Test/TestRunner/Install/Upgrade for the codeunits that run during specific lifecycle events. `SingleInstance` keeps one instance of the codeunit alive for the whole session so its global variables persist between calls, instead of the default where every call gets a fresh instance. `TableNo` binds a table to the codeunit so its `OnRun` trigger receives a record of that type automatically. `Access` controls whether other extensions can call the codeunit at all (Public by default, or Internal/Local to keep it project-private). `Permissions` and `InherentPermissions` grant the extra access the codeunit's own logic needs to run, independent of what permission set the calling user holds." },
        { h: "Triggers and events", p: "`trigger OnRun()` is the entry point invoked by `Codeunit.Run()` — the natural home for a process that has one clear starting point. `[EventSubscriber]` reacts when an event raised elsewhere fires; `[IntegrationEvent]` and `[BusinessEvent]` are how a codeunit declares its own events for other code — or other applications — to subscribe to, `[InternalEvent]` the same but restricted to your own app. `[TryFunction]` lets a call fail without stopping its caller, which is what makes 'try to parse this value, and handle a bad one gracefully' possible. `[NonDebuggable]` hides a method's body from the debugger for secrets and tokens, and `[Obsolete('message', 'version')]` marks a method as deprecated with a message pointing at its replacement, before it's eventually removed." },
        { h: "Best practices", p: "Expose what other objects need to call as public procedures, and keep everything that's purely internal implementation as local — a smaller public surface is easier to keep stable across versions. Take parameters and return values explicitly rather than reading and writing global state where a function call would do, so the procedure's behavior is visible from its signature alone." },
        { h: "In the rental project", p: "RentalManagement (codeunit 78609) holds the individual building blocks — CheckAvailability(), CalculateRentalPrice(), MarkEquipmentUnavailable() — as procedures other objects can call independently. RentalProcess (codeunit 78618) combines them into one RentEquipment() workflow, calling RentalManagement's procedures in sequence rather than reimplementing any of their logic." }
      ],
      why: "Splitting RentalManagement and RentalProcess into two codeunits instead of one large one isn't a stylistic choice — it means CheckAvailability() and CalculateRentalPrice() stay independently callable from a page, a report, or a future feature that only needs the availability check and nothing else about the full rental workflow. Collapsing both into one codeunit would work today and quietly force every future caller to depend on the whole workflow just to reuse one piece of it.",
      check: { q: "RentalProcess's RentEquipment() calls RentalManagement's CheckAvailability() and CalculateRentalPrice() rather than reimplementing that logic itself. What would go wrong if RentEquipment() had its own separate copy of the availability check instead?", a: "The two copies would drift — a bug fix or a rule change made to CheckAvailability() in RentalManagement wouldn't automatically apply to RentEquipment()'s private copy, so the workflow codeunit could end up renting out equipment the standalone check would have correctly refused. Calling the shared procedure is what keeps both callers using the same rule." },
      exercise: "Use the tcodeunit snippet to scaffold codeunit 78609 RentalManagement with three public procedures: CheckAvailability(EquipmentNo: Code[20]): Boolean, CalculateRentalPrice(EquipmentNo: Code[20]; Days: Integer): Decimal, and MarkEquipmentUnavailable(EquipmentNo: Code[20]). Then scaffold codeunit 78618 RentalProcess with one public procedure, RentEquipment(), that calls all three RentalManagement procedures in sequence rather than duplicating their logic.",
      code: "codeunit 78609 \"Rental Management\"\n{\n    procedure CheckAvailability(EquipmentNo: Code[20]): Boolean\n    var\n        RentalEquipment: Record \"Rental Equipment\";\n    begin\n        if RentalEquipment.Get(EquipmentNo) then\n            exit(RentalEquipment.Available);\n        exit(false);\n    end;\n\n    procedure CalculateRentalPrice(EquipmentNo: Code[20]; Days: Integer): Decimal\n    var\n        RentalEquipment: Record \"Rental Equipment\";\n    begin\n        RentalEquipment.Get(EquipmentNo);\n        exit(RentalEquipment.\"Daily Rental Price\" * Days);\n    end;\n\n    procedure MarkEquipmentUnavailable(EquipmentNo: Code[20])\n    var\n        RentalEquipment: Record \"Rental Equipment\";\n    begin\n        RentalEquipment.Get(EquipmentNo);\n        RentalEquipment.Available := false;\n        RentalEquipment.Modify();\n    end;\n}"
    },
    {
      id: "hands-04-report", group: "reporting", n: "08", title: "Report: EquipmentAvailability (78610)",
      dur: "22 min read",
      summary: "Turning raw equipment rows into a formatted, groupable view of what's available by type — for a manager on screen and a customer on paper.",
      concepts: [
        { h: "What it is", p: "A report is a document object that summarizes business data for printing or export, with its own filtering, sorting, and formatted layout. Unlike a page, its job is presenting a snapshot of data as output, not letting a user edit records live." },
        { h: "Why it matters", p: "Reports are how raw table data becomes something a manager or a customer can actually act on — aggregated, sorted, formatted. Without a report object, 'how much equipment is available by type' means someone opening the equipment list page and counting rows by eye." },
        { h: "When to use it", p: "Use a report for management summaries, operational metrics, regulatory output, statements, or any data export — anything where the point is a formatted, often printable or exportable, view of aggregated or filtered data rather than an editable screen." },
        { h: "Report properties worth setting deliberately", p: "`Caption` is the name users see searching for the report and on its request page. `UsageCategory` decides where it surfaces in Tell Me — ReportsAndAnalysis, Documents, Tasks, Lists, or History. `ApplicationArea` gates which application areas can even see it exists. `DefaultLayout` picks which rendering format applies when the user doesn't choose one explicitly — RDLC, Word, or Excel — and `RDLCLayout`/`WordLayout` point at the actual layout file shipped inside the extension. `ProcessingOnly` runs the report's logic without producing a printed document at all, which is the pattern for data fixes and posting routines that happen to be built as reports. `ShowPrintStatus` toggles the progress dialog while it runs." },
        { h: "Report triggers", p: "At the report level, `OnInitReport()` runs once before anything else — the place to set defaults — `OnPreReport()` runs after the request page but before any data is read, and `OnPostReport()` runs after every record has been processed, for cleanup and final messages. At the data-item level, `OnPreDataItem()` runs before the first record and is where filters get applied, `OnAfterGetRecord()` runs for every record read and is where per-row calculations and running totals happen, and `OnPostDataItem()` runs once after the last record of that data item. On the request page itself, `OnOpenPage()` presets filters when it opens, and `OnQueryClosePage()` runs before it closes and can validate what the user typed." },
        { h: "Best practices", p: "Source the report's data from tables or, for anything that needs aggregation across records, from a query instead of hand-rolling the aggregation in AL. Add columns and expressions deliberately rather than dumping every field, apply sorting that matches how the report will actually be read, and format numbers and dates for the audience — a customer-facing report and an internal audit report don't need the same precision." },
        { h: "In the rental project", p: "EquipmentAvailability (report 78610) shows rental status by equipment type, formatted for both management review and customer communication — meaning its layout has to read cleanly whether it's opened inside BC or exported and handed to someone outside it." }
      ],
      why: "A report with ProcessingOnly left at its default (false) but no real layout behind it either fails confusingly or produces a blank document — the property exists precisely so a data-fix report and a printable report don't get confused with each other. Getting UsageCategory and ApplicationArea wrong doesn't break the report technically; it just makes it invisible to the users who need to find it in Tell Me.",
      check: { q: "EquipmentAvailability needs to group rows by Equipment Type and show each type's availability count. Which trigger is the right place to accumulate that count, and why not OnPostDataItem()?", a: "OnAfterGetRecord() — it runs once per record read, which is exactly when you'd increment a running counter for that record's type. OnPostDataItem() only runs once, after the entire data item has finished, so it's the right place to do something with a finished total, not to build one up record by record." },
      exercise: "Use the treport snippet to scaffold report 78610 EquipmentAvailability with UsageCategory = ReportsAndAnalysis, ApplicationArea = All, and a dataitem on Rental Equipment. Add columns for No., Description, Equipment Type, and Available, sorted by Equipment Type, and set DefaultLayout to RDLC with a layout file that groups rows visually by type.",
      code: "report 78610 \"Equipment Availability\"\n{\n    UsageCategory = ReportsAndAnalysis;\n    ApplicationArea = All;\n    DefaultLayout = RDLC;\n    RDLCLayout = './Layouts/EquipmentAvailability.rdl';\n\n    dataset\n    {\n        dataitem(Equipment; \"Rental Equipment\")\n        {\n            RequestFilterFields = \"Equipment Type\", Available;\n\n            column(No_; \"No.\") { }\n            column(Description; Description) { }\n            column(EquipmentType; \"Equipment Type\") { }\n            column(IsAvailable; Available) { }\n\n            trigger OnAfterGetRecord()\n            begin\n                // per-row totals by Equipment Type accumulate here\n            end;\n        }\n    }\n\n    requestpage\n    {\n        layout { area(Content) { } }\n    }\n}"
    },
    {
      id: "hands-04-reportext", group: "reporting", n: "09", title: "Report Extension: CustomerList (78611)",
      dur: "16 min read",
      summary: "Adding two rental-specific columns to the standard Customer List report, instead of maintaining a second report that drifts from the original.",
      concepts: [
        { h: "What it is", p: "A report extension adds columns — and optionally request-page controls or an extra layout — to an existing standard report, the same non-destructive pattern table and page extensions use, applied to reports." },
        { h: "Why it matters", p: "Building a whole duplicate report just to add two rental-specific columns to the standard Customer List means maintaining two reports that drift apart over time, and users have to know which one to run. A report extension adds exactly the new columns and leaves everything else about the standard report — including future Microsoft improvements to it — intact." },
        { h: "When to use it", p: "Use a report extension when a standard report is 90% of what you need and the gap is a handful of additional columns or dimensions, not a fundamentally different report. If the shape of the output is genuinely different, a new report (as built in the previous lesson) is the better fit." },
        { h: "Structure", p: "A report extension needs a `dataset` section to hang new columns on — that's the one required piece. Inside it, `add(DataItemName) { column(...) { } }` attaches a new column to an existing data item in the target report by name. The `requestpage` section, for adding filters or controls to the request page, and the `rendering` section, for registering an additional layout, are both optional. Unlike table, page, and enum extensions, this deck doesn't name a dedicated VS Code snippet for report extensions — you build the object by typing `reportextension` by hand, using this structure as the template." },
        { h: "Best practices", p: "Use addlast() to append new columns to the dataset rather than trying to reposition existing ones — the goal is additive, not a redesign. Keep additions relevant to what the report already reports on, and test every rendering format the target report supports (Print, PDF, Excel) since a column that renders correctly in one format can still be misaligned in another." },
        { h: "In the rental project", p: "CustomerList (report extension 78611) adds a rental customer indicator and a discount percentage to the standard Customer List report's columns — both pulled from the Customer.Rental table extension built earlier, so a manager running the standard, familiar Customer List report also sees which customers rent equipment and at what discount, without opening a second report." }
      ],
      why: "The rental discount percentage only became visible on a report because a table extension put the field on Customer and a report extension surfaced it — skip either half and the data exists but nobody running the standard Customer List ever sees it. Report extensions are the last mile that makes a table extension's new field actually useful outside a custom card.",
      check: { q: "CustomerList report extension adds a rental discount column. Where does that value actually come from — does the report extension calculate it?", a: "No — it comes from the 'Rental Discount %' field added to the standard Customer table by the Customer.Rental table extension. The report extension only adds a column that reads that existing field; it doesn't calculate or store anything new itself." },
      exercise: "Build the reportextension object by hand (no dedicated snippet is named for this object type in the source material) to extend the standard Customer List report with two new columns: a Boolean for 'Is Rental Customer' and a Decimal for 'Rental Discount %', both sourced from the Customer.Rental table extension. Run the standard report afterward and confirm both new columns appear without any other column changing.",
      code: "reportextension 78611 \"Customer List Rental\" extends \"Customer - List\"\n{\n    dataset\n    {\n        add(Customer)\n        {\n            column(IsRentalCustomer; \"Is Rental Customer\") { }\n            column(RentalDiscountPct; \"Rental Discount %\") { }\n        }\n    }\n}"
    },
    {
      id: "hands-04-xmlport", group: "reporting", n: "10", title: "XMLPort: ImportRentalEquipment (78613)",
      dur: "20 min read",
      summary: "Loading equipment from an external CSV into RentalEquipment, and rejecting bad rows instead of silently dropping them.",
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
        { h: "In the rental project", p: "ImportRentalEquipment (XMLport 78613) reads CSV equipment data, validates the No. field and the price fields, and rejects rows with negative prices rather than loading them — the rejection has to happen in OnBeforeInsertRecord(), before the bad row ever reaches the RentalEquipment table." }
      ],
      why: "An import that silently skips a malformed row instead of reporting it looks like a successful import that quietly lost data — the person running it sees '47 rows processed' with no way to know three of the fifty in the source file never made it in. Validating and reporting failures explicitly in OnBeforeInsertRecord() is what turns 'the import ran' into 'the import can be trusted.'",
      check: { q: "A CSV row for equipment import has a negative Daily Rental Price. In which trigger should that row be rejected, and why not wait until after the insert?", a: "OnBeforeInsertRecord() — rejecting it there stops the bad row before it's ever written to the RentalEquipment table. Waiting until OnAfterInsertRecord() means the invalid row has already been inserted, so 'rejecting' it at that point means detecting and then deleting a row that should never have been saved in the first place — worse, and riskier if anything else reacts to the insert in between." },
      exercise: "Use the txmlport snippet to scaffold XMLport 78613 ImportRentalEquipment with Direction = Import, Format = VariableText, and a table element on Rental Equipment. Map No., Description, Equipment Type, and Daily Rental Price as field elements, and add an OnBeforeInsertRecord trigger that checks Daily Rental Price >= 0 and raises an error naming the row's No. if it isn't. Test with a ten-row CSV that includes at least one negative price.",
      code: "xmlport 78613 \"Import Rental Equipment\"\n{\n    Direction = Import;\n    Format = VariableText;\n    FieldSeparator = ',';\n    UseRequestPage = false;\n\n    schema\n    {\n        textelement(RentalEquipmentList)\n        {\n            tableelement(Equipment; \"Rental Equipment\")\n            {\n                fieldelement(No_; Equipment.\"No.\") { }\n                fieldelement(Description; Equipment.Description) { }\n                fieldelement(EquipmentType; Equipment.\"Equipment Type\") { }\n                fieldelement(DailyRentalPrice; Equipment.\"Daily Rental Price\") { }\n\n                trigger OnBeforeInsertRecord()\n                begin\n                    if Equipment.\"Daily Rental Price\" < 0 then\n                        Error('Row %1: Daily Rental Price cannot be negative.', Equipment.\"No.\");\n                end;\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-04-query", group: "reporting", n: "11", title: "Query: RentalEquipmentSummary (78612)",
      dur: "20 min read",
      summary: "A read-only, set-based aggregate over RentalEquipment — item count and average price per type — without a single hand-written accumulation loop.",
      concepts: [
        { h: "What it is", p: "A query is a read-only object combining one or more tables with grouping, filtering, and aggregate calculations — the AL equivalent of a SQL SELECT with GROUP BY, expressed as an object instead of hand-written joins." },
        { h: "Why it matters", p: "Aggregating data with hand-written AL — looping a filtered record set and accumulating totals yourself — works, but a query does the same aggregation as a single set-based operation and is usually both less code and faster, especially once the table involved has real volume." },
        { h: "When to use it", p: "Use a query for aggregated views, KPIs, analytics, or any read-only presentation of summarized data across one or more tables. If you need to write to the data, or you need a single un-aggregated record, a query is the wrong tool — reach for a normal Record variable instead." },
        { h: "Query properties worth setting deliberately", p: "`Caption` names the query wherever it's surfaced to a user. `QueryType` is Normal by default, or API to publish the query as an OData endpoint instead — which is when `APIPublisher`, `APIGroup`, and `APIVersion` matter, since together they identify the endpoint. `OrderBy` sorts the result set on the columns you choose (`OrderBy = descending(AveragePrice);`), and `TopNumberOfRows` caps the result to only the first N rows, useful for a 'top 10' style view. `DataAccessIntent` lets the query run against a read-only database replica when one is available, which can reduce load on the primary database for a query that's run often." },
        { h: "Elements and methods", p: "`dataitem` declares a source table; `column` exposes one of its fields as a result column. `filter` declares a filter the caller can set at runtime rather than one baked into the query. When a query joins more than one dataitem, `DataItemLink` states the join condition and `SQLJoinType` picks the kind of join (InnerJoin, LeftOuterJoin, RightOuterJoin, CrossJoin). A column gets a `Method` — Sum, Count, Average, Min, Max — to turn it into an aggregate, and every non-aggregate column in the same query implicitly becomes the grouping. `ColumnFilter` filters on the aggregated result after grouping, the query equivalent of SQL's HAVING. In AL code, a query is walked with `Q.Open(); while Q.Read() do ...; Q.Close();`, the same read-loop pattern as a record's FindSet/Next." },
        { h: "Best practices", p: "Define only the data sources you actually need — every dataitem you add is a join the query has to execute. Add filters to cut the result set down before it's aggregated rather than after, keep only the columns you want to group on as non-aggregate, and add the aggregate methods (SUM, COUNT, AVG, MIN, MAX) deliberately rather than defaulting every numeric column to Sum." },
        { h: "In the rental project", p: "RentalEquipmentSummary (query 78612) groups by Equipment Type, counts how many items fall into each type, and calculates the average rental price per type — a single read-only aggregate a page, a report, or an API caller can all read from without any of them re-implementing the grouping logic." }
      ],
      why: "Doing this same Equipment-Type grouping by looping RentalEquipment in AL and accumulating counts and running averages by hand would take real code, would have to be re-tested every time the table's shape changes, and would still be slower than the query engine doing the aggregation in one set-based pass. The query object exists specifically so this kind of summary doesn't need custom loop code at all.",
      check: { q: "RentalEquipmentSummary groups by Equipment Type and shows a count and an average price per type. Which column gets a Method, and which doesn't?", a: "Equipment Type has no Method — it's the plain column the results group by. The count and the average price columns each get a Method (Count and Average respectively), which is what turns them from per-row values into per-group aggregates." },
      exercise: "Use the tquery snippet to scaffold query 78612 RentalEquipmentSummary with a dataitem on Rental Equipment. Add Equipment Type as a plain grouping column, a column with Method = Count for item count per type, and a column with Method = Average on Daily Rental Price. Open the query in AL with Q.Open()/Q.Read()/Q.Close() and print one line per equipment type to verify the grouping is correct.",
      code: "query 78612 \"Rental Equipment Summary\"\n{\n    QueryType = Normal;\n    Caption = 'Rental Equipment Summary';\n\n    elements\n    {\n        dataitem(Equipment; \"Rental Equipment\")\n        {\n            column(EquipmentType; \"Equipment Type\") { }\n\n            column(ItemCount; \"No.\")\n            {\n                Method = Count;\n            }\n            column(AveragePrice; \"Daily Rental Price\")\n            {\n                Method = Average;\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-05-rolecenter", group: "rolecenter", n: "12", title: "Role Center: Rental Manager RC (78614)",
      dur: "18 min read",
      summary: "The dashboard a rental manager actually lands on — ten defined sections, and which one to use for which kind of information.",
      concepts: [
        { h: "What it is", p: "The Role Center is the main dashboard a user lands on when they sign in — a personalized workspace showing the data, activities, and navigation tailored to their specific role, rather than a generic start page every user sees regardless of job." },
        { h: "Why it matters", p: "Centralizing the essential information for one role in one place is what turns 'log in, then go find the five pages I need' into 'log in, and everything I need today is already on screen.' The Role Center is often the only screen a role-specific user opens all day." },
        { h: "When to use it", p: "Build a Role Center whenever a group of users shares a job — Rental Manager, Warehouse Clerk — and needs a monitoring/navigation surface built around that job's KPIs and daily tasks, rather than the generic Business Manager or default role center every environment ships with." },
        { h: "Role Center sections", p: "A Role Center page is built from ten distinct sections, each with its own purpose: a Navigation Menu Area for menus and sub-menus into relevant entities, a Navigation Bar Area for quick links to frequently used or bookmarked pages, an Action Area for links to execute key tasks (pages, reports, codeunits), a Headline Area for dynamic business insights, a Wide Cue Area for key numerical indicators in a wide layout, a Data Cue Area for visualized aggregated KPIs, an Action Cue Area for actionable tiles tied to business tasks, a Chart Area for charts or Power BI reports, a CardPart/ListPart Area for embedded business data in card or list form, and a Control Add-in Area for custom HTML/JavaScript content." },
        { h: "Best practices", p: "Keep the Role Center simple and focused — show only the KPIs and actions that role actually needs day to day, not everything the underlying data could theoretically surface. Use cues and tiles for quick, at-a-glance insight rather than tables of numbers, and make sure the frequently used pages for that role are one click away." },
        { h: "In the rental project", p: "Rental Manager RC (page 78614) is the Role Center, paired with the Rental Manager profile from the next lesson, giving the rental team a dashboard tailored to managing rental operations, tracking activity, and reaching the equipment list, availability report, and rental workflow without navigating through generic BC menus first." }
      ],
      why: "A rental manager forced to use the default Business Manager Role Center sees KPIs and cues aimed at general business operations — none of them about equipment availability or active rentals — and has to navigate to find every rental-specific page manually, every single day. A purpose-built Role Center removes that daily navigation tax entirely.",
      check: { q: "The Rental Manager RC needs to show how many equipment items are currently unavailable, as a single glanceable number. Which of the ten Role Center sections is that, specifically?", a: "The Data Cue Area — it's built for visualizing aggregated business data (KPIs) like a count, as opposed to the Wide Cue Area (numerical indicators in a wide layout) or the Action Cue Area (actionable tiles tied to a task rather than a pure metric)." },
      exercise: "Use the tpagerolecenterwaldo snippet to scaffold page 78614 Rental Manager RC. Populate at minimum a Navigation Bar Area linking to the RentalEquipmentList and EquipmentAvailability report, and a Data Cue Area showing a count of equipment where Available = false. Leave the remaining sections empty for now — they get filled in as the project grows.",
      code: "page 78614 \"Rental Manager RC\"\n{\n    PageType = RoleCenter;\n    Caption = 'Rental Manager';\n\n    layout\n    {\n        area(RoleCenter)\n        {\n            // Navigation Menu Area / Navigation Bar Area\n        }\n    }\n\n    actions\n    {\n        area(Sections)\n        {\n            group(RentalOperations)\n            {\n                Caption = 'Rental Operations';\n                action(EquipmentList)\n                {\n                    Caption = 'Rental Equipment';\n                    ApplicationArea = All;\n                    RunObject = page \"Rental Equipment List\";\n                }\n                action(AvailabilityReport)\n                {\n                    Caption = 'Equipment Availability';\n                    ApplicationArea = All;\n                    RunObject = report \"Equipment Availability\";\n                }\n            }\n        }\n    }\n}"
    },
    {
      id: "hands-05-profile", group: "rolecenter", n: "13", title: "Profile: Rental Manager",
      dur: "16 min read",
      summary: "The named object with no ID that binds a group of users to the Role Center built for them — and to a customized version of the equipment list.",
      concepts: [
        { h: "What it is", p: "A profile is the AL object that defines a user role: it names the role, points at a Role Center page, and carries whatever page customizations that role should see. Unlike almost every other AL object type, a profile has no object ID — it's identified by its name." },
        { h: "Why it matters", p: "One Business Central environment serves many different jobs. Without profiles, every user would land on the same generic start page regardless of whether they're in sales, warehouse, or — in this project — rental operations. The profile is what connects a group of users to the Role Center built specifically for them." },
        { h: "When to use it", p: "Create a profile whenever a group of users shares a job and needs its own Role Center, its own default filters, or simplified pages — Rental Manager, Warehouse Clerk, any role distinct enough to deserve a tailored workspace rather than personalizing the default one by hand for each user." },
        { h: "Profile properties", p: "`Caption` is the role name users pick in My Settings. `ProfileDescription` is the longer explanatory text shown alongside it. `RoleCenter` points at the page this role opens on by default. `Customizations` lists the page customization objects applied automatically to anyone on this role. `Enabled` controls whether users are even allowed to select it, and `Promoted` puts it near the top of the role picker. And — worth repeating because it's unusual among AL objects — a profile carries no object ID at all; it's identified purely by its declared name." },
        { h: "Structure", p: "A profile itself carries no logic and no ID — everything it changes on a page lives in a separate `pagecustomization` object, referenced by name under `Customizations`. The pagecustomization object names the page it customizes (`customizes \"Rental Equipment List\"`) and, inside its own `layout` section, modifies existing controls — hiding a field with `modify(\"Last Maintenance Date\") { Visible = false; }`, for instance — the same modify-in-place pattern a page extension uses, but scoped to just this one role instead of applying to everyone." },
        { h: "Best practices", p: "Give the profile a clear Caption and ProfileDescription so an administrator assigning roles knows exactly what they're picking. Point RoleCenter at your own purpose-built page rather than reusing a generic one. Ship page customizations through the profile itself instead of asking every user on that role to personalize their own screen by hand — the profile-level customization is what every new hire on that role gets automatically, on day one." },
        { h: "In the rental project", p: "The Rental Manager profile points RoleCenter at page 78614 'Rental Manager RC,' and applies a pagecustomization that hides fields the rental team never uses on the day-to-day equipment list — Last Maintenance Date, for instance, which matters for planning but not for the daily rental workflow." }
      ],
      why: "Without the profile, page 78614 would compile and exist, but no user would ever land on it automatically — a Role Center page with nothing pointing a role at it is just an unreachable page. The profile is the one piece of wiring that turns a built dashboard into something a rental manager actually sees on login.",
      check: { q: "Why does a profile have no object ID, when almost every other AL object type — table, page, codeunit, even permission set — does?", a: "A profile is identified by its declared name rather than a number, because it isn't a data or logic container the way those objects are — it's a named binding between a role, a Role Center page, and a set of customizations. There's nothing else that would ever need to reference a profile by numeric ID the way code references a table or calls a codeunit." },
      exercise: "Define the Rental Manager profile with RoleCenter = \"Rental Manager RC\" (page 78614 from the previous lesson), a clear Caption and ProfileDescription, and Enabled = true. Then build one pagecustomization object targeting Rental Equipment List that hides the Last Maintenance Date field, and reference it under the profile's Customizations. Sign in as a test user, select the Rental Manager role in My Settings, and confirm both the Role Center and the hidden field take effect.",
      code: "profile \"Rental Manager\"\n{\n    Caption = 'Rental Manager';\n    ProfileDescription = 'Manages equipment rental operations';\n    RoleCenter = \"Rental Manager RC\";\n    Customizations = RentalEquipmentListCust;\n    Enabled = true;\n    Promoted = false;\n}\n\npagecustomization RentalEquipmentListCust customizes \"Rental Equipment List\"\n{\n    layout\n    {\n        modify(\"Last Maintenance Date\")\n        {\n            Visible = false;\n        }\n    }\n}"
    },
    {
      id: "hands-05-enumext", group: "rolecenter", n: "14", title: "Enum Extension: EquipmentType — Camera & Projector Screen (78620, 78621)",
      dur: "15 min read",
      summary: "Adding two more equipment categories to a Microsoft-adjacent-style enum without ever opening enum 78602 from Module 2.",
      concepts: [
        { h: "What it is", p: "An enum extension adds new values to an enum that already exists, without touching the original object — the same non-destructive pattern a table extension applies to tables, applied to enums instead." },
        { h: "Why it matters", p: "The enum you need to extend is often owned by Microsoft, or by another team's extension entirely — you may not even be allowed to modify it directly. An enum extension adds your values while leaving the original object, and everyone else's ability to update it safely, completely intact." },
        { h: "When to use it", p: "Use an enum extension when a standard or third-party enum is missing an option your business genuinely needs — a category, a status, a type — rather than duplicating the whole enum with your values added in, which would fragment every field and every piece of logic already built around the original." },
        { h: "Rules to respect", p: "The target enum has to declare `Extensible = true` — you can't extend one that doesn't allow it. Every value ID you add has to come from your own reserved object range, because two different apps adding the same numeric ID to the same enum can't coexist. Values only ever get added, never removed — removing one would break any record that already stored it, so an obsolete value gets marked Obsolete on the original rather than deleted. The value's name is what your AL code refers to; its Caption is what the user actually reads, and the two aren't required to match. The dropdown lists values by numeric ID order, not by the order they were declared, so plan IDs with the final list in mind. And you can only declare one enumextension per enum per app — all your new values for a given enum belong in a single object, not spread across several." },
        { h: "Best practices", p: "Confirm Extensible = true on the target before starting — if it isn't set, extending that enum isn't an option at all, no matter how badly you need the extra value. Take every value ID from your reserved range, and set a Caption on every value you add, the same as you would on a value in an enum you own outright." },
        { h: "In the rental project", p: "An extension of EquipmentType (78602) adds Camera (value 78620) and Projector Screen (value 78621), so the enum's original four values — Projector, Laptop, Tablet, Audio Kit — stay exactly as declared in Module 2, and enum 78602 itself is never opened or edited to add these two. The source material states the value IDs but doesn't give the enumextension object's own ID — reserve one from your own range." }
      ],
      why: "EquipmentType was marked Extensible = true back in Module 2 for exactly this reason — a rental company's equipment catalogue grows over time, and the alternative to an enum extension would be editing enum 78602 directly every time a new category shows up, which defeats the entire point of having chosen an extensible enum in the first place.",
      check: { q: "The enum extension adds Camera at value ID 78620 and Projector Screen at 78621 — IDs from the rental project's own object range, not from wherever the base EquipmentType enum's four values (0–3) happen to sit. Why does that matter?", a: "Because two different extensions adding values to the same target enum need their IDs to never collide — if this project's Camera and some other extension's added value both claimed ID 78620, the two couldn't be installed together. Reserving IDs from your own range, separate from the target enum's original 0–3 range, is what keeps that collision impossible by construction." },
      exercise: "Use the tenumext snippet to build an enum extension on EquipmentType (78602) adding Camera at value 78620 and Projector Screen at value 78621, each with a Caption. Confirm EquipmentType still declares Extensible = true from Module 2, compile, and open the RentalEquipmentCard page from Module 2 to confirm both new values now appear in the Equipment Type dropdown alongside the original four.",
      code: "enumextension 78622 \"Equipment Type Ext\" extends \"Equipment Type\" // object ID not stated in source material -- pick the next free number in your own range\n{\n    value(78620; Camera)\n    {\n        Caption = 'Camera';\n    }\n    value(78621; \"Projector Screen\")\n    {\n        Caption = 'Projector Screen';\n    }\n}"
    },
    {
      id: "hands-05-permissionset", group: "rolecenter", n: "15", title: "Permission Set: Rental Full & Rental Read",
      dur: "18 min read",
      summary: "Without this object, every table, page, codeunit, report, query, and XMLport built so far only works for the one SUPER user testing it.",
      concepts: [
        { h: "What it is", p: "A permission set is the AL object listing exactly what a user may read, insert, modify, delete, or execute on each object an extension ships — the access-control layer that sits on top of everything else built in this series." },
        { h: "Why it matters", p: "Business Central blocks any object a user has no permission for, full stop. Every table, page, codeunit, report, query, and XMLport built across this whole series is invisible or unusable to anyone who isn't SUPER until a permission set explicitly grants access to it — this isn't an edge case, it's the default." },
        { h: "When to use it", p: "Every extension needs at least one permission set, no exceptions. Add more than one when different roles need different levels of access to the same objects — a full-access set for the team that manages the data, and a read-only set for people who only need to consult it." },
        { h: "Letters and properties", p: "The access letters map directly to CRUD plus execution: R for read (open and view records), I for insert (create new ones), M for modify (change existing ones), D for delete (remove them), and X for execute — running a codeunit, report, query, or XMLport rather than reading/writing table data. `Assignable = true` marks a permission set an administrator can actually hand out to a user; leave it false on a set meant only to be pulled into other sets. `IncludedPermissionSets` pulls another set's entire permission list into this one, so a broader set can be built by composing narrower ones instead of repeating every entry. `Permissions` is the list itself, one entry per object: `tabledata X = RIMD, page Y = X`." },
        { h: "Best practices", p: "Ship at least one full-access set and one read-only set as a pair, name both with the project's prefix so they're identifiable at a glance in a long permission list, and set Assignable = true only on the sets an administrator should actually be able to hand to a user — not on every set that exists." },
        { h: "In the rental project", p: "Rental Full grants rimd on the rental tables plus execute on the rental codeunits, reports, queries and XMLports — everything a rental manager needs to fully operate the extension. Rental Read grants r only, for users who need to consult the equipment list and availability report without being able to change anything. The source material doesn't state object ID numbers for either permission set — reserve two from your own range rather than inventing specific ones." }
      ],
      why: "A rental manager who can open every page and codeunit built in this series but has no permission set granting rimd on RentalEquipment sees every operation fail at runtime with a permissions error — not a bug in the extension, working exactly as designed, because Business Central assumes no access until a permission set says otherwise. Shipping the extension without this object means it only ever works for the one SUPER user testing it.",
      check: { q: "Rental Read grants r on the rental tables and nothing else. A user assigned only Rental Read tries to mark a piece of equipment unavailable through the Card page. What happens, and why isn't this a bug?", a: "The operation is blocked with a permissions error — Rental Read never granted M (modify) on Rental Equipment, only R (read). This is the permission set working exactly as designed: a read-only role is supposed to be unable to change data, and the block happens automatically because Business Central's default is no access, not because something forgot to check a flag." },
      exercise: "Build two permission sets: Rental Full, granting RIMD on Rental Equipment and every other rental table built in this series, plus X on Rental Management, Rental Process, the Equipment Availability report, the Rental Equipment Summary query, and the Import Rental Equipment XMLport; and Rental Read, granting R only on the rental tables. Set Assignable = true on both, sign in as a non-SUPER test user assigned only Rental Read, and confirm every write operation is correctly blocked.",
      code: "permissionset 78640 \"Rental Full\"\n{\n    Access = Public;\n    Assignable = true;\n    Caption = 'Rental Full Access';\n    IncludedPermissionSets = \"Rental Read\";\n    Permissions =\n        tabledata \"Rental Equipment\" = RIMD,\n        page \"Rental Equipment List\" = X,\n        page \"Rental Equipment Card\" = X,\n        codeunit \"Rental Management\" = X,\n        codeunit \"Rental Process\" = X,\n        report \"Equipment Availability\" = X,\n        query \"Rental Equipment Summary\" = X,\n        xmlport \"Import Rental Equipment\" = X;\n}\n\npermissionset 78641 \"Rental Read\"\n{\n    Access = Public;\n    Assignable = true;\n    Caption = 'Rental Read Only';\n    Permissions =\n        tabledata \"Rental Equipment\" = R;\n}"
    },
    {
      id: "hands-06-capstone", group: "capstone", n: "16", title: "Capstone: the Rental Contract feature",
      dur: "25 min read",
      summary: "One end-to-end feature — rent equipment, price it automatically, report on it, import equipment from CSV — built using every object type from modules 1 to 5, on top of the project as it already stands.",
      concepts: [
        { h: "The scenario", p: "The rental company wants to rent equipment to customers, price each rental automatically, report on availability, and load its equipment list from a CSV file. This is not a new project — it's the next feature on the one you've been building since Lesson 01." },
        { h: "Where you start", p: "The project as it stands after module 5: table 78601 (RentalEquipment), enum 78602 (EquipmentType), pages 78603–78605, and codeunit 78609 (RentalManagement) are already in place and compiling." },
        { h: "What you will build", p: "Nine objects, listed in the table below, spanning every layer of the project. Build one at a time, compile after each, and test it in the client before starting the next — use the snippets from earlier lessons rather than typing objects from scratch." },
        { h: "What good looks like", p: "A user opens the Rental Manager Role Center, imports equipment from a CSV, rents a projector, and sees both the calculated price and the availability report update to reflect it." }
      ],
      why: "This is the lesson that proves the series worked — every object type taught individually in modules 1 through 5 has to work together here, on real (if small) business logic, under the same naming and ID-range discipline set in Lesson 01. If a learner can complete this capstone cleanly, they can start a real extension.",
      check: { q: "The capstone's definition of done requires the extension to compile with 'no errors and no warnings, and every object inside your assigned ID range.' Why call out warnings specifically, not just errors?", a: "A warning doesn't block compilation, so it's tempting to ignore — but in a shared codebase, unaddressed warnings (deprecated API usage, missing captions, etc.) accumulate silently and are exactly the kind of thing that turns into a real bug or a failed AppSource validation later. Treating warnings as blocking here builds the habit before it costs something real." },
      exercise: "Build, in order: (1) Customer table extension 78630 adding \"Rental Discount %\" (Decimal, MinValue 0); (2) EquipmentType enum extension 78631 adding the Camera value with a Caption; (3) Rental Contract table 78632 (key on No., using the EquipmentType enum, and fields for customer, equipment, start date, days, total); (4) Rental Contract Card page 78633 (PageType Card, SourceTable = your new table); (5) Rental Pricing codeunit 78634, one public procedure returning a Decimal (daily rate × days, minus the customer's discount); (6) wire the pricing call to OnValidate on the Days field on the card, assigning the total field; (7) Import Equipment XMLport 78636 (Direction = Import, Format = VariableText), rejecting negative prices rather than silently skipping them; (8) Rental Availability report 78635 grouped by equipment type, and Rental Revenue query 78637 grouping contracts by type and summing the amount; (9) Rental Full permission set 78638 granting rimd on your new tables and X on the new codeunit, report and query — then test the entire flow logged in as a non-SUPER user.",
      definitionOfDone: "The extension compiles with zero errors and zero warnings, every object sits inside the assigned ID range, and every object carries the project prefix with a caption that reads well in the client. A contract can be created, saved, reopened, and shows the values entered. The total follows daily rate × days minus the customer discount, recalculating on change. A negative price or a zero-day rental is refused with an actionable message. A ten-row CSV import loads correctly, with bad rows reported rather than silently skipped. The availability report reads well on screen and exports cleanly. A non-SUPER user can run the whole flow end to end — import, rent, price, report — using only the permission set you shipped."
    }
  ]
}

/* ---------------- HANDS QUIZZES (merge into the app's QUIZZES object) ---------------- */

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
          q: "What does RentalEquipment's secondary key on Equipment Type actually improve?",
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
          q: "What is the FactBox on RentalEquipmentCard for?",
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
          q: "Why does RentalProcess call RentalManagement's CheckAvailability() instead of reimplementing the check itself?",
          options: [
            "It's required by AL syntax",
            "So both codeunits share one rule instead of risking the logic drifting apart",
            "Codeunits cannot contain more than one procedure",
            "CheckAvailability() only works when called from RentalProcess"
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
          q: "Where should EquipmentAvailability apply its filters, so they take effect before the first record is read?",
          options: ["OnPostReport()", "OnAfterGetRecord()", "OnPreDataItem()", "OnQueryClosePage()"],
          correct: 2
        }
      ]
    },
    "hands-04-query": {
      pass: 2,
      questions: [
        {
          q: "In RentalEquipmentSummary, which column has no Method set?",
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
          q: "A user assigned only Rental Read tries to modify a Rental Equipment record. What happens?",
          options: [
            "It succeeds because Read includes basic edits",
            "It's blocked — Rental Read never granted M (modify)",
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

};
