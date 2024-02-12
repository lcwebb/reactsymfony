<?php

namespace App\Entity;

use App\Repository\DIJRequestRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


#[ORM\Entity(repositoryClass: DIJRequestRepository::class)]
class DIJRequest
{
   
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'dIJRequests')]
    private ?User $user = null;

    #[ORM\Column(length: 255)]
    private ?string $service = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $status = [];

    #[ORM\Column(length: 255)]
    #[Assert\Length(
        min: 3,
        max: 40,
        minMessage: 'Your last name must be at least {{ limit }} characters long',
        maxMessage: 'Your last name cannot be longer than {{ limit }} characters',
    )]
    private ?string $lastname_request = null;

    #[ORM\Column(length: 255)]
    #[Assert\Length(
        min: 3,
        max: 40,
        minMessage: 'Your first name must be at least {{ limit }} characters long',
        maxMessage: 'Your first name cannot be longer than {{ limit }} characters',
    )]
    private ?string $firstname_request = null;

    #[ORM\Column(length: 255)]
    private ?string $country = null;

    #[ORM\Column]
    private ?int $num_product = null;

    #[ORM\Column(length: 255)]
    private ?string $place_delivery = null;

    #[ORM\Column(length: 255)]
    #[Assert\Email(
        message: 'The email {{ value }} is not a valid email.',
    )]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Assert\Length(
        min: 9,
        max: 20,
        minMessage: 'Your phone number must be at least {{ limit }} characters long',
        maxMessage: 'Your phone number cannot be longer than {{ limit }} characters',
    )]
    //#[Assert\Regex(
        //pattern: '/^(?:(?:\+|00)33|0|(?:(?:\+|00)41(?: |-)?)?0|(?:(?:\+|00)49(?: |-)?)?0|(?:(?:\+|00)32(?: |-)?)?0|(?:(?:\+|00)852(?: |-)?)?0|(?:(?:\+|00)44(?: |-)?)?0|(?:(?:\+|00)886(?: |-)?)?0|(?:(?:\+|00)86(?: |-)?)?0|(?:(?:\+|00)377(?: |-)?)?0)[1-9]\d{0,13}$/',
        //match: true,
        //min: 8,
        //max: 20,
        //message: 'Your phone number format is wrong. Please write a valid phone number',
    //)]
    private ?string $phone = null;

    #[ORM\Column(length: 255)]
    private ?string $clientid = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tracking = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tracker = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $coupon = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $paymentkey = null;


    public function getPaymentkey(): ?string
    {
        return $this->paymentkey;
    }

    public function setPaymentkey(string $paymentkey): self
    {
        $this->paymentkey = $paymentkey;

        return $this;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getService(): ?string
    {
        return $this->service;
    }

    public function setService(string $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getStatus(): array
    {
        return $this->status;
    }

    public function setStatus(array $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getLastnameRequest(): ?string
    {
        return $this->lastname_request;
    }

    public function setLastnameRequest(string $lastname_request): self
    {
        $this->lastname_request = $lastname_request;

        return $this;
    }

    public function getFirstnameRequest(): ?string
    {
        return $this->firstname_request;
    }

    public function setFirstnameRequest(string $firstname_request): self
    {
        $this->firstname_request = $firstname_request;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getNumProduct(): ?int
    {
        return $this->num_product;
    }

    public function setNumProduct(int $num_product): self
    {
        $this->num_product = $num_product;

        return $this;
    }

    public function getPlaceDelivery(): ?string
    {
        return $this->place_delivery;
    }

    public function setPlaceDelivery(string $place_delivery): self
    {
        $this->place_delivery = $place_delivery;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getClientid(): ?string
    {
        return $this->clientid;
    }

    public function setClientid(string $clientid): self
    {
        $this->clientid = $clientid;

        return $this;
    }

    public function getTracking(): ?string
    {
        return $this->tracking;
    }

    public function setTracking(?string $tracking): self
    {
        $this->tracking = $tracking;

        return $this;
    }

    public function getTracker(): ?string
    {
        return $this->tracker;
    }

    public function setTracker(?string $tracker): self
    {
        $this->tracker = $tracker;

        return $this;
    }

    public function getCoupon(): ?string
    {
        return $this->coupon;
    }

    public function setCoupon(?string $coupon): self
    {
        $this->coupon = $coupon;

        return $this;
    }

}
