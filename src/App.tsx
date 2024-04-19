import ProjectRoutes from './router';
import DetailsContextProvider from './contexts/detailsContext';

function App() {
	return (
		<DetailsContextProvider>
			<div className="App">
				<ProjectRoutes />
			</div>
		</DetailsContextProvider>
	);
}

export default App;
