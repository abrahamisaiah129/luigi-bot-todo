// Add react app code here
import Main from "main.jsx";
class Hello extends React.Component {
  render() {
    return <Main/>
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
