<?php

namespace App\Actions;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Lang;
use Illuminate\Mail\Mailable;

class ContactMail extends Mailable
{
    public $datas;
    public function __construct($datas)
    {
        $this->datas =  $datas;
    }
    public function build()
    {info($this->datas);
        $subject = "New Message";
        return $this->from($this->datas['email'], $this->datas['name'])
                    ->subject('New Contact Form Message')
                    ->with(['data'=>$this->datas])
                    ->view('emails.contact');

        return $this->view('emails.contact')
                    ->with(['data'=>$this->datas])
                    ->subject($subject);
    }
}
