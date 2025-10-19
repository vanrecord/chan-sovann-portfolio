<DOCTYPE html>
    <html lang="en-US">
         
        <head>
            <meta charset="utf-8">
        </head>
    
        <body>
            <p>Dear {{ $data['full_name']??'' }},</p>
            <p>
                Thanks for messaging <span style="font-weight: bold;">{{$company->name_native}}</span>.
            </p>
            
            <p>We try to be as responsive as possible, We'll get back to you soon.</p>
            
            <p>
                Please review the details of our information below.
            </p>
            <p>
                Best regard,<br>
                {{$company->name_native}}
            </p>

            <div style="color:#6666ff">
                <p>Office phone&nbsp;&nbsp;: {{$company->prefix_phone}}{{$company->phone}}</p>
                <p>E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {{$company->email}}</p>
                <p>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {{$company->addressable?->address??''}}</p>
            </div>

        </body>
    </html>