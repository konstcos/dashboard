<?php

namespace App\Modules\Projects\Interactors;


class Project
{

    /**
     * Получение всех проектов пользователя по пагинатору
     *
     * @param int $userId
     * @param int $page
     *
     * @return array
     */
    public function all(int $userId, int $page=1): array
    {

        return [];
    }


    /**
     * Получение данных одного проекта пользователя
     *
     * @param int $userId
     * @param int $projectId
     *
     * @return array
     */
    public function get(int $userId, int $projectId): array
    {

        return [];
    }


    /**
     * Сохранение данных по проекту пользователя
     *
     * @param int $userId
     * @param     $projectDto
     *
     * @return array
     */
    public function save(int $userId, $projectDto): array
    {

        return [];
    }

}
