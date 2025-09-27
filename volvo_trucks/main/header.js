const header = () => {
    return `
    <section class="head just-flex">
        <div id="logo" class="logo just-flex" style="width: 20px;">
            <img src="../imagini/Volvo-Logo.webp" alt="">
            <p>Trucks</p>
        </div>

        <div>
            <div class="info-sus">
                <a href=""><i class="fa-solid fa-phone"></i>+ 46 1234 92 22 00</a>
                <a href="../main/cart.html" id="cart-link" style="position: relative;">
    <i class="fa-solid fa-cart-shopping"></i>Volvo Trucks Str
    <span id="cart-counter" style="
        position: absolute;
        top: -10px;
        left: -15px;
        background: red;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        display: none;
    ">0</span>
</a>
                <a href=""><i class="fa-solid fa-globe"></i>Global</a>
            </div>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search">
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="nav">
        <ul>
            <li class="nav-li"><a href="">ABOUT US</a></li>
            <li class="nav-li"><a href="">NEWS & INSIGHTS</a></li>
            <li class="nav-li"><a href="">TRUCKS</a></li>
            <li class="nav-li"><a href="">SERVICES</a></li>
            <li class="nav-li"><a href="">DEALER LOCATOR</a></li>
            <li class="nav-li"><a href="">CONTACT US</a></li>
        </ul>

        <div class="hidden nav-drop">
            <div class="info-nav">
                <a class="titlu" href="">Who we are</a>
                <a href="">Part of Volvo Group</a>
                <a href="">Career</a>
                <a href="">Facts and figures</a>
                <a href="">Our design</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">What we believe in</a>
                <a href="">Quality</a>
                <a href="">Safety</a>
                <a href="">Environmental care</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">How we drive progress</a>
                <a href="">Towards zero emissions</a>
                <a href="">Towards zero accidents</a>
                <a href="">Towards a more sustainable society</a>
                <a href="">Towards increased productivity</a>
            </div>
        </div>
        <div class="hidden nav-drop">
            <div class="info-nav">
                <a class="titlu" href="">Industry insights</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Volvo Trucks Stories</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Press releases</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Contact press</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Media gallery</a>
            </div>
        </div>
        <div class="hidden nav-drop">
            <div class="info-nav">
                <a class="titlu" href="../trucks/All models.html">All models</a>
                <a href="../trucks/Volvo FH16 Aero.html">Volvo FH16 Aero</a>
                <a href="../trucks/Volvo FH Aero.html">Volvo FH Aero</a>
                <a href="../trucks/Volvo FH16.html">Volvo FH16</a>
                <a href="../trucks/Volvo FH.html">Volvo FH</a>
                <a href="../trucks/Volvo FMX.html">Volvo FMX</a>
                <a href="../trucks/Volvo FM.html">Volvo FM</a>
                <a href="../trucks/Volvo FE.html">Volvo FE</a>
                <a href="../trucks/Volvo FL.html">Volvo FL</a>
                <a href="../trucks/Volvo VM.html">Volvo VM</a>
                <a href="../trucks/Volvo VNL series.html">Volvo VNL series</a>
                <a href="../trucks/Volvo VNR series.html">Volvo VNR series</a>
                <a href="../trucks/Volvo VNX series.html">Volvo VNX series</a>
                <a href="../trucks/Volvo VHD series.html">Volvo VHD series</a>
                <a href="../trucks/Volvo VAH series.html">Volvo VAH series</a>
                <a href="../trucks/Used Trucks.html">Used Trucks</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="../electric-trucks/Electric Trucks.html">Electric trucks</a>
                <a href="../electric-trucks/Volvo FH Aero Electric.html">Volvo FH Aero Electric</a>
                <a href="../electric-trucks/Volvo FH Electric.html">Volvo FH Electric</a>
                <a href="../electric-trucks/Volvo FMX Electric.html">Volvo FMX Electric</a>
                <a href="../electric-trucks/Volvo FM Electric.html">Volvo FM Electric</a>
                <a href="../electric-trucks/Volvo FM Low Entry.html">Volvo FM Low Entry</a>
                <a href="../electric-trucks/Volvo FE Electric.html">Volvo FE Electric</a>
                <a href="../electric-trucks/Volvo FL Electric.html">Volvo FL Electric</a>
                <a href="../electric-trucks/Why Electric Trucks.html">Why electric trcuks?</a>
                <a href="../electric-trucks/FAQ.html">FAQ</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Gas-powered trucks</a>
                <a href="">Volvo FH Aero gas-powered</a>
                <a href="">Volvo FH gas-powered</a>
                <a href="">Volvo FM gas-powered</a>
                <a href="">Volvo FE CNG</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Information and tools</a>
                <a href="">Driver guide</a>
                <a href="">Media hub</a>
                <a href="">Truck builder</a>
                <a href="">Environmental footprint calculator</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">The Extended Family</a>
            </div>
        </div>
        <div class="hidden nav-drop">
            <div class="info-nav">
                <a class="titlu" href="">Parts & accessories</a>
                <a href="">Genuine Volvo Parts</a>
                <a href="">Accessories</a>
                <a href="">Volvo Reman</a>
                <a href="">Volvo Trucks stores</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Vehicle service</a>
                <a href="">Volvo Service Contracts</a>
                <a href="">Genuine Volvo Service</a>
                <a href="">Service Planning</a>
                <a href="">Roadside Assistance</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Fleet management</a>
                <a href="">Volvo Connect</a>
                <a href="">Uptime</a>
                <a href="">Fuel & Energy Efficiency</a>
                <a href="">Compilance and Data</a>
                <a href="">Safety & Security</a>
                <a href="">Assets Management</a>
                <a href="">Transport Operations</a>
                <a href="">Volvo Open Charge</a>
                <a href="">Charging Management</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Driver Support</a>
                <a href="">Driver development</a>
                <a href="">My Truck App</a>
                <a href="">Driver Guide</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Financial products</a>
                <a href="">Financing</a>
                <a href="">Insurance</a>
                <a href="">Volvo Truck Rental</a>
            </div>
        </div>
        <div class="hidden nav-drop">

        </div>
        <div class="hidden nav-drop">
            <div class="info-nav">
                <a class="titlu" href="">World sales representatives</a>
                <a href="">Asia</a>
                <a href="">Europe</a>
                <a href="">Latin America</a>
                <a href="">Middle East / Africa</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Find your local dealer</a>
            </div>
            <div class="info-nav">
                <a class="titlu" href="">Contact forms</a>
                <a href="">Contact quality</a>
                <a href="">Contact safety</a>
                <a href="">Contact environment</a>
                <a href="">Contact press</a>
            </div>
        </div>
    </section>
    `;
}

export default header;

