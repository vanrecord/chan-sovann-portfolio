<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        h2 {
            color: #555;
        }
        p {
            line-height: 1.6;
            margin: 10px 0;
        }
        .label {
            font-weight: bold;
        }
        .message-box {
            background-color: #f9f9f9;
            border-left: 4px solid #4CAF50;
            padding: 10px 15px;
            margin-top: 15px;
            border-radius: 4px;
        }
        footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #888;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h2>New Contact Message</h2>

        <p><span class="label">Name:</span> {{ $data['name'] ?? '' }}</p>
        <p><span class="label">Email:</span> {{ $data['email'] ?? '' }}</p>

        <div class="message-box">
            <p>{{ $data['message'] ?? '' }}</p>
        </div>

        <footer>
            &copy; {{ date('Y') }} Chan Sovann. All rights reserved.
        </footer>
    </div>
</body>
</html>
