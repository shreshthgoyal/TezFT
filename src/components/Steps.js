import './Steps.css';

function Steps() {
  return (
    <section class="ps-timeline-sec">
        <div class="container">
            <ol class="ps-timeline">
                <li>
                    <div class="img-handler-top">
                        <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_03.png" alt=""/>
                    </div>
                    <div class="ps-bot">
                        <p>Do you have a recent injury or long term pain?</p>
                    </div>
                    <span class="ps-sp-top">01</span>
                </li>
                <li>
                    <div class="img-handler-bot">
                        <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt=""/>
                    </div>
                    <div class="ps-top">
                        <p>Have you tried Physiotherapy, Chiropractor or your GP without the pain free results?</p>
                    </div>
                    <span class="ps-sp-bot">02</span>
                </li>
                <li>
                    <div class="img-handler-top">
                        <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_05.png" alt=""/>
                    </div>
                    <div class="ps-bot">
                        <p>Let Physology assess and treat your pain with our trusted revolusionary approach.</p>
                    </div>
                    <span class="ps-sp-top">03</span>
                </li>
                <li>
                    <div class="img-handler-bot">
                        <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_10.png" alt=""/>
                    </div>
                    <div class="ps-top">
                        <p>Join our happy family of pain free clients.</p>
                    </div>
                    <span class="ps-sp-bot">04</span>
                </li>
            </ol>
        </div>
    </section>
  )
}

export default Steps;