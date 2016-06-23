<!--<?php
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $send = $_POST['submit'];

    $from = 'From: Portfolio'; 
    $to = 'pasiak5@gmail.com'; 
    $subject = 'Portfolio';

    $header = "Content-type: text/html; charset=utf-8\r\nFrom: $mail";
?>-->

<?php
//filtruje dane użytkownika
$imie = htmlspecialchars(trim($_POST['name']));
$mail = htmlspecialchars(trim($_POST['email']));
$wiadomosc = htmlspecialchars(trim($_POST['message']));
$send = $_POST['submit'];
//mail na który będa wysyłane wiadomości
$odbiorca = "pasiak5@gmail.com";
//nagłówki
$header = "Content-type: text/html; charset=utf-8\r\nFrom: $mail";

//Sprawdzam czy istnieje ciastko, jeżeli tak wyświetlam komunikat
if (isset($_COOKIE['submit'])) $error ='Odczekaj '.($_COOKIE['submit']-time()).' sekund przed wysłaniem kolejnej wiadomości';   

if ($send && !isset($_COOKIE['submit']))
    {
    //Sprawdzam nick
    if (empty($imie))
        { $error = "Nie wypełniłeś pola <strong>Nick !</strong><br/>"; }
    elseif (strlen($imie) > 20)
        { $error .="Za długi nick - max. 20 znaków <br/>";}
     
    //Sprawdzam mail
    if (empty($mail))
        { $error .= "Nie wypełniłeś pola <strong>E-mail !</strong><br/>"; }
    elseif (strlen($mail) > 30)
        { $error .="Za długi e-mail - max. 30 znaków <br/>";}
    elseif (preg_match('/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\-\_\.]+\@[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\-\_\.]+\.[a-z]{2,4}$/',$mail) == false)
        { $error .= "Niepoprawny adres E-mail! <br/>"; }
         
    //Sprawdzam wiadomosc
    if (empty($wiadomosc))
        { $error .= "Nie wypełniłeś pola <strong>Wiadomość !</strong><br/>"; }
    elseif (strlen($wiadomosc) > 400)
        { $error .="Za długa wiadomość - max. 400 znaków <br/>";}

    //Sprawdzam czy są błędy i wysyłam wiadomość
    if (empty($error))
        {
        $list = "Przysłał - $imie ($mail) <br/> Treść wiadomości - $wiadomosc";
         
        if (mail($odbiorca, $temat, $list, $header))   
        {
         $error .= "Twoja wiadomość została wysłana";
         setcookie("send", time()+60, time()+60);
         }
        else
            { $error .= "Wystąpił błąd podczas wysyłania wiadomości, spróbuj później.";}   
        }
    }
?>