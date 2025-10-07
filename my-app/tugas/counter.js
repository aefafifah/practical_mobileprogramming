class PenghitungClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aktif: false, hitung: 0 };
  }

  handleTambah = () => {
    this.setState({ aktif: true, hitung: this.state.hitung + 1 });
  };

  handleKurang = () => {
    this.setState({ aktif: false, hitung: this.state.hitung - 1 });
  };

  render() {
    return (
      <div className="paper-container">
        <div className="paper circle">
          <div className="content">
            <h2>Ayo Menghitung di Lingkar Kecil</h2>
            <h1>{this.state.hitung}</h1>
            <div>
              <button onClick={this.handleKurang}>-1</button>
              <button onClick={this.handleTambah}>+1</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function PenghitungFunctional() {
  const [hitung, setHitung] = React.useState(0);

  const tambah = () => setHitung(hitung + 1);
  const kurang = () => setHitung(hitung - 1);

  return (
    <div className="paper-container">
      <div className="paper">
        <div className="content">
          <h2>Ayo Hitung Pakai Functional Component</h2>
          <h1>{hitung}</h1>
          <div>
            <button onClick={kurang}>-1</button>
            <button onClick={tambah}>+1</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const App = () => (
  <div>
    <PenghitungClass />
    <PenghitungFunctional />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
