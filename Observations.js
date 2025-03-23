import React from "react";
import { Link } from "react-router-dom";
import "./Observations.css"; // Make sure to create this CSS file for styling

const Observations = () => {
  return (
    <div className="observations-container">
      <header>
        <h1>Observations on Maximal Clique Enumeration Algorithms</h1>
      </header>

      {/* Tomita Algorithm Observations */}
      <section className="observation-section">
        <h2>1. Tomita Algorithm</h2>
        <p>
          The algorithm by Tomita, Tanaka, and Takahashi significantly improves the worst-case time complexity of maximal clique enumeration to **O(3ⁿ/3)**. It is a **DFS-based algorithm** with pruning methods similar to the **Bron–Kerbosch algorithm**.
        </p>

        <h3>Optimizations Implemented</h3>
        <ul>
          <li>Implemented Selectmaximising() function to reduce recursive intersection calls, improving execution time by 50x.</li>
          <li>Switched from adjList to adjSet, enabling O(1) neighbor lookups.</li>
          <li>Used reference parameters to avoid unnecessary copying of large vectors in recursive functions.</li>
          <li>For As-Skitter, sampled 100 vertices while selecting the pivot to handle large graphs efficiently.</li>
        </ul>

        <h3>Performance Analysis</h3>
        <ul>
          <li><strong>Wiki-Vote:</strong> 11,012 ms | 459,002 maximal cliques (7,115 nodes, 103,689 edges, E:V = 14.57)</li>
          <li><strong>Enron-Email:</strong> 294,561 ms | 226,859 maximal cliques (36,692 nodes, 367,662 edges, E:V = 10.02)</li>
          <li><strong>As-Skitter:</strong> 49h 18m 39s | 40,001,624 maximal cliques (1,696,415 nodes, 11,095,298 edges, E:V = 6.5)</li>
        </ul>

        <h3>Key Observation</h3>
        <p>
          The density of the graph is inversely proportional to execution time. Denser graphs allow for more effective pruning, leading to faster execution.
        </p>
      </section>

      {/* ELS Algorithm Observations */}
      <section className="observation-section">
        <h2>2. Eppstein, Löffler & Strash (ELS) Algorithm</h2>
        <p>
          The Bron-Kerbosch-based algorithm is optimized with degeneracy ordering, enabling efficient maximal clique enumeration.
        </p>

        <h3>Performance Analysis</h3>
        <ul>
          <li><strong>Email-Enron:</strong> 9.719s | 226,859 maximal cliques (Largest Clique: 20, Avg: 8.08, Std Dev: 3.32)</li>
          <li><strong>Wiki-Vote:</strong> 12.119s | 459,002 maximal cliques (Largest Clique: 17, Avg: 7.32, Std Dev: 2.35)</li>
          <li><strong>As-Skitter:</strong> 37.7 min | 40,001,624 maximal cliques (Largest Clique: 67, Avg: 19.94, Std Dev: 12.91)</li>
        </ul>

        <h3>Observations</h3>
        <ul>
          <li>Handles small datasets efficiently within seconds.</li>
          <li>Scales well even for large graphs like As-Skitter.</li>
          <li>Degeneracy ordering improves performance by reducing redundant recursion.</li>
        </ul>

        <h3>Future Improvements</h3>
        <ul>
          <li>Implement parallel processing to enhance scalability.</li>
          <li>Integrate visualization tools for clique distributions.</li>
          <li>Extend analysis to directed and weighted graphs.</li>
        </ul>
      </section>

      {/* Chiba Algorithm Observations */}
      <section className="observation-section">
        <h2>3. Chiba & Nishizeki Algorithm</h2>
        <p>
          The Chiba algorithm leverages degeneracy ordering and optimized intersection operations, making it highly efficient for maximal clique enumeration.
        </p>

        <h3>Performance Analysis</h3>
        <ul>
          <li><strong>Email-Enron:</strong> Moderate clique sizes (Avg: 8.08), reflecting structured communication networks.</li>
          <li><strong>Wiki-Vote:</strong> Smaller cliques (Avg: 7.3), suggesting clustered voting behaviors.</li>
          <li><strong>As-Skitter:</strong> Larger cliques (Avg: 19.94) with high variance, indicating **dense interconnections in internet topology.</li>
        </ul>

        <h3>Algorithm Efficiency</h3>
        <ul>
          <li>Effectively leverages degeneracy ordering to minimize redundant operations.</li>
          <li>Uses optimized intersection and backtracking to prune the search space efficiently.</li>
          <li>Scales well to handle millions of maximal cliques.</li>
        </ul>

        <h3>Future Enhancements</h3>
        <ul>
          <li>Integrate parallel processing for improved performance.</li>
          <li>Develop graph visualization tools for better insights.</li>
          <li>Extend capabilities to dynamic and weighted graphs.</li>
        </ul>

        <h3>Additional Observations</h3>
        <p>
          The difference in clique size distributions across datasets reveals distinct clustering patterns between structured networks (social, organizational) and irregular internet graphs.  
          This highlights the algorithm's applicability in cybersecurity, social network analysis, and large-scale graph processing.
        </p>
      </section>

      <footer>
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default Observations;
