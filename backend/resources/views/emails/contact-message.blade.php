<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Nouveau message portfolio</title>
</head>

<body style="
    margin: 0;
    padding: 30px;
    background: #f4f7fb;
    font-family: Arial, sans-serif;
    color: #1e293b;
">

    <div style="
        max-width: 650px;
        margin: auto;
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    ">

        <h2 style="margin-top: 0;">
            Nouveau message depuis votre portfolio
        </h2>

        <p>
            Une personne vient de vous contacter depuis le formulaire
            de votre portfolio.
        </p>

        <hr style="
            border: 0;
            border-top: 1px solid #e2e8f0;
            margin: 25px 0;
        ">

        <p>
            <strong>Nom :</strong><br>
            {{ $contactMessage->name }}
        </p>

        <p>
            <strong>Email :</strong><br>
            {{ $contactMessage->email }}
        </p>

        <p>
            <strong>Sujet :</strong><br>
            {{ $contactMessage->subject }}
        </p>

        <p>
            <strong>Message :</strong>
        </p>

        <div style="
            background: #f8fafc;
            border-left: 4px solid #2563eb;
            padding: 15px;
            border-radius: 6px;
            white-space: pre-line;
        ">{{ $contactMessage->message }}</div>

        <p style="
            margin-top: 30px;
            font-size: 13px;
            color: #64748b;
        ">
            Message envoyé depuis votre portfolio.
        </p>

    </div>

</body>
</html>