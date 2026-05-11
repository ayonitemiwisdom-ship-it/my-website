function App() {
  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "100px",
      fontFamily: "Arial"
    }}>
      <h1>CI/CD Website Deployment Project</h1>

      <p>
        This website was built using React and deployed with
        GitHub Actions CI/CD Pipeline on AWS EC2.
      </p>

      <h3>Technologies Used</h3>

      <ul style={{ listStyle: "none" }}>
        <li>React + Vite</li>
        <li>GitHub Actions</li>
        <li>AWS EC2</li>
        <li>Nginx</li>
      </ul>
    </div>
  )
}
export default App