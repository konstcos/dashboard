<?php

namespace App\Entities;

use Carbon\Carbon;


class Projects
{

    /**
     *
     * @var integer
     */
    private $id;

    /**
     *
     * @var string
     */
    private $name;

    /**
     *
     * @var string|null
     */
    private $description;

    /**
     *
     * @var string|null
     */
    private $content;

    /**
     *
     * @var Carbon|null
     */
    private $finish_at;

    /**
     *
     * @var Carbon|null
     */
    private $close_at;

    /**
     *
     * @var Carbon|null
     */
    private $deleted_at;

    /**
     *
     * @var Carbon|null
     */
    private $updated_at;

    /**
     *
     * @var Carbon|null
     */
    private $created_at;

}
