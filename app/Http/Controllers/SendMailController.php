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
        $my_email = 'vanrecord1122@gmail.com';
        Mail::to($my_email)->send(new ContactMail($datas));
    }
}
