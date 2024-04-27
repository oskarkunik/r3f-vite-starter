import { DragEventHandler } from 'react';
import useGlobalUIState, { GlobalUIState } from '@/store/useGlobalUiState';

const useDragAndDrop = () => {
  const setIsDragging = useGlobalUIState((state) => (state as GlobalUIState).setIsDragging)
    /**
     * Set to ondragover in drop slots
     */
    const allowDrop: DragEventHandler<HTMLDivElement> = (event): void => {
      event.preventDefault();
    }

    /**
     * Set to ondragstart for draggable elements
     */
    const onDrag: DragEventHandler<HTMLDivElement> = (event): void => {
      const name = (event!.target as HTMLElement).getAttribute('data-name');
      if (name) {

          setIsDragging(true);
          (event.dataTransfer!).setData("text", name);
      }

    }

    /**
     * Fired whenever dragging ends (finished or cancelled)
     */
    const onDragEnd = (): void => {
      setIsDragging(false);
    };

    return {
        onDrag,
        onDragEnd,
        allowDrop,
    }

};

export default useDragAndDrop;

