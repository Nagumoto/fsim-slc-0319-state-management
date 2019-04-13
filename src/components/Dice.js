import React from 'react'
import PropTypes from 'prop-types'
import Die from './Die'

const Dice = ({ dice, onRoll, rollAll }) => (
    <div>
        <input type="button" onClick={rollAll} value="Roll All" />
        {dice.map((die, index) => (
            <Die key={index} {...die} onClick={() => onRoll(index)} />
        ))}
    </div>
)

Dice.propTypes = {
    dice: PropTypes.arrayOf(
        PropTypes.shape({
            numSides: PropTypes.number.isRequired,
            roll: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default Dice