<DOCTYPE html>
    <html lang="en-US">
         
        <head>
            <meta charset="utf-8">
        </head>
    
        <body>
            <p>
                Name: {{ $data['name']??'' }}
            </p>
            <p>
                Email: {{ $data['email']??'' }}
            </p>
            <p>{{$data['message']??''}}</p>
        </body>
    </html>