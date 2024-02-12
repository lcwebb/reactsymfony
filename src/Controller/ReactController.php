<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Stripe\StripeClient;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\Uuid;




class ReactController extends AbstractController
{

    // public function __construct(EntityManagerInterface $entityManager)
    // {
    //     $this->entityManager = $entityManager;
    // }

    
    // #[Route('/react', name: 'app_react')]
    // public function index(): JsonResponse
    // {
    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/ReactController.php',
    //     ]);
    // }

    /**
     * @Route("/react", name="app_react")
     */
    public function index(): Response
    {
        return $this->render('react/index.html.twig');
    }

    /**
     * @Route("/process", name="app_process")
     */
    public function process(): Response
    {
        return $this->render('react/index.html.twig');
    }

    #[Route('/payment', name: 'app_payment')]
    public function payment(Request $request): Response
    {

        function generateUid()
            {
                // limit clientid to 10 characters
                return substr(Uuid::uuid4(), 0, 13);
            }

        $clientid = generateUid();

        $requestData = $request->request->all(); 
        $dijRequest = $requestData['dij_request'];
        //dd($requestData);
        $lastname = $dijRequest["lastname_request"];
        $firstname = $dijRequest["firstname_request"];
        $num_product = $dijRequest["num_product"];
        $country = $dijRequest["country"];
        $place_delivery = $dijRequest["place_delivery"];
        $email = $dijRequest["email"];
        $phone = $dijRequest["phone"];

        $amount = 0;
        if($place_delivery == "HOME"){$amount = 79.99;}
        if($place_delivery == "JAPAN"){$amount = 69.99;}
        if($place_delivery == "711"){$amount = 69.99;}

        $total_amount = $num_product * $amount;


        // Set your secret key. Remember to switch to your live secret key in production.
        // See your keys here: https://dashboard.stripe.com/apikeys
        $stripe = new \Stripe\StripeClient('sk_test_r5wmBASZjpnabVnWkylGYsUn00M5w5C5hb');

        $checkout = $stripe->checkout->sessions->create([
        'shipping_address_collection' => [
            'allowed_countries' => ['FR', 'CH', 'BE', 'MC', 'SI', 'GB', 'HK', 'NC', 'TW', 'DE'],
        ],
        'shipping_options' => [
            [
            'shipping_rate_data' => [
                'type' => 'fixed_amount',
                'fixed_amount' => [
                'amount' => 0,
                'currency' => 'eur',
                ],
                'display_name' => 'Livraison rapide',
                'delivery_estimate' => [
                'minimum' => [
                    'unit' => 'business_day',
                    'value' => 10,
                ],
                'maximum' => [
                    'unit' => 'business_day',
                    'value' => 15,
                ],
                ],
            ],
            ],
            [
            'shipping_rate_data' => [
                'type' => 'fixed_amount',
                'fixed_amount' => [
                'amount' => 1999,
                'currency' => 'eur',
                ],
                'display_name' => 'Livraison express',
                'delivery_estimate' => [
                'minimum' => [
                    'unit' => 'business_day',
                    'value' => 4,
                ],
                'maximum' => [
                    'unit' => 'business_day',
                    'value' => 5,
                ],
                ],
            ],
            ],
        ],
        'line_items' => [
            [
                'price_data' => [
                    'currency' => 'eur',
                    'product_data' => [
                        'name' => 'Official JAF Translation / Drivinjapan',
                    ],
                    'unit_amount' => $amount*100,
                ],
                'quantity' => $num_product,
            ],
        ],
        'metadata' => [
            'reference' => $clientid, 
            'client_reference_id' => "Drivinjapan"
        ],
        'mode' => 'payment',
        'success_url' => 'https://example.com/success',
        'cancel_url' => 'https://example.com/cancel',
        ]);

        return $this->redirect($checkout->url);
    }

}