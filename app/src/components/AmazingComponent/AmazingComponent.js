import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './AmazingComponent.module.scss';
import { AmazingInput, AmazingBox } from 'components';

const AmazingComponent = ({
  boxes,
  onAddBox,
  onRemoveBox
}) => (
  <div className={styles.fullScreen}>
    <h1 className="section-header">Play with redux by adding a box to the wall</h1>
    <AmazingInput
      onSubmit={onAddBox}
    />
    <div className={styles.flex}>
      {boxes.map((box, i) =>
        <AmazingBox
          key={i}
          id={i}
          content={box}
          onRemove={onRemoveBox}
        />
      )}
    </div>
  </div>
);

AmazingComponent.propTypes = {
  boxes: PropTypes.array.isRequired,
  onAddBox: PropTypes.func.isRequired,
  onRemoveBox: PropTypes.func.isRequired
};

export default cssModules(AmazingComponent, styles);
