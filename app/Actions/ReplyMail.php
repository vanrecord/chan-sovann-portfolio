<?php

namespace App\Actions;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Mail\Mailable;

class ReplyMail extends Mailable
{
    public $datas;
    public function __construct($datas)
    {
        $this->datas =  $datas;
    }

    public function build()
    {
        $subject = '';
        return $this->view('emails.reply')
                    ->with('data', $this->datas)
                    ->subject($subject);
    }
}
