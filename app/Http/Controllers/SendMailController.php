<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\Tenant;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Actions\ContactMail;
use App\Actions\ReplyMail;
use Illuminate\Support\Facades\Validator;

class SendMailController extends Controller
{
    public function __construct()
    {

    }

    public function sendMail(Request $request)
    {
        $datas = $request->all();
        Validator::make($datas, [
            'name' => ['required'],
            'message' =>['required'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ])->validate();
        $my_email = env('MAIL_USERNAME');
        Mail::to($my_email)->send(new ContactMail($datas));
        Mail::to($datas['email'])->send(new ReplyMail($datas));
    }
}
