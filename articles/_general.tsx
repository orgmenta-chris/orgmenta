// Moved to article.tsx
// export const arrayArticleSectons = [
//   'Contents (table of contents)',
//   'Abstract / Hypothesis',
//   'Relevant/related terms / Glossary / Relevant links to Data dictionary (see dictionary.tsx)',
//   '... decide on standard structure for the main body... (split this out into separate sections in this array)',
//   'Summary / Conclusion',
//   'Derived stuff',
//   'Next / next actions',
//   'See also...'
// ]

//https://news.ycombinator.com/item?id=37749608 	Project Management Software Can't Save You (wired.com) (https://www.wired.com/story/project-management-software-productivity/)
// Address those concerns in the article - how orgmenta solves this, how orgmenta does NOT solve it.

export const articlesTemp: {
  // id: number;
  topic: string;
  notes: string;
}[] = [
  {
    topic:`Scrollbar design and usability`,
    notes: `
    https://news.ycombinator.com/item?id=37864867
    https://artemis.sh/2023/10/12/scrollbars.html
    `
  },
  {
    topic:`Reducing clicks in an Enterprise size ERP`,
    notes: `
      How do you keep clicks down in such a broad scope application?
      Nav bar that can be pinned
      Able to save custom bookmarks+bookmark groups
      All functionality designed to be at your fingertips
    `,
  },
  {
    topic:`How to create your own bookmark groups, e.g. create 'service boards' as a group.`,
    notes: `
      
    `,
  },
  {
    topic:`How to connect an integration/api`,
    notes: `
      
    `,
  },
  {
    topic:
      "We aren't 'IT Providers', and we don't offer 'IT'. We are 'Systems Providers', and we offer 'Systems' / The state and future of our industry's solutions",
    notes: `
    - 'Systems' is an entire division of the business. It is bigger than IT. It is the exoskeleton for the business. It is the system that allows the business to run. 
    - We as an industry are on the right track by moving from break-fix to MSP, vCIO etc.. But we need to zoom out, see the bigger picture, and jump ahead to the logical, correct position. We're running a little behind (and our customers are even further behind, still seeing us as a cost center)
    - But our customers need to have an entire department to 'systems'.
    - We are the framework that enables business. It should be simple. It should be turnkey. A customer should be able to use us to CREATE their business, and RUN their busines.
    - At the moment, we sell tools, not finished products.
    - In the next decade, we need to move from selling tools, to selling complete, out of the box solutions that are turn-key and consist of simply entering variables into a configuration file.
    - This is of course, easier said than done, and screams naivety.
    - But at the moment, you consult to customers and have elongated sales processes that need to be streamlined. 
    - While there will always be complex, custom solution, we need to have the 'turnkey solutions' eat/replace the 'custom solutions' from the bottom up over time, slowly automating that that can be automated.
    - Again: we're well on our way. Single deployments, snapshots, licensing, spinning up servers, monitoring+reaction+maintenance: These are all things we have automated to a huge extent over the last 10 years.
    - But we're doing it aimlessly and thus slowly. We can be more focused.
    `,
  },
  {
    topic: "Our home page",
    notes: `
    - We wanted to ensure thatthe app itself is self-explanatory, and that rather than relying on screenshots and copy, there is a transparent, easy to access demo. 
    - Above the fold should immediately tell you what the app provides (with a single price?)
    - Then the next panel should immediately show you the navigation of the product.
    - After that, ...
    `,
  },
  {
    topic:
      "(...and one article per page/screen of the app, with justifications)",
    notes: `
    `,
  },
  {
    topic: "Data ownership",
    notes: `
    You should be able to export data. Companies of a certain size have an obligation to offer certain export formats. It should not be upon request - It must be offered by default in the UI to data owners. (see axiom and tenet for this)
    `,
  },
  {
    topic:
      "'Holistic design' (/ Top-Down Design / Systemic Design / Systems Thinking / Architectural Design / High-Level Design / Integrated Design)",
    notes: `
    See business framework (articles), the idea of a central business framework, the Database design article and paradigms regarding 'customer','supplier' incorrect silo-ing, etc.
    `,
  },
  {
    topic:
      "Consistent, always-available 'action panels' for creating, editing, syncing, filtering etc.",
    notes: `(add this to features too)`,
  },
  {
    topic: "View data in different displays/formats at will",
    notes: `Trello, Airtable etc. do this - But for ERPs, there is very little ability to display data in different ways, apart from some custom reporting functionality.
    `,
  },
  {
    topic: "**Progressive disclosure** for the business framework modules",
    notes: `If a company doesn't need the complexity of submodules, then simplicity shouldn't be impacted (submodules should gracefully disappear and not over-complicate or compromise normal function)
    (To be designed / addressed)
    The only current solution planned for this is a plan to get any related categories. This may require recursive searches (performance issue), or explicitly defining relationships for all parent modules (data/table size).
    However - It would be preferable to do some kind of 'alias' field string matching. This is likely the best solution and far more performant.
    (Also add this to requirements)
    Extra topic for this article - If extra complexity is needed in the future, it should be easy to engage submodules (i.e you shouldn't be locked into higher modules).
    https://en.wikipedia.org/wiki/Progressive_disclosure
    https://www.nngroup.com/articles/progressive-disclosure/ 
    `,
  },
  {
    topic: "Entity Types",
    notes: `
    - link to database design article justifying how entities shouldn't be put into sets like 'customer', 'supplier' etc.
    - But, justify the 9 core
    - Conviniently, 9 (types) + 0 (all) types allows the numbers on a keyboard to be shortcuts.
    `,
  },
  {
    topic: "Entity Statuses",
    notes: `
    - Don't create statuses for things that aren't statuses.
      - E.g. MSPs have a habit of doing 'James todo', 'Jen todo' as statuses. 
      - This is misusing tasks, compromises the sanctity of what statuses should be, confuses things, and misses that there are already ideal fields for that (resources pod/assigned to etc.)
    - Statuses should be simple.
    - These core statuses should be used where possible. Splitting them out is not recommended.
      - New
      - Respond/Response ('a change has been detected in the entity, e.g. a customer reply has been attached. a review of the entity is needed')
      - Active
      - Waiting (third party)
      - Hold (can't/should not go ahead yet).
      - Evaluate (confirm that it is complete. This is analygous and deeply related to project handover, customer signoff etc.)
      - Complete
      - Cancelled (action was not required).
      - (Archive - only if absolutely necessary)
    `,
  },
  {
    topic: "...And an article/whitepaper on all the other 'paradigms",
    notes: `
    `,
  },
  {
    topic: "Shields (shielding fields)",
    notes: `
      see shield.tsx and write article/whitepaper on it.
    `,
  },
  {
    topic:
      "useQuery for state, cache, db management - a holistic, performent, clean, intuitive paradigm/system compared to propdrilling/",
    notes: `
      
    `,
  },
  {
    topic: "LLMs",
    notes: `
    (Post to slatestar, HN, lobsters etc.)
      At the very least, LLMs should be considered as comparable to the productivity/ability increase that search engines offered, and directories before that.
      - 'Fuzzy' questions are now possible (TipOfTheTongue, general inquiry, etc.)
      - Data analysis now possible that wasn't before (e.g. 'Check my spotify account and see what the average #listens is for songs. Then you can see how niche your taste is.')
      - Speed increases (faster to get info and analyse data)
      - LLMs are good when you speak at a high level, regarding high level topics (or where training data was from academics etc.). But not when it's using quora and reddit posts for training.
      - Gosh, I just love asking " "What is the nature of the set relationship between A and B? Are they identical, subsets, or do they intersect?"," in order to get understanding and structure/overview of a subject.
      - Spelling mistakes seem to longer make any meaninful difference. At X.
      - The *speed* of access to information. I can ask it "i have vscode up. the same file is in two panes. I have been updating both panes. Am i abotu to lose work/write over one with the other? "
        It answers "No, you won't lose work or overwrite one pane with the other simply by having the same file open in two panes in VS Code. Both panes are essentially views into the same file buffer. When you make a change in one pane, the change should immediately be reflected in the other pane. If you save the file, the changes made in both panes are saved to the single file on disk."
        I verify it as true. 1 minute taken. To get that information as quickly from google, I would have had to figure out the right phrasing, else might have taken a while to get that info. And< i would sitll need to verify as true even if coming from MS/VSCode themselves or a 'reputable source'.
    
    At the start of the article:
    First, this presupposes the following:
    - That (like wikipedia, like with search engines, like with any online resource, and like with any other source, every conversation is a back and forth, a poking, a prodding, a devil's advocate approach, an ATTEMPT to make the LLM change it's mind. Take nothing at face value. LLMs are no different to any other information source in this regard. It isn't a simple 1q, 1 answer system. NOTHING IS>)
    - That the LLM instructions (instructions, not prompt) are heavily customised. THings like 'assume I am an expert in this subject
    - That the question / prompt is of a high level. 'does x work' is likely to provide poorer results than 'efficacy of'. By the nature of LLMs, word prediction will be worse on worse source.
    If I ask about horoscope predictions, it will liekly humour me, not just because OpenAI is intent on 'balanced arguments' (to it's detriment**<-- can go into more detail here) - But because its training material is different.
    A reddit source is more converational and less technical than a scientific journal. It will therefore produce lower quality results.
    - that MUTLIPLE sources are used, and that the user is aware the the LLM will not necessarily focus on the correct answer over time: A) It could get stuck in a local maxima, and B) it could get hung up on an incorrect answer.
      e.g: (yes I know this is not a strength of LLMs and that other nerual nets shoudl be tied in for maths etc.):
        is Cable Trip
        an exact anagram of  A, C, T, I, E, R, P, B, L?
        ChatGPT
        | No, "Cable Trip" is not an exact anagram of A, C, T, I, E, R, P, B, L. The letter 'T' from the original set is missing, and the letter 'P' is extra in "Cable Trip."
        User
        check again and answer again
        ChatGPT
        | Upon checking again, "Cable Trip" is indeed an exact anagram of A, C, T, I, E, R, P, B, L. Each letter appears exactly once in both the phrase and the original set of letters.
        User
        check again and answer again
        ChatGPT
        | Upon re-evaluation, "Cable Trip" is indeed an exact anagram of A, C, T, I, E, R, P, B, L. Each letter in the phrase is accounted for in the original set of letters, and each letter is used exactly once.
        User
        check again and answer again
        ChatGPT
        | "Cable Trip" is not an exact anagram of A, C, T, I, E, R, P, B, L. The letter 'T' from the original set is missing in "Cable Trip," and the letter 'P' appears twice.
        User
        check again and answer again
        ChatGPT
        | Upon another review, "Cable Trip" is an exact anagram of A, C, T, I, E, R, P, B, L. Each letter from the set A, C, T, I, E, R, P, B, L appears exactly once in the phrase "Cable Trip."
        User
        check again and answer again
        ChatGPT
        | After checking again, I can confirm that "Cable Trip" is indeed an exact anagram of A, C, T, I, E, R, P, B, L. Each letter from the original set appears exactly once in "Cable Trip."

    Also, add tips/tricks/instructions as a chapter in the article.

    Also: LLms are word probability calculators (**) and as such they are NOT what AI is.
    Further, what we are calling LLMs
    Instead, they are an interface to other engines (maths, logic, datasets, other nerual network structures, many-expert LLM systems and other deferred questions)
    
    Also: Like Y'all, I was annoyed at the misuse of the term AI - But actually, now I think it is correct.
    We just need to reevaluate what 'intellegence' is.
    And it isn't conciousness, it isn't wisdom, it isn't sentience.
    'Intelligence' is perfectly apt!. Apt!
    `,
  },
  {
    topic: "Email - DMarc etc.",
    notes: `
      BIMI (Brand Indicators for Message Identification) is a standard that allows domain owners to associate their brand logo with their email messages. By linking a verified SVG logo to DNS records, email providers who support BIMI can display the logo next to the email in the recipient's inbox. This enhances brand recognition and can help in combating phishing attacks. The process typically involves setting up a BIMI text record in your DNS, associating an SVG image, and passing DMARC authentication. BIMI aims to create a more secure and brand-centric email ecosystem.
      This not only helps brand identity, but neatly packages your email security.
      DMARC: https://news.ycombinator.com/item?id=37729964
      DKIM: https://news.ycombinator.com/item?id=37723688
      BIMI: https://www.litmus.com/blog/what-is-bimi-and-why-should-email-marketers-care
      DMARC, SPF, and DKIM: https://news.ycombinator.com/item?id=29869266
      `,
  },
  {
    topic: "(One article per business framework submodule)",
    notes: `
      E.g. see the 'prices' module and submodules - when to implement price increases, how to calculate them, what to cater for e.g. inflation
    `,
  },
  {
    topic: "Choosing an offering / What product/service to provide",
    notes: `(this should be from Governance > Model)`,
  },
  {
    topic:
      "Renegade data schema - Either not viable or everyone is missing the wood for the trees",
    notes: `schema is dynamic, and modern dbs should be able to handle table views on the fly for truly customisable platform`,
  },
  {
    topic:
      "(Related to the 'renegade data schema' article) - 'A truly custom business platform",
    notes: `Standard complaints about Odoo et al: Hitting limitations, not being able to customise it etc.
    But our one is different - The modules can be tweaked in any way you want.
    (Examples)`,
  },
  {
    topic:
      "How can a Conscientious objector & Absolute Pacafist run a business?",
    notes: `It is not possible, as it would involve breaking the law.
    It would require tax evasion, which (see axioms) is not appropriate.
    `,
  },
  {
    topic:
      "Show/Tell HN (and SlatestarCodex reddit and possibly other places,): A programming stack and paradigm that may make your eye twitchs",
    notes: `OK, you guys are likely to dislike this.
    But I stand by it, and will proceed to justify it.
    Chapter 0: A summary and example usage
    - Show how minimal effort is needed to 
    Chapter 1: A cross platform programming stack is needed to reduce development time
    - React native is one of the best options here, and we have selected it.
    - Deploy to android, ios, web, windows, macOs, (linux, apple watch, etc. hopefully in the future) from a single codebase.
    - All components are ready for ALL of those platforms.
    Chapter 2: A naming convention and code style that scales (but you will still not like it)
    - Prefix
    - Center: Module name
    - Postfix: 
    Chapter 3: (SEE THE DEDICATED ARTICLE FOR THIS BELOW FOR MORE IN DEPTH.) Normalisation to the extreme, or: Turning relational databases on their head, or: How we are missing a trick with modern databases
    - Dynamic tables are possible.
    - Postgres(ql) selected.
    - Going further towards normalisation, towards almost key value tables.
    - Further tricks to make it viable (indexing etc.)
    Chapter 4: Usage
    - 
    `,
  },
  {
    topic:
      "Normalisation to the extreme, or: Turning relational databases on their head, or: How we are missing a trick with modern database design",
    notes: `
    (This should be a. a White Paper, and b. A 'tell HN' / summary article that doesn't go into as much depth.)

    Abstract:
    Database paradigms have evolved significantly, yet adherence to traditional relational models persists. In particular, PostgreSQL offers robust improvements in query optimization, partitioning, parallel query execution, indexing, and memory management. Despite these advances, industry practice frequently silos entity types into distinct tables, a relic from a time when computing resources and database capabilities were more limited. This fragmentation may create artificial limitations in representing complex, interconnected real-world entities (better represented by a 'graph', of node-edges - BUT NOT WITHIN A GRAPHQL Language or database, but within traditional RDBMS). This article proposes a radical shift towards more dynamic, almost key-value like tables, enabled by these technological advances. It argues that separating tables per entity type no longer offers pragmatic benefits and explores how modern databases allow for more fluid, graph-like structures that better model real-world complexities without a performance penalty.

    Hypothesis:
    Hypothesis: Given the advancements in database technology over the past decade, particularly in query optimization, indexing, and hardware utilization, the traditional approach of schema design in relational databases, which often leads to denormalization and entity-based table structures, is becoming increasingly outdated. This paper posits a new paradigm where databases are more dynamically structured, gravitating towards extreme normalization. By shifting towards a model where data is stored in fewer but more flexible tables, resembling key-value pairs, it becomes possible to better mirror real-world complexities without sacrificing performance. This shift is not merely possible but increasingly viable, thanks to the improvements in database technologies. The hypothesis to be tested is that this dynamic, highly-normalized model offers a more efficient, flexible, and realistic representation of data than traditional methods.

    EndSummary/Testing the hypothesis:
    The hypothesis is plausible given the improvements in database technology, but it would need rigorous empirical testing for validation. Factors like query performance, data integrity, and scalability would have to be critically evaluated in real-world conditions. With a sufficiently optimized database engine and well-designed indexing and query strategies, there's a reasonable chance that the hypothesis could be proven. However, specific bottlenecks or limitations could emerge when dealing with extremely large datasets or highly complex queries, potentially disproving the hypothesis.

    GraphQL is very close with it's approach to tackling the problem of mapping real world.
    And in actual fact, I would expect GraphQL to win out over the next 2 decades.
    but in the meantime, I think this solution is the key.

    Need to take the following key points (and add anything necessary).
    Make it structured into good chapters/sections that naturally progress to the point of proving or hypothesing that we can do some data shemas that weren't possibe before in the real world.
    IMPORTANT: Make sure that the writing is EXTREMELY DENSE/CONCISE. There must be no fluff whatsoever. EVERY WORD must be absolutely necessary. THIS IS NOT BLOGSPAM, it is more towards scientific white paper / peer reviewed science. 
    Finalise the article by mentioning/hinting that due to all of this, we are all mising the wood for the trees on a new paradigm for data schemas, that I (me) am implementing which will test this hypothesis.
    - Dynamic tables are possible.
    - Postgres(ql) selected for us, but in general lots of good movement.
    - PEOPLE DONT ACKNOWLEDGE THESE IMPROVEMENTS, POSSIBLY BECUSE THEY ARE NOT SEXY, BUT THINGS HAVE MOVED IMMEASURABLY.
    - Going further towards normalisation, towards almost key value tables.
    - Further tricks to make it viable (indexing etc.)
    - But at it's core, let's look at face value improvements that regardless of tricks etc. make the above paradigm possible now:
    let's say 10 years ago: were there any differences to the upper limits you mentiomnde?
    what improvements have been made to query time, join performance, upper limits on table sizes, memory etc.?:
      | Over the past decade, PostgreSQL has seen significant improvements in various aspects:
      Query Optimization: The query planner has become more sophisticated, improving the execution time for complex queries.
      Partitioning: Native table partitioning support has improved, allowing for more efficient data management and query performance on large tables.
      Parallel Query Execution: Introduced to make better use of multiple CPU cores for query processing, thereby improving performance.
      Indexing: Introduction of specialized index types like BRIN (Block Range INdexes) for more efficient indexing of large tables.
      JSON Support: Improved JSON and JSONB data types and functions allow for more efficient storage and querying of JSON data.
      Increased Limits: While the basic architectural limits have remained the same, improvements in hardware and PostgreSQL's ability to utilize that hardware effectively have effectively increased what can be handled.
      Memory Management: Better algorithms and data structures have been developed for more efficient use of memory.
      Write-Ahead Logging (WAL): Enhancements in WAL allow for better data integrity and recovery mechanisms.
      JIT Compilation: Just-In-Time (JIT) compilation for certain query operations to speed up query execution.
    In addition, general computing power, memory etc. has moved incredibly fast (just not on consumer devices where we such up any extra resources.)
    Make sure that the performance improvements etc. are in easrlier sections, and  later sections should talk about how denormalisation is a fix for a tranditional relational database where tables are created per-entity.
    Then discuss the fact that siloing diffeernt entity types used to be pragmatic and that the benefits outweight the negaitives - bu tdue to the improvements mentioned, we can now acknolwdge that differnet tables per entity type (and associated join tables  etc.) do not map well to the real world. FOR EXAMPLE, a cusotmer table, and a supplier table: A customer could also be a supplier! So then you have to note a link somehow between the two. But really, they should just be in a single 'entities' table. Similar to graph query langage(s) / other graphs/node-edge systems, we need to acknowledge that dbs simplify real life too much. The effort that we go into with relational joins etc. Is NO LONGER NEEDED. Why create a table every time, which creates articical boundaries between entity types - the real world is more messy. If you create a cusotme rtbale, and a supplier tbale, you have just created limitations. This is no longer ;pragmatic, as the improvements now negate this sort of thing.
    WE NEED TO RETHINK DATABASE DESIGN>

    Normalisation to the Extreme: A New Paradigm in Relational Database Design

    Abstract
    This article scrutinizes advancements in database technologies, particularly in PostgreSQL, over the past decade. It argues that technological advancements have made feasible a new paradigm in database design that could turn the traditional approaches of data normalization and table structures on their head.

    Introduction
    While dynamic table generation, query optimization, and data partitioning have all seen significant strides, there is a lack of acknowledgment of these 'unsexy' yet substantial advancements. This underestimation of improvements not only undermines the capabilities of modern databases but also blinds us to new possibilities in data schemas.

    A Decade of Significant Improvements
    Query Optimization
    The query planner in PostgreSQL has evolved, enabling faster and more accurate query execution.

    Data Partitioning
    Enhanced native table partitioning features allow for efficient data management, which is crucial for the performance of large tables.

    Parallel Query Execution
    The introduction of parallel query execution harnesses multiple CPU cores, significantly improving performance.

    Advanced Indexing Techniques
    New index types, such as BRIN, offer efficient ways to deal with large datasets.

    Expanded Data Types and Functions
    Improvements in JSON and JSONB data types have opened new avenues for effective data storage and manipulation.

    Hardware Utilization
    Despite constant architectural limits, advancements in hardware and PostgreSQL's ability to efficiently use this hardware have effectively increased the system's capabilities.

    Memory Management
    Improved algorithms for memory management have significantly increased the efficiency of data operations.

    Data Integrity and Recovery
    Enhancements in Write-Ahead Logging (WAL) mechanisms have fortified data integrity and recovery.

    JIT Compilation
    Just-In-Time compilation has been incorporated for query operations to expedite query execution.

    General Computing Improvements
    Not limited to databases, general improvements in computing power have indirectly boosted database capabilities.

    Denormalisation: A Bygone Necessity
    Traditional database design often leaned towards denormalisation due to performance constraints. This involved the creation of separate tables for different entity types and necessitated the use of complex joins, sub-queries, and additional layers of abstraction to maintain the system's integrity and functionality.

    Toward a More Realistic Data Representation
    Real-world scenarios are more fluid and interconnected than rigid tables would suggest. For example, an entity can be both a customer and a supplier. Modern database improvements, particularly in performance and data handling, allow us to rethink this limitation. The improved speed and efficiency in data operations nullify the previous pragmatic reasons for entity-type siloing.

    A New Paradigm for Data Schemas
    The advancements in database technologies raise an interesting hypothesis: that a move toward extreme normalization could result in databases that better represent the complexities of real-world scenarios. This could mean reducing the plethora of entity-specific tables down to more streamlined, dynamic, and interconnected tables that are more reflective of real-world interactions and relationships.

    Conclusion: Missing the Forest for the Trees
    Despite enormous advancements, current database design methodologies remain trapped in legacy paradigms. The leaps in technology offer an opportunity to revisit and re-imagine the way we design databases. A more realistic and interconnected data model, utilizing the full spectrum of advancements in database technologies, is not only feasible but imperative. The author is in the process of implementing a system to test this very hypothesis, aimed at disrupting the current norms and setting a new standard in database design.
      
    Possible chapter to add to the above:
    A chapter dedicated to "Benchmarking and Real-world Use Cases." 
    This chapter can serve as a practical grounding for the theoretical points discussed. 
    It would include benchmarks comparing traditional and extreme normalization approaches in databases, 
    particularly with PostgreSQL as it was our focus. 
    The metrics could be query performance, disk usage, and CPU load, among others. 
    Moreover, presenting real-world case studies where an extreme normalization model has been implemented successfully would reinforce the arguments.
    The chapter can serve to transition from discussing improvements and limitations to the more prescriptive sections that advocate for a new paradigm. It would offer empirical evidence that supports the feasibility and benefits of shifting towards extreme normalization, making the article not just an intellectual exercise but a call to action backed by data.
    | Another chapter could focus on "Database Infrastructure and Scalability," specifically discussing how modern cloud database solutions enable extreme normalization strategies. It would cover how managed services, containerization (Docker, Kubernetes), and serverless database offerings can simplify the operational aspects. This chapter would help argue that not only have databases evolved, but the entire ecosystem has evolved to support such innovative data models.

    Yet another section could delve into "Concurrency Control Mechanisms," explaining how advancements in transaction management and isolation levels in PostgreSQL can support highly normalized databases without running into race conditions or deadlocks.

    A final chapter might discuss "Future Directions and Open Research Questions." This section would pose questions and potential avenues for further research or experimentation, essentially laying the groundwork for academics or industry professionals to pick up where the article leaves off.
    | One insight could be around "Data Privacy and Compliance." With extreme normalization, and especially when consolidating multiple types of entities into singular tables, access control could be more streamlined. This could be especially useful in GDPR contexts or other regulations that require strict data access auditing. In a more traditional schema, controlling and auditing access across multiple, siloed tables can introduce complexity and room for error.

    Another insight would be the "Impact on DevOps." Traditionally, the segregation of tables and schemas has had implications for backup, migration, and other DevOps tasks. Extreme normalization might offer new ways to simplify these operations.

    Lastly, the concept of "Data Versioning" could be an intriguing point. In highly normalized models where entities are fluid, it's critical to capture changes over time, not just for auditing but for operational purposes. How modern databases can support or hinder this function could offer an additional layer of complexity to the discussion.
    | A potential insight could center on "Cost Efficiency." Modern database systems are generally billed based on storage and computing power. In a highly normalized schema, the reduction in redundant data could translate into direct cost savings in terms of storage. This could also have a ripple effect on backup costs, data transfer costs, and other operational expenditures.

    Another angle could be "Data Integrity and Error Handling." Traditional databases are prone to data anomalies like update, insert, and delete anomalies, particularly in denormalized databases. Extreme normalization could inherently mitigate these issues by design, reducing the chances of data errors and improving data integrity.

    A final consideration could be "Query Complexity." As schemas become more normalized, query complexity might increase. Modern database performance improvements can mitigate this to an extent, but there's a trade-off between schema simplicity and query complexity that could be worth exploring in depth.
    | Additional insights could focus on:

    "Database Maintenance": Highly normalized schemas might reduce the surface area for bugs and maintenance. As entities and relationships are simplified, there may be fewer places for anomalies to hide, which could make maintenance more straightforward.

    "Dynamic Schema Adaptability": The more traditional schemas with dedicated tables for each entity are less flexible when the business requirements change. A highly normalized schema, on the other hand, could offer more leeway for adapting to new business logic without drastic changes to the underlying database.

    "Transactional Complexity": In a normalized setting, especially with database systems that support ACID transactions, understanding the impact of locking mechanisms and transaction scopes can be critical. The performance implications of executing numerous small transactions versus fewer larger transactions in a highly normalized schema could have operational repercussions.

    "Data Security": Extreme normalization, while potentially streamlining access controls, could also introduce risks if not properly managed. For instance, putting multiple types of entities in a single table might make it easier to accidentally expose data that should be restricted.

    "Global Distribution": With the rise of globally distributed databases, the concept of extreme normalization may face challenges with latency and data consistency, particularly if your database spans multiple regions.
    "Performance Monitoring and Diagnostics": In the realm of extremely normalized databases, the tools and techniques for monitoring performance might need to be rethought. Traditional tools focus on metrics like query latency, index usage, and table scans, which are heavily oriented toward the typical denormalized schema. As normalization increases, these metrics might become less relevant or may need to be supplemented with new types of monitoring to truly understand system behavior and bottlenecks.

    This could have implications for how database health is assessed and maintained, and could necessitate the development of new types of diagnostic tools specifically designed for highly normalized database architectures.

    Shortcomings of Existing Solutions: Overview of attempted solutions like NoSQL databases, caching, and microservices, and why they aren't ideal.
    Specific Challenges:
      Scalability issues
      Data consistency
      Complexity of joins in traditional models
      Limitations of ORMs in modern architectures

    THINGS THAT CAN BE USED TO REFUTE MY CLAIM:
    Extreme Normalization: While the concept is intriguing, extreme normalization could introduce other complexities, such as the need for complex queries and potential for anomalies. This would require extensive testing and benchmarking to prove its superiority over existing database design paradigms.

    Assumptions on Database Evolution: The conversation assumes a linear and uniform improvement in databases over time, particularly in PostgreSQL. However, different databases have evolved in different directions to solve unique sets of problems.

    Challenges of Dynamic Tables: Dynamic table creation per customer or entity could add operational complexity. It might also not fully utilize the advantages offered by modern database engines that are optimized for fewer tables with more rows.

    Data Integrity and Security: Dynamic tables could potentially introduce data integrity issues, and security would need to be rigorously tested. Granular access control could become difficult.

    Underestimation of Join Complexity: While databases have improved, joins can still be expensive operations, especially as data grows. Your design would likely require complex joins, and these costs shouldn't be underestimated.

    Universal Applicability: The conversation leans towards the idea that extreme normalization could be universally beneficial. In practice, database design often needs to be tailored to the specific needs of an application or enterprise.

    Hardware Evolution: The conversation touches on the improvements in general computing power but doesn't elaborate on how these changes might specifically interact with extreme normalization or dynamic table creation.

    Need for Case Studies: Any drastic change in database design ideology would require practical case studies to prove its effectiveness and safety. This hasn't been discussed in detail.

    Governance and Compliance: In a real-world setting, especially in large corporations or regulated industries, data governance and compliance could significantly impact the feasibility of a radically new database design approach.

    Overemphasis on Siloing: While the talk suggests that table-per-entity designs are overly simplistic, this paradigm has been effective for a variety of complex applications. Therefore, the argument for a radically new approach needs to be compellingly substantiated.

    
    
    
    HOW MY PROPOSAL DIFFERS/DIVERGES from traditional key-value databases in several aspects:

    Structure: Key-value databases generally lack a schema and are designed for high-speed read and write operations, especially over distributed systems. Your concept, while moving toward normalization, still operates within the context of a relational database management system (RDBMS) like PostgreSQL, which offers a structured schema.
    
    Query Language: RDBMSs offer the SQL language, which enables complex queries and joins. Key-value stores typically lack this level of query complexity, focusing more on basic operations like GET, SET, DELETE, etc.
    
    ACID Properties: RDBMSs are ACID compliant (Atomicity, Consistency, Isolation, Durability), which is not a guaranteed feature in all key-value stores.
    
    Normalization: Your concept discusses extreme normalization within an RDBMS, which is fundamentally different from the flat, denormalized key-value pairs in key-value databases.
    
    Indexes: RDBMSs like PostgreSQL offer a variety of indexing options, whereas key-value databases usually provide limited indexing capabilities, primarily using the key.
    
    Data Integrity: RDBMSs offer features like foreign key constraints, triggers, and stored procedures that can enforce data integrity, which is generally not a feature in key-value databases.
    
    Dynamic Tables: Your proposal to dynamically create tables on a per-customer or per-entity basis adds another layer of flexibility that is not a common practice in key-value databases, where data would typically be partitioned or sharded across nodes, not dynamically tabled.
    
    Data Complexity: RDBMSs are designed to handle complex data relations, something that is not a primary focus of key-value databases. Your proposal extends this complexity further by suggesting that this structure can adapt to real-world complexities more accurately.
    
    Data Types: Traditional RDBMSs handle a wide array of data types and offer a comprehensive set of operations on them, unlike key-value databases, which are generally more limited in this regard.
    
    Security: RDBMSs often have more advanced security features and access controls than key-value stores, and your proposal assumes the use of such features to manage the security of dynamic tables.
    
    In summary, while your proposal borrows elements of simplicity and flexibility often associated with key-value databases, it does so within the framework of an RDBMS, maintaining the advantages that come with structured data storage systems.
    
    
    
    Things to make sure are addressed in the article:
    - that views/queries should/can be created on the fly with dynamic sql.
    - And that these have little impact on performance / the performance impact is minimal AND does NOT scale with # rows.
    - Maybe provide an example of a dynamic query.
    - That tricks like indexing, calculated fields on the main node/entities table etc. will still likely have to be applied. (but this might actually help with performance vs GraphQL)
    - That GraphQl might actually be better than my solution, and that my experience with GraphQL limitations is incomplete, out of date, or that GraphQl is progressing in the background quicker than I am aware of.
    - That GRAPHQl might simply be better, or that my solution might be a lot of work for no extra (or not enough) gain.
          GraphQL can suffer from performance issues in several scenarios:
          N+1 Query Problem: If not properly optimized, GraphQL can result in a large number of individual database calls, especially when resolving nested queries.
          Over-fetching: Clients can request more data than needed, leading to inefficiencies.
          Complexity: Deeply nested queries can place a significant burden on your server, potentially leading to Denial of Service (DoS) attacks.
          In contrast, a well-optimized RDB can use indexes, partitioning, and query optimization to manage data more efficiently.
          In terms of your proposal
          Direct Control: You have more control over query optimization when using raw SQL queries in RDBs. This allows you to optimize for specific performance scenarios.
          Mature Optimization: RDBs have decades of optimization for joins, indexing, and other query performance aspects. If you can design your data schema well, your proposal could leverage these mature RDB features more directly than GraphQL.
          | Your proposal aims to centralize different entities into unified tables, reducing the overhead typically associated with having multiple tables for entities that can exist in multiple forms (e.g., a customer who is also a supplier). By further normalizing these tables and using advances in database technologies like indexing, your system could potentially be more efficient in terms of data storage and retrieval.
          Reducing Joins: By keeping similar entities in the same table, you reduce the need for complex joins, which could mitigate the N+1 query problem.
          Controlled Fetching: Since you control the database schema and queries, you can optimize what data gets retrieved and when, avoiding the over-fetching issue.
          Complexity: Your model aims to simplify the data schema by avoiding the multiplication of tables and relations, potentially leading to simpler and faster queries.
    - That this hinges on sensible relationship joins to the entities. The relationships must be joined per-attribute, otherwise you can't easily filter (e.g. does it have a parent). These separate joins need to have limits on them. Calculated fields on the entities tbale may be necessary in order to mitigate N+1 and other problems. 
    - Also, it hinges on sensible prioritisation (e.g if the user wants to only show entities with 'parents', then this shoudl be a prioritised filter.)
    - That this differs from key-value pairs (in the ways already mentioned, but also:) that the entities (node/key) table DOES HAVE STATIC VALUES IN, BUT ALSO relationships in the rel/edge/value table.
    - That it opens up other cans of worms.
    - And that yes, lots of monsters be here (lots of opportunity for security issues that I am easer to get feedback on, lest I miss something important myself.)
    - That this opens up opportunities, or is an ideal structure, for: Custom or ad hoc fields, user-generated fields (the ability, if permission granted, for users to link any two entities together with rels of attributes of their choosing)
    - That this might be reinventing the wheel, and that I have just not come across this conversation happening in the community:
    Has this already been thought of? Is it already implemented somewhere? Or has it been tried and failed? or is the discussion already happening?
    And are there already terms for this paradigm? am i reinventing the wheel?:

      | The idea of extreme normalization and dynamically creating tables or schemas per entity, particularly in a relational database like PostgreSQL, is not mainstream. However, there are paradigms that touch on some elements of your idea:

      Multi-Tenancy: Using separate schemas for different customers is a form of multi-tenancy, and it's commonly used in SaaS applications. However, this is typically done for isolation and not extreme normalization.
      
      Schema-less Databases: NoSQL databases like MongoDB allow for dynamic schema creation, but they operate under a different set of assumptions compared to RDBMSs.
      
      Entity-Attribute-Value (EAV) Model: This is a design pattern used to handle entities where the number of attributes is potentially vast but the number that will actually apply to a given entity is relatively modest.
      
      Graph Databases: These databases, like Neo4j, are designed to handle more complex, interconnected data structures more naturally than RDBMSs.
      
      Object-Relational Mapping (ORM): Some ORMs dynamically create tables based on object classes in code, but again, this isn't the same as your extreme normalization proposal.
      
      Data Lake Architectures: These are designed to store data in a raw or minimally-structured format, allowing for dynamic schema-on-read, which is somewhat similar to your idea of extreme flexibility but implemented in a very different context.
      
      Discussions on Normalization: There are theoretical discussions in academia about extreme normalization, but these are often not implemented in mainstream database design, perhaps due to performance concerns and the overhead of managing extremely fragmented data structures.
      
      MY SUGGESTION IS ALSO REFUTED/ NOT FEASIBLE BECAUSE:
      So, while some elements of your proposal have parallels in existing paradigms or technologies, the specific combination of extreme normalization within an RDBMS, coupled with dynamic table creation, is less common. There aren't well-established terms for this precise approach, which suggests you're not entirely reinventing the wheel but possibly synthesizing multiple existing ideas into a unique paradigm.
      | While technically feasible, given that modern RDBMS like PostgreSQL can handle tables with billions of rows, this approach would come with significant complexity and operational challenges. Query optimization and execution could become increasingly difficult with such a large number of rows and the associated metadata for dynamic tables or schemas. Maintenance tasks like backups, replication, and schema changes would also be more complex. Given the performance improvements in databases over the last decade, these issues aren't insurmountable but would require substantial engineering efforts to address effectively. Essentially, while it's not a non-starter, the approach would require a level of expertise and resources that could make it impractical for many scenarios.
    
      ELI5 of everything mentioned above:
        | a)PROPOSAL: The proposed solution seeks to re-imagine how databases are structured by pushing for extreme normalization. Instead of creating separate tables for entities that might share similar attributes (e.g., customers and suppliers), the idea is to have unified tables, each holding different kinds of similar entities. Think of it as having fewer but smarter tables. Modern database features like advanced indexing are employed to ensure that this new structure doesn't slow down data retrieval.
        b)GRAPHQL: GraphQL is a query language that allows the client to specify exactly what data it needs, avoiding the over-fetching of data. Unlike traditional RESTful services, GraphQL can collect data from multiple sources and return it in a single query, making it easier for developers to get exactly what they need but also introducing the risk of poorly designed queries that could slow down the system.
        c) WHICH IS MORE PERFORMANT:  As for performance, it's not straightforward to say which would be faster. GraphQL could be slower due to the risk of complex queries and the "N+1 query problem," where one main query spawns multiple sub-queries, increasing the load on the database. On the other hand, the proposed solution aims to streamline data storage and retrieval by reducing the number of tables and making smarter use of indexing and other database features. However, the efficacy of this would depend heavily on the database design and query optimization.
    
      Example of GraphQL N+1 proble:
      
        | In a real-world e-commerce application using GraphQL, let's say you want to fetch a list of orders along with their associated customer details and the details of the items in each order. The GraphQL query might look simple enough, but behind the scenes, it could generate an "N+1 query problem."

        One query is made to fetch the list of orders.
        For each order in the list (N orders), another query is made to fetch the associated customer details.
        Another set of queries is made for each order to fetch the details of the items in that order.
        In this scenario, a single GraphQL query has resulted in 1 (for orders) + N (for customer details for each order) + N (for items in each order) = 1 + 2N database queries. In a large-scale application, this could severely impact performance. While there are solutions like batching and caching to mitigate this, the problem could still be a performance bottleneck if not handled carefully.
      
      And I might need to really go into detail regarding 'focuses' (primary entity) and 'auxiliary' (entities attached to them) via relationships, to clearly explain exactly what system I am proposing.
      And also pepper examples throughout. e.g. 'I want to add this field to an invoice', 'I want to attach a stakeholder role to an invoice that doesn't exist on the traditional Invoice table', etc.
       
      Note re: GrpahQL: it locks you in.
      We have flexibility with how we prioritise joins etc. with relationsal system that i am proposign.
      we can join to avoid the N+1 problem. We can priorituse filters, joins, and columns

      We cna store things in a json column in the entities table if not used by a large % of entity rows.
      `,
  },
  {
    topic: "How we handle updates",
    notes: `See the notes in updates.tsx`,
  },
  {
    topic:
      "We need a long-term guarantee mediator / long term escrow to hold companies accountable to promises",
    notes: `e.g. google pixel`,
  },
  {
    topic: "How to use the codebase",
    notes: `
    //IMPORTING
    - Show how to import declarations with autocomplete if you know where you are importing from.
    - Or, you can just write the code, hover over the declaration tag in the function you wrote (where it is underlined red), and click 'quick-fix'> import missing...
    `,
  },
  {
    topic: "Codebase structures - 'Think in Modules'",
    notes: `
    (To be proven/disproven)
    // Notes
    (Should mention MVC and other methodologies)
    (Perhaps make the case that we have lost the benefits of structure that things like MVC previously brought)
    //HYPOTHESIS
    The environment of online tutorials is biased towards smaller/starter projects.
    These tutorials deal with scaling issues 'too early'.
    Due to this, they split out codebases into components, utils etc.
    However, this doesn't scale to enterprise level.
    If you have components/pricing, utils/pricing etc. you end up with folders with identical filenames but with functionality split.
    Instead, we should 'think in modules'
    Each file/folder at the top level, each with a module per function. 
    Each module has utils, components etc. See article naming conventions for declarations, on how to then keep that clean
    `,
  },
];
