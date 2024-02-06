import { createRoot } from 'react-dom/client';
import EditableChip from "./react-components/editable/Editable-chip";

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<EditableChip />);