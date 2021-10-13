export default function PinPad() {

    return (
        <div className="pin-pad">
            <div className="pin-pad__row">
                Enter Pin
            </div>
            <div className="pin-pad__row">
                <input type="password" name="pin" id="pin" />
            </div>
            <div className="pin-pad__row">
                <div className="pin-pad__btn" value='1'>1</div>
                <div className="pin-pad__btn" value='2'>2</div>
                <div className="pin-pad__btn" value='3'>3</div>
            </div>
            <div className="pin-pad__row">
                <div className="pin-pad__btn" value='4'>4</div>
                <div className="pin-pad__btn" value='5'>5</div>
                <div className="pin-pad__btn" value='6'>6</div>
            </div>
            <div className="pin-pad__row">
                <div className="pin-pad__btn" value='7'>7</div>
                <div className="pin-pad__btn" value='8'>8</div>
                <div className="pin-pad__btn" value='9'>9</div>
            </div>
            <div className="pin-pad__row">
                <div className="pin-pad__btn" value='clear'>&larr;</div>
                <div className="pin-pad__btn" value='0'>0</div>
                <div className="pin-pad__btn" value='submit'>&rarr;</div>
            </div>
        </div>
    )
};