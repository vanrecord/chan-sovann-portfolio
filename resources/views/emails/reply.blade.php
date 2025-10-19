<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reply from Chan Sovann</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
            background-color: #f5f7fa;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            background-color: #ffffff;
            margin: 40px auto;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(90deg, #4b0082, #5b21b6, #2563eb);
            color: #ffffff;
            padding: 20px;
            text-align: center;
            font-size: 22px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
            line-height: 1.6;
        }
        .footer {
            background-color: #f3f4f6;
            padding: 15px;
            text-align: center;
            font-size: 13px;
            color: #6b7280;
        }
        .highlight {
            color: #4f46e5;
            font-weight: bold;
        }
        @media (max-width: 600px) {
            .content { padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            Chan Sovann — Portfolio
        </div>
        <div class="content">
            <p>Dear <strong>{{ $data['name'] ?? 'Friend' }}</strong>,</p>

            <p>
                Thank you for getting in touch with 
                <span class="highlight">Chan Sovann</span>.  
                I’ve received your message and will get back to you as soon as possible.
            </p>

            <p style="margin-top: 20px;">
                Best regards,<br>
                <strong>Chan Sovann</strong><br>
                <a href="https://chan-sovann-portfolio.vercel.app/" style="color:#4f46e5; text-decoration:none;">sovann.dev</a>
            </p>
        </div>
        <div class="footer">
            © {{ date('Y') }} Chan Sovann. All rights reserved.
        </div>
    </div>
</body>
</html>
