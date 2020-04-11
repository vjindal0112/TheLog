import styled from 'styled-components';
import { Card } from './Card';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
`

interface PopupProps {
  onClickOverlay(): void;
}

const Popup: React.FC<PopupProps> = ({children, onClickOverlay}) => (
  <Overlay onClick={onClickOverlay}>
    <Card>
      {children}
    </Card>
  </Overlay>
)

export {Popup}