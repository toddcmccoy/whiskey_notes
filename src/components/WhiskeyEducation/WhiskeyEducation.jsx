import { useHistory } from "react-router-dom";
import './WhiskeyEducation.css';


function WhiskeyEducation(){

    const history = useHistory();

    const handleGoDashboard = () => {
        history.push('/dashboard')
    };

// sending the selected rating to the store and ensuring that the submission is in the range of 1 to 5
    
    return(
        <div className = "container">
            <div className = "question-card">
                <div className = "info">
                <nav class="accordion arrows">
            <header class="box">
                <label for="acc-close" class="box-title">Whiskey Types</label>
            </header>
            <input type="radio" name="accordion" id="cb1" />
            <section class="box">
                <label class="box-title" for="cb1">Scotch Whisky</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">Scotch</div>
            </section>
            <input type="radio" name="accordion" id="cb2" />
            <section class="box">
                <label class="box-title" for="cb2">Bourbon</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">
                
                Bourbon is a distinct product of the United States.<br />
                It must be distilled at no higher than 165 proof from a recipe of at least 51% corn,
                placed in new charred oak containers at no higher than 125 proof,
                then finally bottled at no less than 80 proof.<br /><br />

                Fun fact: While Kentucky produces 90 to 95 percent of bourbon in the world
                it can be made anywhere in the United States, including Guam and Puerto Rico.
                </div>
            </section>
            <input type="radio" name="accordion" id="cb3" />
            <section class="box">
                <label class="box-title" for="cb3">Irish Whiskey</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">
                The legal stuff - Irish whiskey must be distilled and aged in Ireland.<br />
                Unique note - Ireland is home to Single Pot Still whiskey, a whiskey produced in a pot still using both malted barley
                and unmalted barley. The practice began when the British Crown increased taxes on malted barley in 1785. Irish distillers reduced the amount
                of malted barley and added in unmalted barley, thereby screwing over the English.
                </div>
            </section>
            <input type="radio" name="accordion" id="cb7" />
            <section class="box">
                <label class="box-title" for="cb7">Rye Whiskey</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">Rye info</div>
            </section>
            <input type="radio" name="accordion" id="cb8" />
            <section class="box">
                <label class="box-title" for="cb8">Canadian Whisky</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">Canadian info</div>
            </section>
            <input type="radio" name="accordion" id="cb9" />
            <section class="box">
                <label class="box-title" for="cb9">Japanese Whiskey</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">Japanese info</div>
            </section>
            
            </nav>
            <nav class="accordion arrows">
            <header class="box">
                <label for="acc-close" class="box-title">Fun facts</label>
            </header>
            <input type="radio" name="accordion" id="cb4" />
            <section class="box">
                <label class="box-title" for="cb4">Is Jack Daniel's a Bourbon?</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">Technically, yes it is. I'll give you a second with that.<br />
                Old Number 7 meets all the legal requirements for bourbon. 
                In fact, it is classified as a bourbon by the United States Tax and Trade Bureau.
                Why don't they call it bourbon? Well, because they don't want to.<br />
                Pro tip: when visiting Tennessee DO NOT refer to Jack Daniel's as bourbon. 
                It will not go well for you.
                </div>
            </section>

            <input type="radio" name="accordion" id="acc-close" />
            <input type="radio" name="accordion" id="cb5" />
            <section class="box">
                <label class="box-title" for="cb5">How is whisk(e)y made?</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">It all starts with grain<br />
                
                </div>
            </section>

            <input type="radio" name="accordion" id="acc-close" />
            <input type="radio" name="accordion" id="cb6" />
            <section class="box">
                <label class="box-title" for="cb6">Why do they char the barrels?</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">
                Charring essentially opens the wood up, making it easier for bourbon to extract flavors. It also catalyzes key chemical changes that are essential to bourbon. Ever tasted vanilla? Because lignin, the source of vanillin , 
                produces a higher level of flavor the longer a barrel is charred. Likewise, toffee and caramel notes come from hemicellulose, which breaks down into wood sugars in the presence of intense heat. 
                The resting bourbon absorbs these sugars from the caramelized surface as it ages.
                A higher level of char has other effects as well. 
                Higher charred barrels allow less interaction between the wood tannins and the spirit. 
                Lactones, which are the compounds responsible for coconut and woody notes in a bourbon, are similarly lessened as the char increases. 
                <br />
                </div>
            </section>

            <input type="radio" name="accordion" id="acc-close" />
            <input type="radio" name="accordion" id="cb10" />
            <section class="box">
                <label class="box-title" for="cb10">More Resources</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">
                I highly recommend 
                <a href="https://www.amazon.com/Tasting-Whiskey-Insiders-Pleasures-Spirits/dp/1612123015"> Tasting Whiskey by Lew Bryson</a>.
                This book is by far the best and most approachable introduction to the world of whiskey I have found.
                </div>
            </section>
            <input type="radio" name="accordion" id="cb11" />
            <section class="box">
                <label class="box-title" for="cb11">More</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">More info to come</div>
            </section>
            <input type="radio" name="accordion" id="cb12" />
            <section class="box">
                <label class="box-title" for="cb12">More</label>
                <label class="box-close" for="acc-close"></label>
                <div class="box-content">More info to come</div>
            </section>
            </nav>
            </div><br />
            <button onClick={handleGoDashboard}>Back to dashboard</button>
        </div>
    </div>
    )



}

export default WhiskeyEducation;
