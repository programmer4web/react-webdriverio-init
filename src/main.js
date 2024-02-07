import { createRoot } from 'react-dom/client';
import EditableChip from "./react-components/editable/EditableChip";

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<EditableChip />);